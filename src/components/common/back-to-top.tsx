'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from '../ui/button';

export const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
			/* you can also use 'auto' behaviour 
         in place of 'smooth' */
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisible);
	}, []);

	return (
		<Button
			onClick={scrollToTop}
			style={{ display: visible ? 'block' : 'none' }}
			className="bg-red-500"
		>
			<FaArrowCircleUp />
		</Button>
	);
};
