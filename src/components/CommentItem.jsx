import { generateRandomColor } from "../utils/functions"
import { useDispatch } from "react-redux"
import { removeComment } from "../redux/commentsActions"
import { useEffect, useState } from "react"


function CommentItem(props){

	const {body, user, id} = props

	const dispatch = useDispatch()

	const [avatarColor, setAvatarColor] = useState("")

	useEffect(() => {
		setAvatarColor(generateRandomColor())
	}, [])

	function deleteComment(id){
		dispatch(removeComment(id))
	}

	return(
		<div className="comment-item">
			<div className="comment-item__avatar-block">
					<div className="comment-item__avatar" style={{ 'border': `1px solid ${avatarColor}`}}>
						<span className="comment-item__avatar-text">{user.username[0]}</span>
					</div>
			</div>
			<div className="comment-item__body-block">
				<p className="comment-item__nickname">{user.username}</p>
				<p className="comment-item__comment">{body}</p>
				<button className="comment-item__remove-button" onClick={() => deleteComment(id)}>Delete</button>
			</div>
		</div>
	)
}

export default CommentItem