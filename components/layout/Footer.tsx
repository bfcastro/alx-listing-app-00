import React from "react";
const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h4 className="font-bold text-lg">StayFinder</h4>
          <p className="text-sm text-gray-300 mt-2">Find your favorite place here — the best prices across millions of properties.</p>
        </div>

        <div className="text-sm text-gray-300">
          <p>© {new Date().getFullYear()} StayFinder</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;