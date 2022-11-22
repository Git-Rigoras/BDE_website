"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const EmailForm = () => {
	const [email, setEmail] = useState<string>("");
	const [content, setContent] = useState<string>("");

	const handleSendContactEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		fetch("/api/emails/contact", {
			method: "POST",
			body: JSON.stringify({
				email,
				content,
			}),
		});
	};

	return (
		<form
			className="form-control w-1/3"
			onSubmit={event => handleSendContactEmail(event)}
		>
			<label className="label">Votre adresse mail</label>
			<input
				type="email"
				className="input input-primary"
				placeholder="john@teaminfernal.fr"
				onChange={event => setEmail(event.target.value)}
			/>
			<label className="label">Votre demande</label>
			<textarea
				className="textarea textarea-primary text-base"
				placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus."
				rows={5}
				onChange={event => setContent(event.target.value)}
			/>
			<button
				type={"submit"}
				className="btn btn-primary mt-4 gap-2"
			>
				<FontAwesomeIcon icon={faPaperPlane} />
				Confirmer
			</button>
		</form>
	);
};

export default EmailForm;
