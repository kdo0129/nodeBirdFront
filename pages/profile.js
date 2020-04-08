import React from 'react';
import { Button, Card, Icon, List } from 'antd';
import NicknameEdit from '../components/NicknameEditForm';
const Profile = () => {
	return (
		<>
			<div>
				<NicknameEdit />
				<List
					style={{ marginBottom: '20px' }}
					grid={{ gutter: 4, xs: 2, md: 3 }}
					size="small"
					header={<div>팔로잉 목록</div>}
					loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
					bordered
					dataSource={['김도움', '꼬물', '프론트엔드']}
					renderItem={(item) => (
						<List.Item style={{ marginTop: '20px' }}>
							<Card actions={[<Icon key="stop" type="stop" />]}>
								<Card.Meta description={item} />
							</Card>
						</List.Item>
					)}
				/>
				<List
					style={{ marginBottom: '20px' }}
					grid={{ gutter: 4, xs: 2, md: 3 }}
					size="small"
					header={<div>팔로워 목록</div>}
					loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
					bordered
					dataSource={['팔로워1', '팔로워2', '팔로워3']}
					renderItem={(item) => (
						<List.Item style={{ marginTop: '20px' }}>
							<Card actions={[<Icon key="stop" type="stop" />]}>
								<Card.Meta description={item} />
							</Card>
						</List.Item>
					)}
				/>
			</div>
		</>
	);
};

export default Profile;
