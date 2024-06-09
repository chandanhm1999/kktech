import {
  IconDeviceLaptop,
  IconSettings,
  IconLeaf,
  IconTruck,
} from "@tabler/icons-react";

export default function Steps() {
  return (
    <section>
      <div className="mx-auto flex flex-col p-6">
        <p className="text-center text-sm text-body-500 sm:text-base">
          Here is how our process works.
        </p>
        <div className="divide-y divide-body-500">
          <div className="mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0">
            <div className="col-span-full flex items-center justify-center lg:col-span-1">
              <IconDeviceLaptop className="h-16 w-16" stroke={1.0} />
            </div>
            <div className="col-span-full flex max-w-3xl flex-col justify-center text-center lg:col-span-3 lg:text-left">
              <p className="text-xs font-medium uppercase text-secondary-500">
                Step 1
              </p>
              <h2 className="text-xl font-bold tracking-tight text-body md:text-2xl">
                Ideation & Research
              </h2>
              <p className="mt-4 text-body-500">
                We start by identifying market needs and opportunities in the technology sector. Our team conducts extensive research and collaborates with industry experts to generate innovative ideas that align with our mission and values.
              </p>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0">
            <div className="col-span-full flex items-center justify-center lg:col-span-1">
              <IconSettings className="h-16 w-16" stroke={1.0} />
            </div>
            <div className="col-span-full flex max-w-3xl flex-col justify-center text-center lg:col-span-3 lg:text-left">
              <p className="text-xs font-medium uppercase text-secondary-500">
                Step 2
              </p>
              <h2 className="text-xl font-bold tracking-tight text-body md:text-2xl">
                Development & Testing
              </h2>
              <p className="mt-4 text-body-500">
                Our engineers and developers create cutting-edge solutions using the latest technology. We prioritize quality and reliability by conducting rigorous testing to ensure our products meet the highest standards.
              </p>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0">
            <div className="col-span-full flex items-center justify-center lg:col-span-1">
              <IconLeaf className="h-16 w-16" stroke={1.0} />
            </div>
            <div className="col-span-full flex max-w-3xl flex-col justify-center text-center lg:col-span-3 lg:text-left">
              <p className="text-xs font-medium uppercase text-secondary-500">
                Step 3
              </p>
              <h2 className="text-xl font-bold tracking-tight text-body md:text-2xl">
                Sustainable Practices
              </h2>
              <p className="mt-4 text-body-500">
                We are committed to sustainability by employing eco-friendly production processes and using sustainable materials. Our partners share our values and are dedicated to minimizing environmental impact.
              </p>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-4 justify-center space-y-8 p-8 lg:space-y-0">
            <div className="col-span-full flex items-center justify-center lg:col-span-1">
              <IconTruck className="h-16 w-16" stroke={1.0} />
            </div>
            <div className="col-span-full flex max-w-3xl flex-col justify-center text-center lg:col-span-3 lg:text-left">
              <p className="text-xs font-medium uppercase text-secondary-500">
                Step 4
              </p>
              <h2 className="text-xl font-bold tracking-tight text-body md:text-2xl">
                Delivery & Support
              </h2>
              <p className="mt-4 text-body-500">
                We ensure timely delivery of our products using efficient logistics. Our dedicated customer support team is always available to assist customers and ensure a seamless experience from order to delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
