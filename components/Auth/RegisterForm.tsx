"use client";

import { signIn } from "next-auth/react";

const RegisterForm = () => {
	return (
		<div>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	);
};

export default RegisterForm;
