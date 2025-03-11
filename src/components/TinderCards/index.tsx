'use client';

import { Profile } from '@/@types';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
	initialProfiles: Profile[];
};

const TinderCards = ({ initialProfiles }: Props) => {
	const [profiles, setProfiles] = useState(initialProfiles);
	return (
		<div className="h-full flex-1 grid place-items-center">
			{profiles.map(profile => (
				<Card profile={profile} profiles={profiles} setProfiles={setProfiles} key={profile.id} />
			))}
		</div>
	);
};

export default TinderCards;

type CardProp = {
	profile: Profile;
	profiles: Profile[];
	setProfiles: Dispatch<SetStateAction<Profile[]>>;
};
const Card = ({ profile, profiles, setProfiles }: CardProp) => {
	const x = useMotionValue(0);
	const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
	const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

	const place = profiles.findIndex(obj => obj.id === profile.id);

	const rotate = useTransform(() => {
		const offset = place === 0 ? 0 : place % 2 ? 6 : -6;
		return `${rotateRaw.get() + offset}deg`;
	});

	const handleDragEnd = () => {
		if (Math.abs(x.get()) > 50) setProfiles(prev => prev.filter(p => p.id !== profile.id));
	};
	return (
		<motion.img
			drag="x"
			alt="placeholder"
			src={profile.img}
			dragConstraints={{ left: 0, right: 0 }}
			style={{ gridRow: 1, gridColumn: 1, x, opacity, rotate }}
			onDragEnd={handleDragEnd}
			className="object-fill rounded-lg w-[40%] h-[80%] hover:cursor-grab active:cursor-grabbing origin-bottom"
		/>
	);
};
