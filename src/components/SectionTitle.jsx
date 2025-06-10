import { motion } from 'framer-motion';

const SectionTitle = ({ title, center = false }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`text-2xl font-bold tracking-wide text-success-content mb-6 ${center ? 'mx-auto' : ''} border-b-orange-400 border-b w-fit`}
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
