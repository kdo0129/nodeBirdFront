import React from 'react';
import Head from 'next/head';
import Applayout from '../components/Applayout';

const NodeBird = ({ Component }) => {
	return (
		<>
			<Head>
				<title>NodeBird</title>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css"
				/>
			</Head>
			<Applayout>
				<Component />
			</Applayout>
		</>
	);
};

export default NodeBird;
