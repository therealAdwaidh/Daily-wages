import Image from 'next/image';

export default function SatisfactionSection() {
  return (
    <section className="bg-[#F8FAF8] px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold lg:text-start text-center text-green-900 mb-12">
          Your satisfaction, <span className="header-text-color">guaranteed</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Card 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-900">Happiness Pledge</h3>
            <p className="text-gray-800">
              If you're not satisfied, <a href="#" className="font-semibold underline">we’ll work to make it right.</a>
            </p>
            <div className="flex items-center justify-center md:justify-start mt-4">
              <Image
                src="/happiness.webp" // Make sure this path is valid in your public folder
                alt="Happiness Pledge"
                width={200}
                height={180}
                className="mr-2"
              />
             
            </div>
          </div>

          {/* Card 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-900">Vetted Taskers</h3>
            <p className="text-gray-800">
              Taskers are always background checked before joining the platform.
            </p>
          </div>

          {/* Card 3 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-900">Dedicated Support</h3>
            <p className="text-gray-800">
              Friendly service when you need us – every day of the week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
