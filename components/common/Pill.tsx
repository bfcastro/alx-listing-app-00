import React from "react";

interface PillProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`px-3 py-1 rounded-full text-sm border transition ${
          active
            ? "bg-blue-600 text-white border-transparent"
            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default Pill;