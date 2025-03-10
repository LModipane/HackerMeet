import SignInButtons from "@/components/SignInButtons";

export default function Home() {
	return (
		<main className="h-full w-full flex flex-col gap-y-5 items-center justify-center p-2">
			<h1>HackerMeet</h1>
			<SignInButtons/>
		</main>
	);
}
