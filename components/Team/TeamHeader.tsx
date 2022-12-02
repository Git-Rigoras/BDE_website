const TeamHeader = (props: any) => {
	return (
		<div className="flex justify-center">
			<div className="divider w-full my-10 text-lg uppercase font-semibold text-primary">
				{props.name}
			</div>
		</div>
	);
};

export default TeamHeader;
