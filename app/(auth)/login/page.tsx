import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import SignInForm from "components/Auth/SignInForm";

const SignInPage = async () => {
	const token = cookies().get("next-auth.session-token");
	const csrfToken = cookies().get("next-auth.csrf-token");

	if (token?.value) {
		redirect("/");
	}

	if (!csrfToken?.value) {
		redirect("/");
	}

	return <SignInForm csrfToken={csrfToken.value} />;
};

export default SignInPage;
