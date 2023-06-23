import { useEffect, useRef, useState } from "react"
import { generateRandomColor } from "../utils/functions"
import { addComment } from "../redux/commentsActions"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';

function CommentForm(){

	const [avatarColor, setAvatarColor] = useState("")
	const [comment, setComment] = useState('')

	const ref = useRef()

	const dispatch = useDispatch()

	const onChange = event => {
		const value = event.target.value
		setComment(value)
		localStorage.setItem('comment', value)
	}

	function submitComment(){
		if(comment.length <= 1){
			ref.current.style.border = "1px solid rgba(204, 0, 0, 0.6)"
		}
		else{
			ref.current.style.border = '1px solid rgba(155, 155, 155, 0.3)'
			dispatch(addComment({ body: comment, id: uuidv4(), user: { id: 'anonim', username: 'anonim' } }))
			localStorage.removeItem('comment')
			setComment("")
		}
	}

	useEffect(() => {
		const data = localStorage.getItem('comment')
		if (typeof data === "string"){
			setComment(data)
		}
		setAvatarColor(generateRandomColor())
	}, [])

	return(
		<div className="comment-item">
			<div className="comment-item__avatar-block">
				<div className="comment-item__avatar" style={{ 'border': `1px solid ${avatarColor}` }}>
					<span className="comment-item__avatar-text">a</span>
				</div>
			</div>
			<div className="comment-item__body-block">
				<p className="comment-item__nickname">anonim</p>
				<textarea ref={ref} value={comment} onChange={onChange} placeholder={'Leave your comment here...'}></textarea>
				<button className="comment-item__add-button" onClick={submitComment}>
					Add a comment
				</button>
			</div>
		</div>
	)
}

export default CommentForm