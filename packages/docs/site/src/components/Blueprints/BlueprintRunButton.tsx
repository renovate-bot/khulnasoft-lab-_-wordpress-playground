import React from 'react';

export function BlueprintRunButton({ blueprint }) {
	const [isRunning, setIsRunning] = React.useState(false);
	if (!blueprint) {
		return null;
	}
	if (!isRunning) {
		return (
			<button
				className="button button--primary"
				onClick={() => {
					setIsRunning(true);
				}}
			>
				Try it out!
			</button>
		);
	}
	const url = `https://wp-playground.khulnasoft.com/?mode=seamless#${JSON.stringify(
		blueprint
	)}`;
	return (
		<iframe
			style={{
				width: '100%',
				height: '500px',
				border: '1px solid #ccc',
			}}
			src={url}
		/>
	);
}
