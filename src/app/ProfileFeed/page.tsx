import { TinderCards } from '@/components';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { authOptions } from '@/lib/next-auth/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ProfileFeedPage() {
	const clientSession = await getServerSession(authOptions);
	if (!clientSession || !clientSession.user) return redirect('/');
	console.log(clientSession);
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
			<div className="h-full w-[300px] hide-on-mobile bg-lime-700 border-gray-300 border-r-[3px] flex flex-col justify-between rounded-r-xl">
				<div className="bg-gray-300 flex justify-between h-10 p-2 rounded-tr-xl">
					<div className="">Teams</div>
					<div className="">Create Team</div>
				</div>
				<div className="">body</div>
				<div className="bg-gray-300 h-20 p-2 flex items-center justify-center">
					<div className="flex gap-x-3">
						<Avatar>
							<AvatarImage src={clientSession?.user?.image ?? ''} alt="profile-avater" />
							<AvatarFallback>BB</AvatarFallback>
						</Avatar>
						<div className="">
							<h2>{clientSession?.user?.name ?? 'NA'}</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="h-full flex-1 mb-4">
				<TinderCards initialProfiles={profiles} />
			</div>
		</main>
	);
}
