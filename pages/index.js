import React from 'react';
import { Form, Input, Button, Card, Icon, Avatar } from 'antd';

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
		{
			User: {
				id: 2,
				nickname: 'tester',
			},
			content: 'dummy content2 입니다.',
			img:
				'https://pds.joins.com/news/component/htmlphoto_mmdata/201707/20/5c9958d8-2497-4bd2-bfd0-56272caa2bca.jpg',
		},
	],
};

const Home = () => {
	return (
		<>
			<div>
				{dummy.isLoggedIn && (
					<Form encType="multipart/form-data" style={{ marginBottom: 20 }}>
						<Input.TextArea
							maxLength={140}
							placeholder="오늘은 어떤 일이 있었나요?"
						/>
						<div>
							<input type="file" multiple hidden />
							<Button type="primary">이미지 업로드</Button>
							<Button
								type="primary"
								style={{ float: 'right' }}
								htmlType="submit"
							>
								트윗!
							</Button>
						</div>
						<div>
							{dummy.imagePaths.map((v, i) => {
								return (
									<div key={v} style={{ display: 'inline' }}>
										<img
											src={'http://localhost:3065/' + v}
											style={{ width: `200px` }}
											alt={v}
										/>
										<div>
											<Button>제거</Button>
										</div>
									</div>
								);
							})}
						</div>
					</Form>
				)}
				{dummy.mainPosts.map((c) => {
					return (
						<Card
							key={+c.createdAt}
							cover={c.img && <img alt="example" src={c.img} />}
							actions={[
								<Icon type="retweet" key="retweet" />,
								<Icon type="heart" key="heart" />,
								<Icon type="message" key="message" />,
								<Icon type="ellipsis" key="ellipsis" />,
							]}
							extra={<Button>팔로우</Button>}
						>
							<Card.Meta
								avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
								title={c.User.nickname}
								description={c.content}
							/>
						</Card>
					);
				})}
			</div>
		</>
	);
};

export default Home;
