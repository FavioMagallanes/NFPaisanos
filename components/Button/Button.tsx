interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <div>
      <button className="rounded-full border border-graysecondary py-2 px-3 text-center">
        {children}
      </button>
    </div>
  );
};

export default Button;
