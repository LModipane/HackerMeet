import { TinderCards } from '@/components';
import { authOptions } from '@/lib/next-auth/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ProfileFeedPage() {
	const clientSession = await getServerSession(authOptions);
	if (!clientSession || !clientSession.user) return redirect('/');

	const profiles = [
		{
			id: '1',
			name: 'shaun',
			img: 'https://images.unsplash.com/photo-1741487431784-fd2a1db916bb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			id: '2',
			name: 'Thato',
			img: 'https://images.unsplash.com/photo-1674462101256-bf59863dc05f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
		},
		{
			id: '3',
			name: 'Nao',
			img: 'https://images.unsplash.com/photo-1708413627559-66d92d9c95ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
		},
		{
			id: '4',
			name: 'Tshepeng',
			img: 'https://images.unsplash.com/photo-1685674594424-88febb74cfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
		},
		{
			id: '5',
			name: 'tshiamo',
			img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
			elivatorPitch: `Hi, I’m Lesedi Shaun Modipane, a passionate software developer with a strong background in building scalable web applications. I specialize in JavaScript, TypeScript, and Next.js,
					crafting high-performance solutions that enhance user experiences. Whether it's developing
					real-time features, optimizing APIs, or improving front-end responsiveness, I thrive on
					solving complex problems through clean, efficient code. Recently, I built 'Family
					Football,' a social prediction platform that brings people together through sports. I love
					collaborating with teams to create impactful software that scales. If you're looking for a
					developer who’s adaptable, innovative, and always eager to learn, let’s connect! 🚀`,
		},
	];

	return (
		<main className="flex h-full w-full ">
			<div className="bg-teal-600 h-full w-[300px] hide-on-mobile">Dashboard</div>
			<div className="h-full flex-1 mb-4">
				<TinderCards initialProfiles={profiles} />
			</div>
		</main>
	);
}
