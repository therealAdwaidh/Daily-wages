import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className="bg-[#FFFDEB] py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-xl overflow-hidden">
        {/* Left Content Box */}
        <div className="bg-white shadow-md rounded-xl p-8 flex-1 md:max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">How it works</h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-200 text-purple-900 font-bold">
                1
              </div>
              <p className="text-gray-800">
                Choose a Tasker by price, skills, and reviews.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-900 font-bold">
                2
              </div>
              <p className="text-gray-800">
                Schedule a Tasker as early as today.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-900 font-bold">
                3
              </div>
              <p className="text-gray-800">
                Chat, pay, tip, and review all in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-8 relative rounded-xl overflow-hidden">
          <Image
            src="/how_it_works_pic_updated.webp" // Make sure to add this image to your public/images folder
            alt="How it works image"
            width={800}
            height={600}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
