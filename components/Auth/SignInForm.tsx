"use client";

import { useState } from "react";

type Props = {
	csrfToken: string;
};

const SignInForm = (props: Props) => {
	const { csrfToken } = props;
	const [error, setError] = useState<string>();

	return <div></div>;
};

export default SignInForm;
