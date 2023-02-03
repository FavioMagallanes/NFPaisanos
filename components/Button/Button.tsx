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
      <button onClick={callback} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Button;
