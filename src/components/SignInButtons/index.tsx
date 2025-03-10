'use client';

import React from 'react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';

const SignInButton = () => {
	return (
		<div className="flex flex-col gap-y-5">
			<Button className="bg-white" variant="default" size={'lg'} onClick={() => signIn('google')}>
				Sign In
			</Button>
		</div>
	);
};

export default SignInButton;
