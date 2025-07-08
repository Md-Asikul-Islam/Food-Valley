import React, { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderItems from "./OrderItems";
import OrderSummary from './OrderSummary';
import OrderReportSection from "./OrderReportSection";
import { foodItems } from "../data";

function DashBoard() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  const handlePlaceOrder = () => {
    if (selectedItems.length === 0 || customerName.trim() === "") return;

    const orderedItems = foodItems.filter((item) =>
      selectedItems.includes(item.id)
    );

    const newOrder = {
      id: Date.now(),
      customer: customerName,
      items: orderedItems,
      total: orderedItems.reduce((sum, item) => sum + item.price, 0),
      status: "Pending",  // <-- নতুন অর্ডার সবসময় Pending
    };

    setOrders((prev) => [...prev, newOrder]);
    setSelectedItems([]);
    setCustomerName("");
  };

  // Delete অর্ডার ফাংশন
  const handleDeleteOrder = (orderId) => {
    setOrders((prev) => prev.filter((order) => order.id !== orderId));
  };

  // Deliver স্ট্যাটাস আপডেট ফাংশন
  const handleDeliverOrder = (orderId) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: "Delivered" } : order
      )
    );
  };

  // Summary এর জন্য গুনুন
const totalOrders = orders.length;
const pendingOrders = orders.filter(order => order.status === "Pending").length;
const deliveredOrders = orders.filter(order => order.status === "Delivered").length;
  // ফিল্টারড অর্ডার লিস্ট
  const filteredOrders = filterStatus === "All" 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[100vh] p-3">
      {/* Left Section */}
      <div className="bg-[#353333] rounded px-3 py-5 md:row-start-1 md:row-end-[-1] md:col-span-1">
        <CreateOrder customerName={customerName} setCustomerName={setCustomerName} />
        <OrderItems
          selectedItems={selectedItems}
          onSelectItem={handleSelectItem}
          totalPrice={foodItems
            .filter(item => selectedItems.includes(item.id))
            .reduce((sum, item) => sum + item.price, 0)}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>

      {/* Right Section */}
      <div className="rounded flex flex-col gap-4 md:col-span-2">
        <OrderSummary
          totalOrders={totalOrders}
          pendingOrders={pendingOrders}
          deliveredOrders={deliveredOrders}
        />
        <OrderReportSection
          orders={filteredOrders}
          onDelete={handleDeleteOrder}
          onDeliver={handleDeliverOrder}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </div>
    </div>
  );
}

export default DashBoard;
