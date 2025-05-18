'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Art', image: '/Furniture_Assembly.webp' },
  { name: 'Music', image: '/Hang_Pictures.webp' },
  { name: 'Travel', image: '/Mount_TV.webp' },
  { name: 'Fitness', image: '/Help_Moving.webp' },
  { name: 'Food', image: '/Home_Apartment_Cleaning.webp' },
  { name: 'Tech', image: '/AdobeStock_197426992.webp' },
  { name: 'Fashion', image: '/Electrical_Help.webp' },
  { name: 'Books', image: '/Furniture_Removal__1_.webp' },
];

export default function CategoryGrid() {
  return (
    <div className="block backgroundcolor sm:hidden p-6">
      <h2 className="text-2xl font-extrabold header-text-color mb-6 text-center">Categories</h2>
      <div className="grid grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="rounded-full w-16 h-16 sm:w-20 sm:h-20 bg-white shadow-md flex items-center justify-center border-2 border-black overflow-hidden transition-transform hover:scale-110 hover:shadow-xl duration-300">
              <Image
                src={cat.image}
                alt={cat.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <span className="text-xs sm:text-sm font-medium mt-2 text-center">{cat.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
