import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './PrimaryButton.module.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ 
  children, 
  className = '', 
  isLoading = false, 
  ...props 
}) => {
  return (
    <button
      className={`${styles.btn} ${className} ${isLoading ? 'loading' : ''}`.trim()}
      disabled={isLoading || props.disabled} // Disable button if loading or disabled
      {...props} // Pass other button props (type, onClick, etc.)
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
