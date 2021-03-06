import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import { Menu, Input, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

const Applayout = ({ children }) => {
	const { isLoggedIn } = useSelector((state) => state.user);
	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item key="home">
					<Link href="/">
						<a>노드버드</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="profile">
					<Link href="/profile">
						<a>프로필</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="mail">
					<Input.Search enterButton style={{ verticalAlign: 'middle' }} />
				</Menu.Item>
			</Menu>
			<Link href="/signup">
				<a>
					<Button>회원가입</Button>
				</a>
			</Link>
			<Row gutter={8}>
				<Col xs={24} md={6}>
					{isLoggedIn ? <UserProfile /> : <LoginForm />}
				</Col>
				<Col xs={24} md={12}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					세 번째
				</Col>
			</Row>
		</div>
	);
};

Applayout.propTypes = {
	children: PropTypes.node,
};

export default Applayout;
