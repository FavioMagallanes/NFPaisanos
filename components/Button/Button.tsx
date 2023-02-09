import { motion } from 'framer-motion';

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  callback?: () => void;
}

const Button = ({
  children,
  className,
  callback,
}: ButtonProps): JSX.Element => {
  return (
    <div>
      <motion.button
        onClick={callback}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    </div>
  );
};

export default Button;
