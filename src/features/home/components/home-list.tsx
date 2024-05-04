import React from 'react';
import { Header, Navbar } from '@/features/home';

export const HomeList = () => {
	return (
		<div className="mb-10 mx-auto ">
			<Header />
			<div className="border-b border-t py-3">
				<div className="w-full flex justify-center mx-auto ">
					<Navbar />
				</div>
			</div>
		</div>
	);
};
