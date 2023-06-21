const ADD_COMMENT = "ADD_COMMENT"
const REMOVE_COMMENT = "REMOVE_COMMENT"

export const addComment = (comment) => ({type: ADD_COMMENT, payload: comment})
export const removeComment = (commentId) => ({ type: REMOVE_COMMENT, payload: commentId })