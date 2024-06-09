'use client';

import { motion } from 'framer-motion';
import styles from '../../styles';
import CustomTexts from "./CustomTexts"; // Ensure this path is correct
import { aboutStaggerContainer, fadeIn } from '../../utils/Motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-01 z-0" />
    <motion.div
      variants={aboutStaggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <CustomTexts title="We are KK Technologies" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-3 font-medium text-base text-center darkBlue"
      >
        We pride ourselves on being at the forefront of the electronics distribution industry. With a focus on{' '}
        <span className="font-extrabold text-blue">
          innovation and customer satisfaction
        </span>
        , we provide top-tier electronic and electrical components to a diverse range of industries. Our expertise extends beyond distribution; we collaborate closely with our clients to{' '}
        <span className="font-extrabold text-blue">
          develop and implement bespoke solutions
        </span>
        , ensuring that every project meets the highest standards of{' '}
        <span className="font-extrabold text-blue">
          performance and reliability
        </span>
        . Our commitment to excellence is reflected in our comprehensive support and unwavering dedication to advancing technology. Join us in our mission to push the boundaries of what’s possible in the world of electronics.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
