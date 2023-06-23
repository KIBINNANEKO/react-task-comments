import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchComments } from "../redux/commentsAsyncActions"
import CommentItem from "./CommentItem"
import CommentForm from "./CommentForm"

function CommentsWindow(){

	const dispatch = useDispatch()

	const { comments, isLoading, error } = useSelector(state => ({
		comments: state.comments.comments,
		isLoading: state.comments.isLoading,
		error: state.comments.error
	}))

	const [length, setLength] = useState(0)

	useEffect(() => {
		dispatch(fetchComments())
	}, [])

	useEffect(()=> {
		setLength(comments?.length)
	}, [comments])


	return(
		<>
			<p className="comments-title">Comments <span>({length})</span></p>
			<CommentForm/>
			<div className="comments-window">
				{ comments?.map(item => (
					<CommentItem key={item.id} {...item}></CommentItem>
				))}
			</div>
		</>
	)

}

export default CommentsWindow