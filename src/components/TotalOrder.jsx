import React from "react";

function TotalOrder() {
  return (
    <div className="bg-[#2d2d2d] rounded-2xl p-6 shadow-lg border border-yellow-500 hover:scale-105 transition-transform duration-300">
      <div className="text-5xl font-bold text-yellow-400 mb-2">8</div>
      <div className="bg-yellow-700 bg-opacity-30 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
        Total Orders
      </div>
    </div>
  );
}

export default TotalOrder;
