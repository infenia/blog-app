export default function Services() {
  return (
    <section className="py-20 bg-card-light dark:bg-card-dark" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-light dark:text-text-dark">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-subtext-light dark:text-subtext-dark">
            Expert support for your software needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-lg text-center shadow-md">
            <span className="material-icons text-primary text-5xl">
              build_circle
            </span>
            <h3 className="text-2xl font-semibold mt-4">
              Software Maintenance
            </h3>
            <p className="mt-2 text-subtext-light dark:text-subtext-dark">
              We provide comprehensive maintenance and support services to
              ensure your software applications run smoothly, securely, and
              efficiently.
            </p>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-lg text-center shadow-md">
            <span className="material-icons text-primary text-5xl">
              groups
            </span>
            <h3 className="text-2xl font-semibold mt-4">
              Technology Consulting
            </h3>
            <p className="mt-2 text-subtext-light dark:text-subtext-dark">
              Our expert consultants help you navigate the complex technology
              landscape, providing strategic guidance to achieve your business
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
