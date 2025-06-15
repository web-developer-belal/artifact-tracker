import { motion } from 'framer-motion';

const SectionTitle = ({ title, center = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-8 ${center ? 'flex flex-col items-center' : ''}`}
    >
      <h2
        className={`
          text-3xl md:text-4xl font-extrabold tracking-tight
          text-transparent bg-clip-text bg-gradient-to-r from-neutral to-success
          ${center ? 'text-center' : ''}
        `}
      >
        {title}
      </h2>
      <div
        className={`
          mt-2 h-1 w-16 rounded-full
          bg-gradient-to-r from-neutral via-primary to-success
          ${center ? 'mx-auto' : ''}
        `}
      />
    </motion.div>
  );
};

export default SectionTitle;