import React from "react";
import type { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="h-48 md:h-40 w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{property.name}</h3>
            <span className="text-sm text-yellow-600 font-semibold">{property.rating.toFixed(2)}★</span>
          </div>

          <p className="text-sm text-gray-500 mt-1">{property.address.city}, {property.address.country}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {property.category.slice(0, 3).map((c) => (
              <span key={c} className="text-xs bg-gray-100 px-2 py-1 rounded">{c}</span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">From</div>
            <div className="text-lg font-bold">${property.price.toLocaleString()}</div>
          </div>

          {property.discount ? (
            <div className="text-sm text-red-600 font-semibold">{property.discount}% off</div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;