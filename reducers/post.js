export const intialState = {
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
	imagePaths: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

export const addPost = {
	type: ADD_POST,
};
export const addDummy = {
	type: ADD_DUMMY,
	data: {
		content: 'Hello',
		UserId: 1,
		User: {
			nickname: 'doumdoum',
		},
	},
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
			};
		case ADD_DUMMY:
			return {
				...state,
				mainPosts: [...state.mainPosts, action.data],
			};
		default:
			return state;
	}
};

export default reducer;
