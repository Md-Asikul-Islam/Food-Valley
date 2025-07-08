import React from "react";
const CreateOrder = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-1 text-white">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4 py-1">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      <div className="mb-4">
        <label className="block text-white font-medium mb-2">
          Customer Name
        </label>
        <input
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500 px-4 py-2 transition-all duration-300"
        />
      </div>
    </>
  );
};
export default CreateOrder;