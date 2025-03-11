import { TinderCards } from '@/components';
import { authOptions } from '@/lib/next-auth/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ProfileFeedPage() {
	const clientSession = await getServerSession(authOptions);
	if (clientSession && clientSession.user) return redirect('/');

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
	];
	return (
		<main className="flex h-full w-full ">
			<div className="bg-teal-600 h-full w-[300px] .hide-on-mobile">Dashboard</div>
			<div className="h-full flex-1">
				<TinderCards initialProfiles={profiles} />
			</div>
		</main>
	);
}
