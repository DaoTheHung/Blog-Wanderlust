type TextBlockProps = {
	children: React.ReactNode;
};

export const PBlock = ({ children }: TextBlockProps) => {
	//   console.log("data",children);

	return (
		<div className="text-darkBlue mt-2 text-sm lg:text-[20px] ">
			{children}
		</div>
	);
};
