'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import TurkeyMap, { type CityType } from "turkey-map-react";

import {
  serviceLocations,
  type ServiceLocation,
} from "@/data/serviceLocations";
import { useTranslations } from "next-intl";
import { defaultRichTextHandlers } from "@/i18n/richText";

type MapPreviewProps = {
  eyebrow?: string;
  title?: string;
  description?: React.ReactNode;
};

type CityMarkerWrapperProps = {
  cityComponent: React.ReactElement;
  isServiceCity: boolean;
  isSelected: boolean;
  pingDelay: number;
};

const pingDelayFromName = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) % 1000;
  }
  return (hash % 24) / 10;
};

const normalizeCityName = (name: string) =>
  name
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u011f/g, "g")
    .replace(/\u00fc/g, "u")
    .replace(/\u015f/g, "s")
    .replace(/\u0131/g, "i")
    .replace(/\u00f6/g, "o")
    .replace(/\u00e7/g, "c")
    .replace(/[^a-z0-9]/g, "");

const CityMarkerWrapper = ({
  cityComponent,
  isServiceCity,
  isSelected,
  pingDelay,
}: CityMarkerWrapperProps) => {
  const cityRef = useRef<SVGGElement>(null);
  const [center, setCenter] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!isServiceCity) return;
    const pathEl = cityRef.current?.querySelector("path");
    if (!pathEl) return;
    const { x, y, width, height } = pathEl.getBBox();
    setCenter({ x: x + width / 2, y: y + height / 2 });
  }, [isServiceCity]);

  return (
    <g>
      {React.cloneElement(cityComponent, { ref: cityRef })}
      {isServiceCity && center && (
        <g
          pointerEvents="none"
          transform={`translate(${center.x}, ${center.y})`}
          className="service-map-marker"
          style={{ ["--ping-delay" as string]: `${pingDelay}s` }}
        >
          <circle r="7" className="service-map-radar" />
          <circle r="7" className="service-map-radar service-map-radar--late" />
          <g className="service-map-core">
            <circle r="6.5" fill="#000552" opacity={isSelected ? 0.28 : 0.18} />
            <circle r="4.6" fill="#FFFFFF" />
            <circle r={isSelected ? 3.2 : 2.7} fill="#000552" />
            <circle cx="-0.6" cy="-0.8" r="0.9" fill="#FFFFFF" opacity="0.55" />
          </g>
        </g>
      )}
    </g>
  );
};

export default function MapPreview({
  eyebrow: eyebrowProp,
  title: titleProp,
  description: descriptionProp,
}: MapPreviewProps) {
  const t = useTranslations("home.mapPreview");
  const eyebrow = eyebrowProp ?? t("eyebrow");
  const title = titleProp ?? t("title");
  const description =
    descriptionProp ?? t.rich("description", defaultRichTextHandlers);

  const [selectedCity, setSelectedCity] = useState<{
    name: string;
    location: ServiceLocation | null;
  } | null>(null);

  const totalProviders = useMemo(
    () => serviceLocations.reduce((sum, loc) => sum + loc.providers.length, 0),
    []
  );

  const serviceByCity = useMemo(() => {
    const map = new Map<string, ServiceLocation>();
    for (const loc of serviceLocations) {
      map.set(normalizeCityName(loc.city), loc);
    }
    return map;
  }, []);

  const serviceCityNames = useMemo(
    () => new Set(serviceByCity.keys()),
    [serviceByCity]
  );

  const topLocations = useMemo(
    () =>
      [...serviceLocations]
        .sort((a, b) => b.providers.length - a.providers.length)
        .slice(0, 3),
    []
  );

  const selectedKey = selectedCity
    ? normalizeCityName(selectedCity.name)
    : null;

  const renderCity = useCallback(
    (cityComponent: React.ReactElement, city: CityType) => {
      const key = normalizeCityName(city.name);
      return (
        <CityMarkerWrapper
          cityComponent={cityComponent}
          isServiceCity={serviceCityNames.has(key)}
          isSelected={selectedKey === key}
          pingDelay={pingDelayFromName(city.name)}
        />
      );
    },
    [serviceCityNames, selectedKey]
  );

  const handleCityClick = useCallback(
    (city: CityType) => {
      const location = serviceByCity.get(normalizeCityName(city.name)) ?? null;
      setSelectedCity({ name: city.name, location });
    },
    [serviceByCity]
  );

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="relative bg-[#f5f5f7] rounded-[2.5rem] py-24 overflow-hidden isolate shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,5,82,0.05),_transparent_45%)] pointer-events-none" />
          <div className="px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
                  <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-ozunlu-950">
                    {titleProp ? (
                      title
                    ) : (
                      <>
                        {t("title")}
                        <span className="text-primary">{t("titleHighlight")}</span>
                      </>
                    )}
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 max-w-2xl">{description}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                    <p className="text-sm font-medium text-gray-500">{t("citiesLabel")}</p>
                    <p className="text-3xl font-bold text-ozunlu-950 tracking-tight mt-1">
                      {serviceLocations.length}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                    <p className="text-sm font-medium text-gray-500">{t("pointsLabel")}</p>
                    <p className="text-3xl font-bold text-ozunlu-950 tracking-tight mt-1">
                      {totalProviders}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase">
                    {t("topCities")}
                  </p>
                  <div className="flex flex-col gap-3">
                    {topLocations.map((loc) => (
                      <button
                        key={loc.city}
                        type="button"
                        onClick={() =>
                          setSelectedCity({ name: loc.city, location: loc })
                        }
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white text-left hover:border-primary/30 hover:shadow-md transition-all"
                      >
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-ozunlu-950 tracking-tight">{loc.city}</p>
                          <p className="text-sm text-gray-600">
                            {t("serviceCount", { count: loc.providers.length })}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl shadow-xl p-5"
              >
                <div className="relative rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <p className="mb-2 text-center text-xs font-medium text-gray-500">
                    {t("mapInstruction")}
                  </p>
                  <TurkeyMap
                    hoverable
                    showTooltip={false}
                    onClick={handleCityClick}
                    customStyle={{ idleColor: "#d1d5db", hoverColor: "#9ca3af" }}
                    cityWrapper={renderCity}
                  />

                  <AnimatePresence>
                    {selectedCity && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        className="absolute left-1/2 top-1/2 z-20 w-[min(100%-1.5rem,280px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="shrink-0 p-2 rounded-full bg-primary/10 text-primary">
                              <MapPin size={18} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-lg font-bold text-ozunlu-950 truncate">
                                {selectedCity.location?.city ?? selectedCity.name}
                              </p>
                              <p className="text-sm font-medium text-gray-600 mt-0.5">
                                {selectedCity.location
                                  ? t("serviceCount", {
                                      count: selectedCity.location.providers.length,
                                    })
                                  : t("noService")}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            aria-label={t("closeAria")}
                            onClick={() => setSelectedCity(null)}
                            className="shrink-0 w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
