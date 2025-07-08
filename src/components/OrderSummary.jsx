import React from "react";
import TotalOrder from "./TotalOrder";
import PendingOrder from "./PendingOrder";
import Delivered from "./Delivered";

const OrderSummary = ({ totalOrders, pendingOrders,deliveredOrders}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
        Order Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TotalOrder total={totalOrders} />
        <PendingOrder pending={pendingOrders} />
        <Delivered delivered={deliveredOrders} />
      </div>
    </div>
  );
};

export default OrderSummary;