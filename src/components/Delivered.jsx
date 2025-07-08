import React from "react";

function Delivered() {
  return (
    <div className="bg-[#2d2d2d] rounded-2xl p-6 shadow-lg border border-green-500 hover:scale-105 transition-transform duration-300">
      <div className="text-5xl font-bold text-green-400 mb-2">1</div>
      <div className="bg-green-700 bg-opacity-30 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
        Delivered Orders
      </div>
    </div>
  );
}

export default Delivered;
