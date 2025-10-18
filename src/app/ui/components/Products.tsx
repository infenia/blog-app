import Image from "next/image";

export default function Products() {
  return (
    <section className="py-20" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-light dark:text-text-dark">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-subtext-light dark:text-subtext-dark">
            Innovative solutions tailored for your needs.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-card-light dark:bg-card-dark p-12 md:p-16 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-8">
              <Image
                alt="EasyMarry logo"
                className="h-24 w-24 md:h-32 md:w-32 mr-6"
                src="/easymarry_logo.svg"
                width={128}
                height={128}
              />
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark">
                  EasyMarry
                </h3>
                <p className="mt-2 text-xl md:text-2xl text-subtext-light dark:text-subtext-dark">
                  Your modern matrimonial platform.
                </p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-subtext-light dark:text-subtext-dark mb-8 leading-relaxed">
              Our next-generation matrimony platform, blending cultural values
              with modern technology. We help you find your life partner,
              securely and joyfully.
            </p>
            <a
              className="inline-block px-8 py-4 text-lg bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 hover:scale-105"
              href="/products/easymarry"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
