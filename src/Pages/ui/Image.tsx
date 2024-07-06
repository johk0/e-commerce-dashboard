interface IProps {
	imageUrl: string;
	alt: string;
	classes?: string;
}
const Image = ({ imageUrl, alt, classes }: IProps) => {
	return (
		<>
			<img src={imageUrl} alt={alt} className={` ${classes}`} />
		</>
	);
};

export default Image;
