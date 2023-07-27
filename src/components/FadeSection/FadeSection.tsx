import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const AnimatedWrapper = styled(motion.div)`
  opacity: 0;
  transform: translateY(20px);
`;

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
    delay: 200,
  });

  return (
    <AnimatedWrapper
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </AnimatedWrapper>
  );
};

export default FadeInSection;
