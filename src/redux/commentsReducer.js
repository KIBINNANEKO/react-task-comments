import { FETCH_COMMENTS_ACTION, FETCH_COMMENTS_ACCESS, FETCH_COMMENTS_ERROR } from './commentsAsyncActions'
import { ADD_COMMENT, REMOVE_COMMENT } from './commentsActions'

const defaultState = {
	comments: null,
	isLoading: false,
	error: null
}

export const commentsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_COMMENTS_ACTION:
			return { ...state, isLoading: true }
		case FETCH_COMMENTS_ACCESS:
			return { ...state, isLoading: false, comments: action.payload }
		case FETCH_COMMENTS_ERROR:
			return { ...state, isLoading: false }
		case ADD_COMMENT:
			return { ...state, comments: [action.payload, ...state.comments ] }
		case REMOVE_COMMENT:
			const itemId = action.payload
			const updatedItems = state.comments.filter(item => item.id !== itemId)
			return { ...state, comments: updatedItems }
		default:
			return {...defaultState}
	}
}