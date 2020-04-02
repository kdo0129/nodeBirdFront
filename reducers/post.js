export const intialState = {
	mainPosts: [],
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
