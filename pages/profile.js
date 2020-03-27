import React from 'react';
import Applayout from '../components/Applayout';
import Head from 'next/head';

const Profile = () => {
	return (
		<div>
			<Head>
				<title>NodeBird</title>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css"
				/>
			</Head>
			<Applayout>내 프로필</Applayout>
		</div>
	);
};

export default Profile;
