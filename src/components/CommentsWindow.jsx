import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchComments } from "../redux/commentsAsyncActions"
import CommentItem from "./CommentItem"

function CommentsWindow(){

	const dispatch = useDispatch()

	const { comments, isLoading, error } = useSelector(state => ({
		comments: state.comments.comments,
		isLoading: state.comments.isLoading,
		error: state.comments.error
	}))

	useEffect(() => {
		dispatch(fetchComments())
	}, [])


	return(
		<>
			<p className="comments-title">Comments <span>({0})</span></p>
			<div className="comments-window">
				{ comments?.map(item => (
					<CommentItem key={item.id} {...item}></CommentItem>
				))}
			</div>
		</>
	)

}

export default CommentsWindow