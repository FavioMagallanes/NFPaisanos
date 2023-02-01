interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className }: ButtonProps): JSX.Element => {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  );
};

export default Button;
