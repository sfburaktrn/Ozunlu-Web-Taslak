import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const ffmpegPath = ffmpegInstaller.path;

function mb(bytes) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function size(file) {
    return fs.statSync(file).size;
}

async function optimizeImage({ input, output, maxWidth = 1920, quality = 82 }) {
    const inputPath = path.join(publicDir, input);
    const outputPath = path.join(publicDir, output);

    if (!fs.existsSync(inputPath)) {
        console.log(`SKIP (missing): ${input}`);
        return null;
    }

    const before = size(inputPath);
    await sharp(inputPath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality, effort: 6 })
        .toFile(outputPath);

    const after = size(outputPath);
    const saved = Math.round((1 - after / before) * 100);
    console.log(`IMAGE ${input} -> ${output}: ${mb(before)} -> ${mb(after)} (${saved}% saved)`);
    return { input, output, before, after, saved };
}

function optimizeVideo(input, output, ffmpegArgs) {
    const inputPath = path.join(publicDir, input);
    const outputPath = path.join(publicDir, output);

    if (!fs.existsSync(inputPath)) {
        console.log(`SKIP (missing): ${input}`);
        return null;
    }

    const before = size(inputPath);
    const ext = path.extname(output);
    const tmpPath = path.join(publicDir, `_opt_${path.basename(output, ext)}${ext}`);

    execFileSync(ffmpegPath, ['-y', '-i', inputPath, ...ffmpegArgs, tmpPath], { stdio: 'inherit' });
    fs.renameSync(tmpPath, outputPath);

    const after = size(outputPath);
    const saved = Math.round((1 - after / before) * 100);
    console.log(`VIDEO ${input} -> ${output}: ${mb(before)} -> ${mb(after)} (${saved}% saved)`);
    return { input, output, before, after, saved };
}

const imageJobs = [
    { input: 'yari-romork-hero-new.png', output: 'yari-romork-hero-new.webp', maxWidth: 1920 },
    { input: 'images/ozunlu-damper-performans.png', output: 'images/ozunlu-damper-performans.webp', maxWidth: 1600 },
    { input: 'images/ozunlu-yari-romork-sistemleri.png', output: 'images/ozunlu-yari-romork-sistemleri.webp', maxWidth: 1600 },
    { input: 'damper-hero.png', output: 'damper-hero.webp', maxWidth: 1920 },
];

console.log('Optimizing images...\n');
const imageResults = [];
for (const job of imageJobs) {
    const result = await optimizeImage(job);
    if (result) imageResults.push(result);
}

console.log('\nOptimizing hero videos...\n');
const videoResults = [];
const mobileVideo = optimizeVideo('banner-video-new.mp4', 'banner-video-mobile.mp4', [
    '-c:v', 'libx264', '-crf', '30', '-preset', 'slow', '-an', '-movflags', '+faststart', '-vf', 'scale=720:-2',
]);
const desktopVideo = optimizeVideo('banner-video-new.mp4', 'banner-video-new-opt.mp4', [
    '-c:v', 'libx264', '-crf', '28', '-preset', 'slow', '-an', '-movflags', '+faststart', '-vf', 'scale=1280:-2',
]);
if (mobileVideo) videoResults.push(mobileVideo);
if (desktopVideo) videoResults.push(desktopVideo);

console.log('\nOptimizing legacy videos...\n');
const mp4 = optimizeVideo('banner-video-new.mp4', 'banner-video-new.mp4', [
    '-c:v', 'libx264', '-crf', '28', '-preset', 'medium', '-an', '-movflags', '+faststart', '-vf', 'scale=1920:-2',
]);
const webm = optimizeVideo('banner-video-new.webm', 'banner-video-new.webm', [
    '-c:v', 'libvpx-vp9', '-crf', '35', '-b:v', '0', '-an', '-vf', 'scale=1920:-2',
]);
if (mp4) videoResults.push(mp4);
if (webm) videoResults.push(webm);

fs.writeFileSync(
    path.join(__dirname, 'optimize-assets-result.json'),
    JSON.stringify({ images: imageResults, videos: videoResults, generatedAt: new Date().toISOString() }, null, 2),
);
console.log('\nDone.');
