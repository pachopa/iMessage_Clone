import { signIn, useSession } from 'next-auth/react';

export default function Home() {

	const { data, status } = useSession();

	console.log("data, status: ", data, status, "#############FileName: pages/index.tsx CurrentLine: 7");
	return (
		<>
			<button onClick={() => signIn('google')}>Sign In</button>
		</>
	);
}
