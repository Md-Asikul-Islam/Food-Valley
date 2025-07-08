import React from "react";

function PendingOrder() {
  return (
    <div className="bg-[#2d2d2d] rounded-2xl p-6 shadow-lg border border-red-500 hover:scale-105 transition-transform duration-300">
      <div className="text-5xl font-bold text-red-400 mb-2">7</div>
      <div className="bg-red-700 bg-opacity-30 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
        Pending Orders
      </div>
    </div>
  );
}

export default PendingOrder;
