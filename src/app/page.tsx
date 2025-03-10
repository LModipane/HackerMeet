import SignInButtons from "@/components/SignInButtons";
import { authOptions } from "@/lib/next-auth/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
	const clientSession = await getServerSession(authOptions);
	if (clientSession && clientSession.user) return redirect('/ProfileFeed');
	
	return (
		<main className="h-full w-full flex flex-col gap-y-5 items-center justify-center p-2">
			<h1>HackerMeet</h1>
			<SignInButtons/>
		</main>
	);
}
