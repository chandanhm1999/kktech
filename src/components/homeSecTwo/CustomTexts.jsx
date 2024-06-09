'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/Motion'; // fade

export const CustomTexts = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={`font-bold sm:text-[2vw] text-[8vw] text-darkBlue text-gradient ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export default CustomTexts;
