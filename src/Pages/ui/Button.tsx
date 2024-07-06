//
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	className?: string;
}
const Button = ({ children, className, ...rest }: IProps) => {
	return (
		<>
			<button
				className={`flex-1 rounded-lg text-white p-2 ${className}`}
				{...rest}>
				{children}
			</button>
		</>
	);
};

export default Button;
