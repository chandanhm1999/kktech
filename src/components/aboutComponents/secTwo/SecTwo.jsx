import React from 'react'

const SecTwo = () => {
  return (
    <div className="w-full max-w-[1366px] px-5 md:px-10 mx-auto">
      
      <div className="py-5">
        <h2 className="text-3xl font-semibold lg:text-4xl text-center">
          What Sets Us  <span className="font-extrabold text-blue">Apart?</span>
        </h2>
        <div className="py-12">
          <div className="grid  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-newblack p-5 rounded-md">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M22 12h-4" />
                  <path d="M2 12h4" />
                  <path d="M12 2v4" />
                  <path d="M12 22v-4" />
                  <path d="M15.29 15.29l2.12 2.12" />
                  <path d="M6.59 6.59l2.12 2.12" />
                  <path d="M15.29 8.71l2.12-2.12" />
                  <path d="M6.59 17.41l2.12-2.12" />
                </svg>
              </div>

              <h3 className="mt-4 text-xl text-white font-semibold">
                Our Mission
              </h3>
              <p className="mt-2 text-white">
                Our mission at KK Tech is to provide innovative and reliable
                technology solutions that help businesses grow and succeed. We
                aim to deliver high-quality products and services that meet our
                customers needs and exceed their expectations.
              </p>
            </div>
            <div className="bg-newblack p-5 text-white rounded-md">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <h3 className="mt-4 text-xl font-semibold">Our Values</h3>
              <p className="mt-2">
                At KK Technology, our values are the foundation of everything we
                do. They shape our culture, drive our decision-making, and
                define our interactions with customers, partners, and each
                other.
              </p>
            </div>
            <div className="bg-newblack p-5 text-white rounded-md">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9v6M15 9v6" />
                </svg>
              </div>

              <h3 className="mt-4 text-xl font-semibold">Our Commitment</h3>
              <p className="mt-2">
                At KK Tech, we are committed to making a positive impact on our
                community and the world. We believe in creating technology that
                not only meets the needs of today but also paves the way for a
                better tomorrow. We are dedicated to continuous improvement and
                responsible practices in all aspects of our business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen py-10 sm:py-8 lg:py-0 bg-white text-black">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section>
            <h2 className="text-3xl font-bold text-center">Our <span className="font-extrabold text-blue">Values</span></h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue">Integrity</h3>
                <p>
                  We uphold the highest standards of integrity in all our
                  actions. Honesty and ethical behavior are the foundation of
                  our business.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue">Innovation</h3>
                <p>
                  We are committed to fostering a culture of innovation. We
                  encourage creativity and embrace new ideas to stay ahead in
                  the rapidly evolving tech industry.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue">Customer-Centricity</h3>
                <p>
                  Our customers are at the heart of everything we do. We listen
                  to their needs and work tirelessly to provide solutions that
                  add real value to their businesses.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue">Excellence</h3>
                <p>
                  We pursue excellence in every aspect of our work. From product
                  development to customer service, we aim to deliver superior
                  quality and performance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue">Collaboration</h3>
                <p>
                  We believe in the power of teamwork. By working together
                  internally and with our partners, we achieve greater results
                  and drive collective success.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue">Sustainability</h3>
                <p>
                  We are dedicated to sustainable practices that minimize our
                  environmental impact. Our goal is to contribute positively to
                  the communities and ecosystems in which we operate.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue">Respect</h3>
                <p>
                  We treat everyone with respect and dignity. We value diverse
                  perspectives and create an inclusive environment where
                  everyone can thrive.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
