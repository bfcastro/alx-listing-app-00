import React, { useMemo, useState } from "react";
import { PROPERTYLISTINGSAMPLE, HERO_BG } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";
import Pill from "@/components/common/Pill";
import type { PropertyProps } from "@/interfaces";

const FILTERS = [
  "All",
  "Luxury Villa",
  "Pool",
  "Self Checkin",
  "Free Parking",
  "Beachfront",
  "Mountain View",
  "Pet Friendly",
  "City Center",
];

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const filtered: PropertyProps[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROPERTYLISTINGSAMPLE.filter((p) => {
      // Filter by search query on name/city/state
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.address.city.toLowerCase().includes(q) ||
        p.address.state.toLowerCase().includes(q);

      // Filter by category
      const matchesFilter =
        activeFilter === "All" || p.category.some((c) => c.toLowerCase().includes(activeFilter.toLowerCase()));

      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative h-64 md:h-96 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto h-full px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Find your favorite place here!
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-100/90">
              The best prices for over 2 million properties worldwide.
            </p>

            <div className="mt-6 flex gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, city or state"
                className="px-4 py-2 rounded-l-full w-full max-w-md focus:outline-none"
              />
              <button onClick={() => setQuery("")} className="px-4 py-2 bg-blue-600 rounded-r-full text-white">Clear</button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 mt-6">
        <div className="flex gap-3 overflow-x-auto py-2">
          {FILTERS.map((f) => (
            <Pill key={f} label={f} active={f === activeFilter} onClick={() => setActiveFilter(f)} />
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="container mx-auto px-4 mt-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <PropertyCard key={`${p.name}-${i}`} property={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;