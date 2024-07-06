/**
 * @param  {number} length
 * @param  {string} color
 * @returns {JSX.Element} a circle component
 * @description This component is a circle component that takes a length and color as props and returns a circle component
 *
 */

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
	color: string;
}

const CirclesColor = ({ color, ...rest }: IProps) => {
	return (
		<>
			<span
				style={{ background: color }}
				className={`w-5 h-5 rounded-full cursor-pointer border-2 border-gray-500 hover:shadow-md hover:border-gray-300 hover:border-2 hover:scale-110 transition-all`}
				{...rest}></span>
		</>
	);
};

export default CirclesColor;
