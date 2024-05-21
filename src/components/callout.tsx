import { cn } from '@/lib/utils';

interface CalloutProps {
	icon?: string;
	children?: React.ReactNode;
	type?: 'default' | 'warning' | 'danger';
	className1: string;
}

export function Callout({
	children,
	icon,
	className1,
	type = 'default',
	...props
}: CalloutProps) {
	return (
		<div
			className={cn(
				className1,
				'my-6 flex items-start rounded-md border border-[#037841] bg-[#f1fff9]  p-3',
				{
					'border-red-900 bg-red-50': type === 'danger',
					'border-yellow-900 bg-yellow-50': type === 'warning'
				}
			)}
			{...props}
		>
			{icon && <span className="mr-4 text-2xl">{icon}</span>}
			<div>{children}</div>
		</div>
	);
}
