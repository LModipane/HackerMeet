import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<main className="h-full w-full flex flex-col gap-y-5 items-center justify-center p-2">
			<h1>HackerMeet</h1>
			<Button className="bg-white" variant="default" size={'lg'}>
				Sign
			</Button>
		</main>
	);
}
