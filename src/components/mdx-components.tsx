import * as React from 'react';
import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';

import { cn } from '@/lib/utils';

const useMDXComponent = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

const components = {
	h1: ({ className, ...props }: { className: string }) => (
		<h1
			className={cn(
				'text-darkBlue mt-2  font-semibold text-2xl lg:text-[32px] ',
				className
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: { className: string }) => (
		<h2
			className={cn(
				'text-darkBlue mt-2  font-medium text-sm lg:text-[24px] ',
				className
			)}
			{...props}
		/>
	),

	p: ({ className, ...props }: { className: string }) => (
		<p
			className={cn(
				'text-sm lg:text-xl  [&:not(:first-child)]:mt-2',
				className
			)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: { className: string }) => (
		<ul className={cn('mt-3 list-disc', className)} {...props} />
	),
	ol: ({ className, ...props }: { className: string }) => (
		<ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
	),
	li: ({ className, ...props }: { className: string }) => (
		<li className={cn('', className)} {...props} />
	),
	blockquote: ({ className, ...props }: { className: string }) => (
		<blockquote
			className={cn(
				'[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic',
				className
			)}
			{...props}
		/>
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={cn('rounded-md border ', className)}
			alt={alt}
			{...props}
		/>
	),

	Image
};

interface MdxProps {
	code: string;
	components?: Record<string, React.ComponentType>;
}

export function MDXContent({ code, components }: MdxProps) {
	const Component = useMDXComponent(code);
	return <Component components={{ Image, ...components }} />;
}

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
