import React from "react";

function OrderReportSection() {
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-4 items-start md:items-center mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          Order Reports
        </h2>

        <div className="flex items-center gap-2 sm:gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          <select className="bg-zinc-900 text-white text-sm px-2 py-1 rounded-sm outline-none">
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>

      {/* Table container with scroll */}
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
            <tr className="border-t border-gray-700">
              <td className="py-2 sm:py-3 whitespace-nowrap">21</td>
              <td className="py-2 sm:py-3 whitespace-nowrap">Sumit Saha</td>
              <td className="py-2 sm:py-3 whitespace-nowrap">Burger</td>
              <td className="py-2 sm:py-3 whitespace-nowrap">300</td>
              <td className="py-2 sm:py-3 whitespace-nowrap">
                <span className="text-green-500 font-medium">Delivered</span>
              </td>
              <td className="py-2 sm:py-3 whitespace-nowrap flex flex-wrap gap-1">
                <button className="bg-gray-800 hover:bg-red-600 text-xs px-2 py-1 rounded-full transition-colors duration-300">
                  Delete
                </button>
                <button className="bg-gray-800 hover:bg-green-600 text-xs px-2 py-1 rounded-full transition-colors duration-300">
                  DELIVER
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderReportSection;
