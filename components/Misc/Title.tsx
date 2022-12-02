import Head from "next/head";

type Props = {
	content: string;
};

const Title = (props: Props) => {
	const { content } = props;
	return (
		<Head>
			<title>{content}</title>
		</Head>
	);
};

export default Title;
