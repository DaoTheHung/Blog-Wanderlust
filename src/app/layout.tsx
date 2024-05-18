import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import { Header, Navbar, Footer } from '@/features/layout';

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
					'font-gentium-plus m-0 p-0 box-border px-3 lg:px-0'
				)}
			>
				<div className="min-h-dvh relative">
					<div className="mb-10 mx-auto ">
						<Header />
						<div className="border-b border-t py-3">
							<div className="w-full flex justify-center mx-auto ">
								<Navbar />
							</div>
						</div>
					</div>

					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
