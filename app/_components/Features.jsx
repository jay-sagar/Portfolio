import Image from "next/image";

const iconRender = (val) => {
  switch (val) {
    case "stat-ico":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-graduation-cap"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      );
    default:
      return <>No Icon</>;
  }
};

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="p-3 rounded-md bg-white dark:bg-gray-950 shadow-lg dark:shadow-none hover:shadow-emerald-600/20 shadow-transparent transition-all ease-linear border border-gray-100 hover:border-gray-100 dark:border-gray-900 dark:hover:border-gray-600">
      <div className="flex gap-4">
        <div className="min-w-max">
          <span className="flex text-emerald-600 dark:text-gray-100 aspect-square rounded bg-emerald-600/10 dark:bg-gray-900 p-3">
            {iconRender(icon)}
          </span>
        </div>
        <div className="space-y-0.5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
const features = [
  {
    id: 1,
    title: "Bachelor of Technology in Computer Science and Technology",
    description: "Dr. A. P. J. Abdul Kalam Technical University",
    icon: "stat-ico",
  },
  {
    id: 2,
    title: "Intermediate PCM",
    description: "St. Francis Convent Sr. Sec. School",
    icon: "stat-ico",
  },
  {
    id: 3,
    title: "High School",
    description: "St. Francis Convent Sr. Sec. School",
    icon: "stat-ico",
  },
];

const Features = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 md:flex-row gap-10 xl:gap-14">
        <h2 className="text-4xl lg:text-4xl max-w-2xl font-bold text-gray-800 dark:text-white justify-center flex border-2 rounded-lg mb-3 mx-auto">
          Education
        </h2>
        <div className="flex flex-1 flex-col gap-5">
          <div className="space-y-3">
            {features.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
