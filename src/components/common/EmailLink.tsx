type Props = {
    email: string;
    className?: string;
};

export default function EmailLink({ email, className = '' }: Props) {
    if (!email) return null;

    return (
        <a href={`mailto:${email}`} className={className}>
            {email}
        </a>
    );
}
