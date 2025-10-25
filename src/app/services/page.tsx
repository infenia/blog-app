import Header from "../ui/components/Header";
import Footer from "../ui/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <div className="px-4 sm:px-6 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-text-light dark:text-text-dark tracking-light text-[32px] font-bold leading-tight">
                  Software Consulting and Maintenance
                </p>
                <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                  Infenia offers comprehensive software maintenance and
                  consulting services to ensure your software solutions remain
                  robust, efficient, and aligned with your evolving business
                  needs. Our team of experts provides proactive maintenance,
                  timely updates, and strategic guidance to optimize your
                  software investments.
                </p>
              </div>
            </div>

            {/* Our Services */}
            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">settings</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Proactive Maintenance
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    Regular health checks, bug fixes, and security updates to
                    keep your software running smoothly.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">search</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Performance Optimization
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    Enhance software speed, responsiveness, and scalability to
                    meet growing demands.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">assessment</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Strategic Consulting
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    Expert advice on software architecture, technology
                    selection, and development best practices.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">groups</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    User Support
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    Dedicated support team to address user issues and ensure
                    seamless software operation.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Infenia */}
            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Why Choose Infenia?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">verified_user</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Reliable and Secure
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    We prioritize the security and reliability of your software,
                    implementing robust measures to protect your data.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">schedule</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Timely and Efficient
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    Our team works diligently to deliver timely maintenance and
                    consulting services, minimizing disruptions to your
                    business.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">attach_money</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Cost-Effective Solutions
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    We offer competitive pricing and tailored solutions to
                    maximize the value of your software investments.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">handshake</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Client-Centric Approach
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    We collaborate closely with our clients, understanding their
                    unique needs and providing personalized support.
                  </p>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">
                    account_balance
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Finance
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    We provide specialized software solutions for financial
                    institutions, ensuring compliance and security.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">
                    local_hospital
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Healthcare
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    Our healthcare software solutions improve patient care and
                    streamline operations.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">shopping_cart</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Retail
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    We help retailers enhance their online presence and optimize
                    their supply chain.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark p-4 flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="text-primary">
                  <span className="material-icons text-2xl">
                    local_shipping
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                    Logistics
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                    We offer logistics companies efficient software to manage
                    their operations and track shipments.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex px-4 py-3 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md hover:bg-red-600 transition-colors">
                <span className="truncate">Get a Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
