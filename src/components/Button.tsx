import { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  ...props 
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'px-6 py-3 rounded-lg font-medium transition-colors',
        variant === 'primary' && 'bg-indigo-600 text-white hover:bg-indigo-700',
        variant === 'secondary' && 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}