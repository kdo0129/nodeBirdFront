import React from 'react';
import { Card, Avatar } from 'antd';

const dummy = {
	nickname: 'Doum',
	Post: [],
	Followers: [],
	Followings: [],
	isLoggedIn: false,
};

const UserProfile = () => {
	return (
		<>
			<Card
				actions={[
					<div key="twit">
						트윗
						<br />
						{dummy.Post.length}
					</div>,
					<div key="following">
						팔로잉
						<br />
						{dummy.Followings.length}
					</div>,
					<div key="follower">
						팔로워
						<br />
						{dummy.Followers.length}
					</div>,
				]}
			>
				<Card.Meta
					avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
					title={dummy.nickname}
				/>
			</Card>
		</>
	);
};

export default UserProfile;