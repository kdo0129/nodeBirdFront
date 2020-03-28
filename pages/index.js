import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

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
			createdAt: 1, // 임시 설정
		},

		{
			User: {
				id: 2,
				nickname: 'tester',
			},
			content: 'dummy content2 입니다.',
			img:
				'https://pds.joins.com/news/component/htmlphoto_mmdata/201707/20/5c9958d8-2497-4bd2-bfd0-56272caa2bca.jpg',
			createdAt: 2, // 임시 설정
		},
	],
};

const Home = () => {
	return (
		<>
			<div>
				{dummy.isLoggedIn && <PostForm dummy={dummy} />}
				{dummy.mainPosts.map((c) => {
					return <PostCard key={c} />;
				})}
			</div>
		</>
	);
};

export default Home;
