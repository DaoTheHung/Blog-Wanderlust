import Image from 'next/image';

type ImageBlockProps = {
	url: string;
	width: string;
	heigth: string;
};

export const ImageBlock = ({ url, width, heigth }: ImageBlockProps) => {
	return (
		<div
			style={{ width: width, height: heigth }}
			className={`relative ${heigth ? `` : 'h-[300px]'} ${
				width ? `` : '!w-full !h-full'
			}`}
		>
			<Image
				alt=""
				src={url}
				quality={100}
				placeholder={'blur'}
				blurDataURL={url}
				layout={'fill'}
				lazyBoundary={'200px'}
				objectFit={'contain'}
			/>
		</div>
	);
};
