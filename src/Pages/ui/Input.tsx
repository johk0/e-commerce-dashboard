import { memo } from "react";

//
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: IProps) => {
	return (
		<>
			<input
				className="
                rounded-md
                foucs:outline-none
                focus:ring-2
              focus:ring-indigo-500 
                p-1 outline-none
              border-gray-300 
                border
                shadow-md
                "
				{...rest}
			/>
		</>
	);
};

export default memo(Input);
