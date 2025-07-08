import React from "react";

function CreateOrder({ customerName, setCustomerName }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-white mb-1">
        Customer Name
      </label>
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Enter name"
        className="w-full p-2 rounded bg-gray-800 text-white outline-none"
      />
    </div>
  );
}

export default CreateOrder;
