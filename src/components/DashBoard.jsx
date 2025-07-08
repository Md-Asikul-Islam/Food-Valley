import React from "react";
import CreateOrder from "./CreateOrder";
import OrderItems from "./OrderItems";
import OrderSummary from './OrderSummary'
import OrderReportSection from "./OrderReportSection";

function DashBoard() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[100vh] p-3">
      {/* Left Section: Create Order & Order Items */}
      <div className="bg-[#353333] rounded px-3 py-5 md:row-start-1 md:row-end-[-1] md:col-span-1">
        <CreateOrder />
        <OrderItems />
      </div>

      {/* Right Section: Order Summary & Report */}
      <div className="rounded flex flex-col gap-4 md:col-span-2">
        <OrderSummary />
        <OrderReportSection />
      </div>
    </div>
  );
}

export default DashBoard;
