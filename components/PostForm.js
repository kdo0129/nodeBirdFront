import React from 'react';
import { Form, Button, Input } from 'antd';

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

const PostForm = () => {
	return (
		<>
			<Form encType="multipart/form-data" style={{ margin: '10px 0 20px' }}>
				<Input.TextArea
					maxLength={140}
					placeholder="오늘은 어떤 일이 있었나요?"
				/>
				<div>
					<input type="file" multiple hidden />
					<Button type="primary">이미지 업로드</Button>
					<Button type="primary" style={{ float: 'right' }} htmlType="submit">
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
		</>
	);
};

export default PostForm;
