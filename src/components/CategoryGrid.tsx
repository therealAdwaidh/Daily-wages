import Image from 'next/image';

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
    <div className="block sm:hidden p-6">
      <h2 className="text-2xl font-bold header-text-color mb-4">Category</h2>
      <div className="grid grid-cols-4 gap-4 ">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-full w-18 h-18 bg-gray-200 flex items-center justify-center border-2  border-black mx-auto overflow-hidden"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={180}
              height={180}
              className="category-mobile"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
