"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, X } from "lucide-react";
import TurkeyMap, { type CityType } from "turkey-map-react";

import {
  serviceLocations,
  type ServiceLocation,
} from "@/data/serviceLocations";

type SelectedCity = {
  city: CityType;
  location?: ServiceLocation;
};

type CityMarkerWrapperProps = {
  cityComponent: React.ReactElement;
  isServiceCity: boolean;
};

const normalizeCityName = (name: string) =>
  name
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u011f/g, "g") // ğ
    .replace(/\u00fc/g, "u") // ü
    .replace(/\u015f/g, "s") // ş
    .replace(/\u0131/g, "i") // ı
    .replace(/\u00f6/g, "o") // ö
    .replace(/\u00e7/g, "c") // ç
    .replace(/[^a-z0-9]/g, "");

const CityMarkerWrapper = ({
  cityComponent,
  isServiceCity,
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
          className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
        >
          <circle r="14" className="fill-white/15 animate-ping" />
          <path
            d="M0 -11 C -5 -11 -9 -7 -9 -2 C -9 4 0 12 0 12 C 0 12 9 4 9 -2 C 9 -7 5 -11 0 -11 Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
          <circle cx="0" cy="-4" r="3" fill="#0d0d0d" />
        </g>
      )}
    </g>
  );
};

export default function MapPreview() {
  const [selected, setSelected] = useState<SelectedCity | null>(null);

  const totalProviders = useMemo(
    () => serviceLocations.reduce((sum, loc) => sum + loc.providers.length, 0),
    []
  );

  const serviceCityNames = useMemo(
    () => new Set(serviceLocations.map((loc) => normalizeCityName(loc.city))),
    []
  );

  const topLocations = useMemo(
    () =>
      [...serviceLocations]
        .sort((a, b) => b.providers.length - a.providers.length)
        .slice(0, 3),
    []
  );

  const renderCity = useCallback(
    (cityComponent: React.ReactElement, city: CityType) => (
      <CityMarkerWrapper
        cityComponent={cityComponent}
        isServiceCity={serviceCityNames.has(normalizeCityName(city.name))}
      />
    ),
    [serviceCityNames]
  );

  const handleCityClick = (city: CityType) => {
    const match = serviceLocations.find(
      (loc) => normalizeCityName(loc.city) === normalizeCityName(city.name)
    );
    setSelected({ city, location: match });
  };

  const closeModal = () => setSelected(null);

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
                  <p className="text-sm tracking-[0.35em] text-black font-bold uppercase">
                    Servis Noktalarımız
                  </p>
                  <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
                    Türkiye genelinde{" "}
                    <span className="text-primary">yetkili servis</span> ağı.
                  </h2>
                  <p className="text-black max-w-2xl font-medium">
                    Haritadan şehir seçerek o ildeki yetkili servis ve iletişim
                    bilgilerine anında ulaşın. Tüm servis noktalarımız güncel ve
                    bağlantıya hazır.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-gray-300 bg-white shadow-lg">
                    <p className="text-sm text-black font-bold">Servis bulunan şehir</p>
                    <p className="text-3xl font-black text-black mt-1">
                      {serviceLocations.length}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-300 bg-white shadow-lg">
                    <p className="text-sm text-black font-bold">Toplam servis noktası</p>
                    <p className="text-3xl font-black text-black mt-1">
                      {totalProviders}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-black font-bold uppercase tracking-[0.25em]">
                    Öne çıkan iller
                  </p>
                  <div className="flex flex-col gap-3">
                    {topLocations.map((loc) => (
                      <div
                        key={loc.city}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white"
                      >
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <p className="text-black font-bold">{loc.city}</p>
                          <p className="text-gray-900 text-sm font-medium">
                            {loc.providers.length} servis noktası
                          </p>
                        </div>
                      </div>
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
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-900 font-bold">
                      Haritaya dokun
                    </p>
                    <h3 className="text-black text-xl font-bold">
                      Şehir seç, servis bilgisi açılır.
                    </h3>
                  </div>
                  <div className="p-2 rounded-full bg-gray-100 text-primary">
                    <MapPin size={18} />
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <TurkeyMap
                    hoverable
                    showTooltip
                    customStyle={{ idleColor: "#d1d5db", hoverColor: "#000552" }}
                    onClick={handleCityClick}
                    cityWrapper={renderCity}
                  />
                </div>
                <p className="text-sm text-black font-medium mt-3 text-center">
                  Bir il üzerine tıkladığınızda o şehri içeren servis kartı açılır.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-800 font-bold">
                    Servis detayları
                  </p>
                  <h3 className="text-2xl font-black text-black">
                    {selected.location?.city ?? selected.city.name}
                  </h3>
                  <p className="text-black font-medium text-sm">
                    Plaka kodu: {selected.city.plateNumber}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full bg-gray-100 text-black hover:text-black hover:bg-gray-200 transition"
                  aria-label="Kapat"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                {selected.location ? (
                  selected.location.providers.map((provider, idx) => (
                    <div
                      key={`${provider.name}-${idx}`}
                      className="p-4 rounded-xl border border-gray-200 bg-gray-50"
                    >
                      <p className="text-black font-bold">
                        {provider.name}
                      </p>
                      {provider.address && (
                        <div className="flex items-start gap-2 text-black mt-1 font-medium">
                          <MapPin size={14} className="mt-0.5 text-primary" />
                          <span className="text-sm">{provider.address}</span>
                        </div>
                      )}
                      {provider.phones && provider.phones.length > 0 && (
                        <div className="flex items-start gap-2 text-black mt-1 font-medium">
                          <MapPin size={14} className="mt-0.5 text-primary" />
                          <span className="text-sm">
                            {provider.phones.join(" / ")}
                          </span>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-black font-medium">
                    Bu il için kayıtlı servis bulunamadı.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
