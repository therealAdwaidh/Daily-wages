import React from "react";
import Image from "next/image";

const statuses = [
  {
    label: "In Progress",
    active: true,
    
  },
  {
    label: "Pending",
    active: false,
    // icon: "/icons/pending.svg"
  },
  {
    label: "Upcoming",
    active: false,
    // icon: "/icons/upcoming.svg"
  }
];

const StatusButtons = () => {
  return (
    <div className="flex flex-wrap  items-center gap-1">
      {statuses.map(({ label, active }) => (
        <button
          key={label}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 text-sm font-medium capitalize ${
            active ? "bg-gray-700 text-white" : "border-gray-500 text-gray-700"
          }`}
        >
          
          {label}
        </button>
      ))}
    </div>
  );
};

export default StatusButtons;
