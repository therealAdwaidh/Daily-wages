import Image from 'next/image';

export default function SatisfactionSection() {
  return (
    <section className="bg-[#F8FAF8] px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-[#1F3A34] mb-12">
          Your satisfaction, <span className="text-[#127365]">guaranteed</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition">
            <Image
              src="/happiness.webp"
              alt="Happiness Pledge"
              width={220}
              height={180}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-[#1F3A34] mb-2">
              Happiness Pledge
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you're not satisfied,{" "}
              <a href="#" className="text-[#127365] font-medium underline">
                we’ll work to make it right.
              </a>
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F0F8F7] p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-transparent">
            <h3 className="text-xl font-semibold text-[#1F3A34] mb-2">
              Vetted Taskers
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Every Tasker passes a strict background check before joining. We ensure trust and professionalism at every step.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-semibold text-[#1F3A34] mb-2">
              Dedicated Support
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our support team is available every day to help with issues, requests, or guidance whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
