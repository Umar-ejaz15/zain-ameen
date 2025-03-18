import React from "react";
import { useLocation } from "react-router-dom";

const NotAvailable = () => {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">🚧 Under Development 🚧</h1>
      <p className="text-lg mt-4 text-gray-600">
        Content will be added in a few days. Sorry for the inconvenience!
      </p>
    </div>
  );
};

export default NotAvailable;