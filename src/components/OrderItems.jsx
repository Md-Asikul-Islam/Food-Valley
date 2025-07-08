import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { foodItems } from "../data";

function OrderItems({ selectedItems, onSelectItem,totalPrice}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 text-white">
        Choose Items
      </label>

      <div className="max-h-[300px] overflow-y-auto py-2 px-2 mb-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 hover:scrollbar-thumb-gray-500 transition-all duration-300 space-y-3">
        {foodItems.map((item) => {
          const isSelected = selectedItems.includes(item.id);

          return (
            <div
              key={item.id}
              className="bg-gray-700 bg-opacity-30 rounded-md p-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 hover:bg-opacity-40 transition-all duration-300"
            >
              {/* Left Part */}
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center mr-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-white text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400">BDT {item.price}</p>
                </div>
              </div>

              {/* Right Part */}
              <div className="flex items-center space-x-3 justify-end sm:justify-center">
                <button
                  onClick={() => onSelectItem(item.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isSelected
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gray-800 hover:bg-green-600"
                  }`}
                >
                  {isSelected ? (
                    <FaMinus className="text-white text-sm" />
                  ) : (
                    <FaPlus className="text-white text-sm" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        
        className="w-full bg-[#FF602C] hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
}

export default OrderItems;
