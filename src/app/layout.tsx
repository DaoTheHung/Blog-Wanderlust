import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import { Header, Navbar, Footer } from '@/features/layout';
import { BackToTop } from '@/components/common/back-to-top';

export const metadata: Metadata = {
	title: 'Travel with us - Tạp chí du lịch được yêu thích nhất Việt Nam',
	description:
		'Tạp chí song ngữ Anh – Việt Wanderlust Tips luôn đi đầu trong việc tập hợp các bài viết Du lịch, Khách sạn Resort và Kinh nghiệm du lịch chất lượng.',
	icons: 'https://wanderlusttips.asia/wp-content/uploads/2020/12/cropped-Logo-W-03-32x32.png'
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					inter.className,
					'font-gentium-plus m-0 p-0 box-border '
				)}
			>
				<div className="min-h-dvh relative">
					<div className=" mx-auto ">
						<Header />
					</div>
					<div className="border-b my-10 bg-white hidden lg:block border-t py-3 sticky top-0 z-[9999]">
						<div className="w-full flex justify-center mx-auto ">
							<Navbar />
						</div>
					</div>
					<div className="px-3 lg:px-0">{children}</div>
					<Footer />
				</div>
				<div className="fixed z-[999] bottom-4 right-4">
					<BackToTop />
				</div>
			</body>
		</html>
	);
}
