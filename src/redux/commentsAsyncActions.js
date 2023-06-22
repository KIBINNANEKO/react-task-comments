import axios from 'axios'

export const FETCH_COMMENTS_ACTION = "FETCH_COMMENTS_ACTION"
export const FETCH_COMMENTS_ACCESS = "FETCH_COMMENTS_ACCESS"
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR"

export const fetchCommentsAction = () => ({ type: FETCH_COMMENTS_ACTION})
export const fetchCommentsAccess = (comments) => ({ type: FETCH_COMMENTS_ACCESS, payload: comments })
export const fetchCommentsError = (error) => ({ type: FETCH_COMMENTS_ERROR, payload: error })

export const fetchComments = () => {
	return async (dispatch) => {
		try{
			dispatch(fetchCommentsAction())
			axios.get('https://dummyjson.com/comments')
			.then(res => dispatch(fetchCommentsAccess(res.data.comments)))
		} catch{
			dispatch(fetchCommentsError('Error loading data'))
		}
	}
}