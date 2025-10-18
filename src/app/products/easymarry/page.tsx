import Header from "../../ui/components/Header";
import Footer from "../../ui/components/Footer";

export default function EasyMarryPage() {
  return (
    <>
      <Header />
      <main>
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-white dark:bg-background-dark overflow-x-hidden mt-20">
          <div className="flex h-full grow flex-col">
            <div className="flex flex-1 justify-center">
              <div className="flex flex-col w-full max-w-[960px]">
                <div className="w-full">
                  <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 sm:py-10 sm:gap-8 md:flex-row">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl md:flex-1"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDduqWuPKsXwirdu7cArR2ZAgLcvbbDJGOeCBHwc2MWT01v6n7v5G9BZIM8oDYFinFH9AKhl2NYfMt-7J8qcu5NR7CNV19TmRfAVh-r9dClmD8-15fvPxmnA3aAnJmxYAi4rkt_xWBEI6-EiFA2z_pJhHftoFHgS9sYhwHpLdXJbnll_L8piUmhuu7S0yF7d7NMNNzk3dbwBQz5PsXdl3QNy0D4vDexXYTfakNFx61qzG1XIBluQRLkYTA-gpCPnDkBiE7Ha6i1c0k")',
                      }}
                    ></div>
                    <div className="flex flex-col gap-4 sm:gap-6 md:flex-1 md:gap-8 md:justify-center">
                      <div className="flex flex-col gap-2 text-left">
                        <h1 className="text-text-light dark:text-text-dark text-3xl font-black leading-tight tracking-[-0.033em] sm:text-4xl md:text-5xl">
                          Find your perfect match with EasyMarry
                        </h1>
                        <h2 className="text-text-light dark:text-text-dark text-sm font-normal leading-normal sm:text-base">
                          EasyMarry is a verified hybrid matchmaking platform
                          that combines AI-driven technology with cultural
                          sensitivity to help you find your ideal partner.
                        </h2>
                      </div>
                      <a
                        href="https://www.easymarry.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full sm:w-auto sm:min-w-[160px] sm:max-w-[320px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-primary hover:bg-red-600 text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base transition"
                      >
                        <span className="truncate">Get Started</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-10 px-4 sm:px-6 py-6 sm:py-10 w-full">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h1 className="text-text-light dark:text-text-dark tracking-light text-2xl sm:text-[32px] md:text-4xl font-bold leading-tight sm:font-black sm:tracking-[-0.033em]">
                      Challenges in Finding the Right Partner
                    </h1>
                    <p className="text-text-light dark:text-text-dark text-sm sm:text-base font-normal leading-normal">
                      Many individuals face significant hurdles in their search
                      for a life partner, often encountering issues that hinder
                      their progress and satisfaction.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-0">
                    <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                      <div className="text-text-light dark:text-text-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56l160,0Z"></path>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                          Lack of Trust
                        </h2>
                        <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                          Traditional matchmaking often lacks transparency,
                          leading to uncertainty and distrust among users.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                      <div className="text-text-light dark:text-text-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                          Privacy Concerns
                        </h2>
                        <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                          Data privacy is a major concern, with many platforms
                          failing to adequately protect personal information.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                      <div className="text-text-light dark:text-text-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                          Cultural Insensitivity
                        </h2>
                        <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                          Many platforms overlook cultural nuances, leading to
                          mismatches and dissatisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-10 px-4 sm:px-6 py-6 sm:py-10 w-full">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h1 className="text-text-light dark:text-text-dark tracking-light text-2xl sm:text-[32px] md:text-4xl font-bold leading-tight sm:font-black sm:tracking-[-0.033em]">
                      EasyMarry&apos;s Innovative Approach
                    </h1>
                    <p className="text-text-light dark:text-text-dark text-sm sm:text-base font-normal leading-normal">
                      EasyMarry addresses these challenges with a unique blend
                      of technology and human insight, ensuring a trustworthy
                      and culturally sensitive matchmaking experience.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-0">
                    <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                      <div className="text-text-light dark:text-text-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                          Verified Profiles
                        </h2>
                        <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                          We verify all profiles to ensure authenticity,
                          building a community of genuine individuals seeking
                          meaningful connections.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                      <div className="text-text-light dark:text-text-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M128,112a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm80-72H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"></path>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                          Privacy-First Design
                        </h2>
                        <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                          Our platform prioritizes your privacy, employing
                          advanced security measures to protect your personal
                          data.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                      <div className="text-text-light dark:text-text-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                          Culturally Sensitive Matching
                        </h2>
                        <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                          We consider cultural backgrounds and preferences in
                          our matching algorithm, ensuring compatibility and
                          understanding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Features */}
                <h2 className="text-text-light dark:text-text-dark text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
                  Core Features
                </h2>
                <p className="text-text-light dark:text-text-dark text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-4 sm:px-6">
                  Explore the unique features that make EasyMarry the leading
                  hybrid matchmaking platform.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 py-4">
                  <div className="flex flex-col gap-4 rounded-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeheeiQnCKkLGprKsYFtrdvry8vbj_sZP-W9SIDDTq5Ct1LnHxoPLEUbXj9TeaejmCr1ySNBsBb6cBmj_p4J67D209As8PXr7tWIrSMLlznpsr6dZYWij_PSSrSlnwuwz4norB7ZMG2e4iOW9hjcGP-zMqx5rOQREFn4cW-Lntfz8LtmFHmHtPFxoXDW69EYwe1_lEaUUZdu1NXDnr8hjiWYubvcuraWpIcsOBg6hwwp9vLqk6IYUWnl5d8Bi396k6AFG9vd7NoxA")',
                      }}
                    ></div>
                    <div>
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                        AI-Powered Psychometric Matching
                      </p>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Advanced algorithms for precise compatibility.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZs4ILfmDs8kANmwqqAPHnPFx9t3adeVQuEeu9Va_JU1SoANkd2yQliwA4UAdG0_0MGSt2fT9MxMh_yupnLx1AX6skDfa1CZad8BBCjPs3QePWbQ1azJh8CWTVQfaBFbXXxP9SnVCQmtH6TFklMkFxXJIXEBBsCGQpuIjV68kxYzrSAYoniVGyVHXZh5qqRTIEbU-WVqSDJ9uXUh4wN_alfk64j85R7tDGE2GgkvMaLvGsrUKVgI33j-_LDXgVGfV-oUZ5Xs2YaWM")',
                      }}
                    ></div>
                    <div>
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                        Privacy-First Architecture
                      </p>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Secure platform ensuring user data protection.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIloW4od7LbidHnxaENATVjwI7kQyLPKSQ4GtfzfNuF-_yNH1R26W_OJhmr0zBSs0Kr8wtXkeppeNBXU0f8zrATWK7cFaVCltug8DiOHyMF8CHNFJZ8SL3WC8gdIJ4PZWz7FKF7nVZqCTM7wur0NSnlceAJw7evtSsJE-yth18LD0dN_lj6IPA0YfsvDkGs3Ah-PmUmZGpnpKbACUcoEz8BkGLcTMKVa97Gtk9MqTCOjBU9tue4lv8w61SPgytNPuu7z-HH-I7iKI")',
                      }}
                    ></div>
                    <div>
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                        Hybrid O2O Model
                      </p>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Seamless online-to-offline matchmaking experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCq78VCd2mbSxElnWYLktuQwbq0LoHCprGB4gaq5ZH1zs7tBsHxXHgxijOr55lJjZoSW0XHUIoEYZeF1kwKZM7FXIKfnX82MAIQvkjbUQfI_V8ayciBOdzManduDx2dmoKeVLg4sBkvWQSjo5BElUuFCL_9u3aQ44ZqEsALQJsOXS6WtjkTH2XXtir_awhqziNK9e4BsIfX45FcoAEpaXLt1u3lk7oBcBaa-0ZaUxZKV4BpJ367Bu2F5jBbv5NMJDHZ5tkCHIM4U84")',
                      }}
                    ></div>
                    <div>
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                        Family Collaboration with User Autonomy
                      </p>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Involving families while respecting individual choices.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3GVDrk89JiRH-7_8_INxF56zcHep0JWBeJ9-pu2fwAfvIUabvyAH_TQinMrS3g1EMEM_-c6OYD9RTZmHOxgO3z_kPXbXtiVtoK4e5YA8KJCKwegRDiKE0hX9GQfbTbK9r1eukYKmIGPOVagurhcLDB7jR5OqY0kdWjsfX0_1Xkw-kCeMQiEksYxvZVEhxciBGzRfaxNx75xXsCe_kRC90suGaEVQ8YjGsFw-FaPQGdCNkzp3i-wgEw7t74iJfCHgDHr6L0bMTdaM")',
                      }}
                    ></div>
                    <div>
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                        Affordability &amp; Micro-Payment Flexibility
                      </p>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Flexible payment options for all users.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Supporting Features */}
                <h2 className="text-text-light dark:text-text-dark text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
                  Supporting Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-4 sm:px-6 py-4">
                  <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                    <div className="text-text-light dark:text-text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56l160,0Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                        Secure &amp; Verified Ecosystem
                      </h2>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Our platform employs rigorous verification processes to
                        ensure a safe and trustworthy environment for all users.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                    <div className="text-text-light dark:text-text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                        Cultural Sensitivity
                      </h2>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        We embrace and respect diverse cultural backgrounds,
                        offering tailored matchmaking to honor individual
                        traditions and values.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                    <div className="text-text-light dark:text-text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                        AI-Powered Insights
                      </h2>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Leverage our advanced AI to gain deeper insights into
                        compatibility and enhance your matchmaking journey.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                    <div className="text-text-light dark:text-text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                        User Control
                      </h2>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        You have full control over your profile and preferences,
                        ensuring a personalized and comfortable experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Choose EasyMarry */}
                <h2 className="text-text-light dark:text-text-dark text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
                  Why Choose EasyMarry?
                </h2>
                <p className="text-text-light dark:text-text-dark text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-4 sm:px-6">
                  EasyMarry combines the best of traditional matchmaking with
                  modern technology, offering a unique blend of trust, cultural
                  sensitivity, and autonomy. See how we compare to other
                  platforms:
                </p>
                <div className="px-4 sm:px-6 py-3">
                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <table className="w-full min-w-[640px] border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark rounded-xl">
                      <thead>
                        <tr className="bg-white dark:bg-card-dark">
                          <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal border-b border-gray-300 dark:border-gray-600 min-w-[120px]">
                            Feature
                          </th>
                          <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal border-b border-gray-300 dark:border-gray-600 min-w-[100px]">
                            EasyMarry
                          </th>
                          <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal border-b border-gray-300 dark:border-gray-600 min-w-[120px]">
                            Traditional
                          </th>
                          <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal border-b border-gray-300 dark:border-gray-600 min-w-[100px]">
                            Dating Apps
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-300 dark:border-gray-600">
                          <td className="px-2 sm:px-4 py-2 text-text-light dark:text-text-dark text-xs sm:text-sm font-normal leading-normal">
                            Affordability
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              ⭐ High
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Medium
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Low
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 dark:border-gray-600">
                          <td className="px-2 sm:px-4 py-2 text-text-light dark:text-text-dark text-xs sm:text-sm font-normal leading-normal">
                            Privacy
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              ⭐ High
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Medium
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Low
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 dark:border-gray-600">
                          <td className="px-2 sm:px-4 py-2 text-text-light dark:text-text-dark text-xs sm:text-sm font-normal leading-normal">
                            Security
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              ⭐ High
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Medium
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Low
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 dark:border-gray-600">
                          <td className="px-2 sm:px-4 py-2 text-text-light dark:text-text-dark text-xs sm:text-sm font-normal leading-normal">
                            Cultural Fit
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              ⭐ High
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Medium
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Low
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 dark:border-gray-600">
                          <td className="px-2 sm:px-4 py-2 text-text-light dark:text-text-dark text-xs sm:text-sm font-normal leading-normal">
                            Success Rate
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              ⭐ High
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Medium
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Low
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 dark:border-gray-600">
                          <td className="px-2 sm:px-4 py-2 text-text-light dark:text-text-dark text-xs sm:text-sm font-normal leading-normal">
                            Autonomy
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              ⭐ High
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Low
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              High
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 dark:border-gray-600">
                          <td className="px-2 sm:px-4 py-2 text-text-light dark:text-text-dark text-xs sm:text-sm font-normal leading-normal">
                            Matching Algorithm
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              ⭐ High
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Low
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Medium
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t border-gray-300 dark:border-gray-600">
                          <td className="px-2 sm:px-4 py-2 text-text-light dark:text-text-dark text-xs sm:text-sm font-normal leading-normal">
                            Ease of Use
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              ⭐ High
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              Medium
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <span className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-xs sm:text-sm font-medium leading-normal rounded-lg w-full text-center">
                              High
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Vision & Mission */}
                <h2 className="text-text-light dark:text-text-dark text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
                  Our Vision &amp; Mission
                </h2>
                <p className="text-text-light dark:text-text-dark text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-4 sm:px-6 text-center">
                  At EasyMarry, our vision is to redefine matchmaking by
                  creating a trusted, innovative, and culturally sensitive
                  platform that empowers individuals to find meaningful
                  connections. Our mission is to leverage cutting-edge
                  technology and a privacy-first approach to facilitate
                  authentic relationships, ensuring every user feels respected,
                  understood, and supported on their journey to finding love.
                </p>
                <h2 className="text-text-light dark:text-text-dark text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
                  Our Pillars
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 px-4 sm:px-6 py-4">
                  <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                    <div className="text-text-light dark:text-text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                        Affordable Access
                      </h2>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Making meaningful connections accessible to everyone.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                    <div className="text-text-light dark:text-text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                        AI Innovation
                      </h2>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Leveraging AI to enhance matchmaking accuracy and
                        personalization.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                    <div className="text-text-light dark:text-text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                        Privacy-First Design
                      </h2>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Prioritizing user privacy and data security in every
                        aspect.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                    <div className="text-text-light dark:text-text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                        Cultural Respect
                      </h2>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Celebrating and respecting diverse cultural backgrounds
                        and traditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark p-4 flex-col">
                    <div className="text-text-light dark:text-text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                        Empowerment of Users
                      </h2>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                        Giving users control over their matchmaking journey and
                        choices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex px-4 sm:px-6 py-6 justify-center">
                  <a
                    href="https://www.easymarry.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full sm:w-auto sm:min-w-[200px] sm:max-w-[320px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary hover:bg-red-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition"
                  >
                    <span className="truncate">Explore EasyMarry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
