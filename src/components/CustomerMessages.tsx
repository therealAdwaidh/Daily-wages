'use client';

import Image from "next/image";
import { FC, useState } from "react";

interface CustomerMessage {
  id: number;
  name: string;
  message: string;
  avatar: string;
}

const customerMessages: CustomerMessage[] = [
  {
    id: 1,
    name: "Customer 1",
    message: "When will you be coming?",
    avatar: "/Sierra-Langston-Hart.jpg",
  },
  {
    id: 2,
    name: "Customer 2",
    message: "I want it urgent. The kitchen is flooded",
    avatar: "/Sierra-Langston-Hart.jpg",
  },
  // ... other messages
];

const CustomerMessages: FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerMessage | null>(null);

  const handleBack = () => setSelectedCustomer(null);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      {!selectedCustomer ? (
        customerMessages.map((customer) => (
          <div
            key={customer.id}
            className="flex items-center gap-4 p-4 mb-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedCustomer(customer)}
          >
            <div className="relative w-12 h-12">
              <Image
                src={customer.avatar}
                alt={customer.name}
                fill
                className="rounded-full object-cover border-2 border-gray-300 shadow-sm"
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                {customer.name}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm truncate">
                {customer.message}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-white p-4 rounded-xl shadow-md">
          <button
            className="text-sm text-blue-500 mb-4"
            onClick={handleBack}
          >
            ← Back to messages
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12">
              <Image
                src={selectedCustomer.avatar}
                alt={selectedCustomer.name}
                fill
                className="rounded-full object-cover border-2 border-gray-300"
              />
            </div>
            <p className="font-semibold text-lg">{selectedCustomer.name}</p>
          </div>
          <div className="h-48 overflow-y-auto border p-3 rounded-md mb-4 text-sm text-gray-700 bg-gray-50">
            {/* Static example chat */}
            <div className="mb-2">
              <p className="font-medium">{selectedCustomer.name}:</p>
              <p>{selectedCustomer.message}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">You:</p>
              <p>I'm on my way!</p>
            </div>
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      )}
    </div>
  );
};

export default CustomerMessages;
