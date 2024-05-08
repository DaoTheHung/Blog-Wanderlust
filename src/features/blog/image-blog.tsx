import Image from 'next/image';

export const ImageBlog = ({ src, alt }: {src: string, alt:string}) => {
	return <Image src={src} alt={alt} />;
};
