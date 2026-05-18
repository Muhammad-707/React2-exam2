import React from 'react';
import { Card2 } from '@/components/Card2';
import { motion, type Variants } from 'framer-motion';

import i1 from "@/assets/image 14.png";
import i2 from "@/assets/image 15.png";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const cardRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

export const Section3: React.FC = () => {
  return (
    <section className="w-full max-w-[1300px] mx-auto px-4 py-16 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <motion.div variants={cardLeftVariants}>
          <Card2
            titleKey="text66"
            subtitleKey="text67"
            descriptionKey="text68"
            image={i1}
          />
        </motion.div>
        
        <motion.div variants={cardRightVariants}>
          <Card2
            titleKey="text69"
            subtitleKey="text70"
            descriptionKey="text68" 
            image={i2}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};