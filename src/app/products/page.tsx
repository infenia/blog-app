import Header from "../ui/components/Header";
import Footer from "../ui/components/Footer";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 md:py-32 mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark">
                Our Suite of Products
              </h1>
              <p className="mt-4 text-lg md:text-xl text-subtext-light dark:text-subtext-dark max-w-3xl mx-auto">
                Discover the innovative solutions we&apos;ve built to tackle
                real-world challenges and drive growth.
              </p>
            </div>
            <div className="mt-16">
              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* EasyMarry - Large Card */}
                <div className="md:col-span-2 card bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="relative h-72 md:h-96">
                    <Image
                      alt="EasyMarry Application Screenshot"
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="flex items-center text-white">
                        <Image
                          alt="EasyMarry logo"
                          className="h-16 w-16 pt-1"
                          src="/easymarry_logo.svg"
                          width={40}
                          height={40}
                        />
                        <h3 className="text-3xl font-bold ml-2">EasyMarry</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">
                      EasyMarry
                    </h3>
                    <p className="mt-2 text-subtext-light dark:text-subtext-dark">
                      A modern matrimonial platform designed to help you find your
                      life partner with confidence and joy.
                    </p>
                    <a
                      className="mt-4 inline-flex items-center text-primary font-semibold"
                      href="/products/easymarry"
                    >
                      Explore Product{" "}
                      <span className="material-icons ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>

                {/* Coming Soon */}
                <div className="md:col-span-1 card border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center text-center p-6 hover:border-primary dark:hover:border-primary transition-colors duration-300 min-h-[400px]">
                  <span className="material-icons text-5xl text-subtext-light dark:text-subtext-dark">
                    add_circle_outline
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-text-light dark:text-text-dark">
                    New Product Coming Soon
                  </h3>
                  <p className="mt-1 text-subtext-light dark:text-subtext-dark">
                    We are constantly innovating. Stay tuned for our next exciting
                    launch!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
