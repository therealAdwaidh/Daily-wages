import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const reviews = [
  {
    rating: 4,
    comment: 'He is very sincere in his work. Really appreciate the effort.',
  },
];

const services = [
  {
    title: 'Plumbing',
    completed: 25,
    image: '/Furniture_Assembly.webp',
  },
  {
    title: 'Electrical Fix',
    completed: 58,
    image: '/Furniture_Assembly.webp',
  },
];

export default function ElectricianProfile() {
  return (
    <div className="max-w-3xl mx-auto  p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24">
          <Image
            src="/warren-buffet.jpg"
            alt="Electrician Sasi"
            fill
            className="rounded-full object-cover border-4 border-orange-500 shadow-sm"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Electrician Sasi</h1>
          <p className="text-sm text-gray-500">ID: 9824023709</p>
          <div className="flex items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
            ))}
            <Star size={18} className="text-gray-300" />
            <span className="ml-2 text-sm text-gray-600">4.0</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">26 Reviews for Completed Work</p>
        </div>
      </div>

      {/* Services */}
      <div>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border border-gray-200 rounded-xl"
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={180}
                  height={100}
                  className="rounded-md object-contain"
                />
                <h3 className="mt-3 text-lg font-medium">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.completed} work completed</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

     
      {/* Reviews */}
      <div>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Reviews ({reviews.length})</h2>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <Card key={index} className="border border-gray-200 w-full">
              <CardContent className="p-4 break-words">
                <div className="flex items-center mb-2 flex-wrap">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gray-300" />
                  ))}
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
