import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
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

NodeBird.propTypes = {
	Component: PropTypes.elementType, // jsx에 들어갈 수 있는 (렌더링 될 수 있는) 모든 것을 node라고한다.
};

export default NodeBird;
