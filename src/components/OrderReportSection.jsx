import React from "react";

function OrderReportSection({ orders, onDelete, onDeliver, filterStatus, setFilterStatus }) {
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-4 items-start md:items-center mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          Order Reports
        </h2>

        <div className="flex items-center gap-2 sm:gap-3">
          <select
            className="bg-zinc-900 text-white text-sm px-2 py-1 rounded-sm outline-none"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-cardbg rounded-md p-3 overflow-x-auto">
        <table className="min-w-[600px] sm:min-w-full border-separate border-spacing-y-2 text-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="pb-2 sm:pb-3 font-medium whitespace-nowrap">ID</th>
              <th className="pb-2 sm:pb-3 font-medium whitespace-nowrap">Customer Name</th>
              <th className="pb-2 sm:pb-3 font-medium whitespace-nowrap">Items</th>
              <th className="pb-2 sm:pb-3 font-medium whitespace-nowrap">Amount</th>
              <th className="pb-2 sm:pb-3 font-medium whitespace-nowrap">Status</th>
              <th className="pb-2 sm:pb-3 font-medium whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-400">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id} className="border-t border-gray-700">
                  <td className="py-2 sm:py-3 whitespace-nowrap">{order.id}</td>
                  <td className="py-2 sm:py-3 whitespace-nowrap">{order.customer}</td>
                  <td className="py-2 sm:py-3 whitespace-nowrap">
                    {order.items.map((item) => item.name).join(", ")}
                  </td>
                  <td className="py-2 sm:py-3 whitespace-nowrap">{order.total}</td>
                  <td className="py-2 sm:py-3 whitespace-nowrap">
                    <span
                      className={`font-medium ${
                        order.status === "Delivered" ? "text-green-500" : "text-yellow-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 whitespace-nowrap flex flex-wrap gap-1">
                    <button
                      onClick={() => onDelete(order.id)}
                      className="bg-gray-800 hover:bg-red-600 text-xs px-2 py-1 rounded-full transition-colors duration-300"
                    >
                      Delete
                    </button>
                    {order.status === "Pending" && (
                      <button
                        onClick={() => onDeliver(order.id)}
                        className="bg-gray-800 hover:bg-green-600 text-xs px-2 py-1 rounded-full transition-colors duration-300"
                      >
                        DELIVER
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderReportSection;
