import React, { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderItems from "./OrderItems";
import OrderSummary from './OrderSummary';
import OrderReportSection from "./OrderReportSection";
import { foodItems } from "../data";

function DashBoard() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (itemId) => {
   setSelectedItems((prevSelected) => 
    prevSelected.includes(itemId)
    ? prevSelected.filter((id) => id !== itemId)
    : [...prevSelected, itemId]
  )
  };

   const totalPrice = selectedItems.reduce((total, itemId) => {
    const item = foodItems.find((i) => i.id === itemId);
    return item ? total + item.price : total;
  }, 0);

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[100vh] p-3">
      {/* Left Section */}
      <div className="bg-[#353333] rounded px-3 py-5 md:row-start-1 md:row-end-[-1] md:col-span-1">
        <CreateOrder />
        <OrderItems
          selectedItems={selectedItems}
          onSelectItem={handleSelectItem}
          totalPrice={totalPrice}
        />
      </div>

      {/* Right Section */}
      <div className="rounded flex flex-col gap-4 md:col-span-2">
        <OrderSummary  />
        <OrderReportSection />
      </div>
    </div>
  );
}

export default DashBoard;
