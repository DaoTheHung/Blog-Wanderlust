import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Wanderlust Tips - Tạp chí du lịch được yêu thích nhất Việt Nam',
	description: 'Tạp chí song ngữ Anh – Việt Wanderlust Tips luôn đi đầu trong việc tập hợp các bài viết Du lịch, Khách sạn Resort và Kinh nghiệm du lịch chất lượng.',
	icons: 'https://wanderlusttips.asia/wp-content/uploads/2020/12/cropped-Logo-W-03-32x32.png',
  }

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(inter.className,"font-gentium-plus m-0 p-0 box-border")}>{children}</body>
		</html>
	);
}
