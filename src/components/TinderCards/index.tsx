'use client';

import { Profile } from '@/@types';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
	initialProfiles: Profile[];
};

const TinderCards = ({ initialProfiles }: Props) => {
	const [profiles, setProfiles] = useState(initialProfiles);
	return (
		<div className="h-full flex-1 grid place-items-center">
			{profiles.map((profile, index) => (
				<Card
					profile={profile}
					profiles={profiles}
					setProfiles={setProfiles}
					key={profile.id}
					cardIndex={index}
				/>
			))}
		</div>
	);
};

export default TinderCards;

type CardProp = {
	profile: Profile;
	profiles: Profile[];
	setProfiles: Dispatch<SetStateAction<Profile[]>>;
	cardIndex: number;
};
const Card = ({ profile, profiles, setProfiles, cardIndex }: CardProp) => {
	const x = useMotionValue(0);
	const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
	const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

	const isFirst = cardIndex === profiles.length - 1;

	const rotate = useTransform(() => {
		const offset = isFirst ? 0 : cardIndex % 2 ? 6 : -6;
		return `${rotateRaw.get() + offset}deg`;
	});

	const handleDragEnd = () => {
		if (Math.abs(x.get()) > 50) setProfiles(prev => prev.filter(p => p.id !== profile.id));
	};
	return (
		<motion.div
			drag={isFirst ? 'x' : false}
			onDragEnd={handleDragEnd}
			className="relative sm:w-[40%] w-[95%]  h-[90%] rounded-lg"
			dragConstraints={{ left: 0, right: 0 }}
			animate={{
				scale: isFirst ? 1 : 0.95,
				filter: `brightness(${isFirst ? 1 : 0.5})`,
			}}
			style={{
				gridRow: 1,
				gridColumn: 1,
				opacity,
				rotate,
				x,
				transition: '0.125s transform',
				boxShadow: isFirst
					? '0px 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 /0.5)'
					: undefined,
			}}>
			<Image
				fill
				className="object-cover rounded-lg z-0"
				alt="placeholder"
				src={profile.img}
				draggable={false}
			/>
		</motion.div>
	);
};
