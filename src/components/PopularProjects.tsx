import Image from 'next/image';

const projects = [
  {
    title: 'Furniture Assembly',
    price: '$49',
    image: '/Furniture_Assembly.webp',
  },
  {
    title: 'Mount Art or Shelves',
    price: '$65',
    image: '/Hang_Pictures.webp',
  },
  {
    title: 'Mount a TV',
    price: '$69',
    image: '/Mount_TV.webp',
  },
  {
    title: 'Help Moving',
    price: '$67',
    image: '/Help_Moving.webp',
  },
  {
    title: 'Home & Apartment Cleaning',
    price: '$49',
    image: '/Home_Apartment_Cleaning.webp',
  },
  {
    title: 'Minor Plumbing Repairs',
    price: '$74',
    image: '/AdobeStock_197426992.webp',
  },
  {
    title: 'Electrical Help',
    price: '$69',
    image: '/Electrical_Help.webp',
  },
  {
    title: 'Heavy Lifting',
    price: '$61',
    image: '/Furniture_Removal__1_.webp',
  },
];

export default function PopularProjects() {
  return (
    
    <div className="px-6  py-10 bg-white">
      <h2 className="text-3xl font-bold header-text-color mb-8 body-main-text ">Popular Projects</h2>
      
      <div className="justify-center flex">
        
        <div className="flex justify-between">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
            {projects.map((project) => (
                <div
                key={project.title}
                className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow"
                >
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                />
                <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold header-text-color truncate">{project.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">Projects starting at {project.price}</p>
                </div>
                </div>
            ))}
            </div>

        </div>
      </div>
      
    </div>
  );
}