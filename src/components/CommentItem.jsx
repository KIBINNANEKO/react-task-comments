import { generateRandomColor } from "../utils/functions"


function CommentItem(props){

	const {body, user} = props

	return(
	<div className="comment-item">
		<div className="comment-item__avatar-block">
				<div className="comment-item__avatar" style={{'border': `1px solid ${generateRandomColor()}`}}>
					<span className="comment-item__avatar-text">{user.username[0]}</span>
				</div>
		</div>
		<div className="comment-item__body-block">
			<p className="comment-item__nickname">{user.username}</p>
			<p className="comment-item__comment">{body}</p>
			<button className="comment-item__remove-button">Delete</button>
		</div>
	</div>
	)
}

export default CommentItem