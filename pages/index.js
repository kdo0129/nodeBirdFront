import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { loginAction, logoutAction } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const dummy = {
	isLoggedIn: true,
	imagePaths: [],
	mainPosts: [
		{
			User: {
				id: 1,
				nickname: '테스터',
			},
			content: 'dummy content 입니다.',
			img:
				'https://pds.joins.com/news/component/htmlphoto_mmdata/201707/20/5c9958d8-2497-4bd2-bfd0-56272caa2bca.jpg',
		},
	],
};

const Home = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	console.log(user);
	useEffect(() => {
		dispatch(loginAction);
		dispatch(logoutAction);
		dispatch(loginAction);
	}, []);

	return (
		<>
			<div>
				{user ? (
					<div>로그인 했습니다: {user.nickname} </div>
				) : (
					<div>로그아웃 했습니다.</div>
				)}
				{dummy.isLoggedIn && <PostForm dummy={dummy} />}
				{dummy.mainPosts.map((c) => {
					return <PostCard key={c} post={c} />;
				})}
			</div>
		</>
	);
};

export default Home;
