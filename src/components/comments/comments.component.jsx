import React, { useState } from 'react';
import './comments.scss'

const Comments = (props) => {
    const { comments } = props;
    const [isCommentOpen, setCommentInput ] = useState(false)

    const toggleCommentInput = () =>{
        setCommentInput(!isCommentOpen)
    }

    return (
        <>
            {comments?.length ? <div className="title">Comments</div> : null}
            {comments?.map((val, key) => {
                return (
                    <div className="description-cls">
                        <div className="info-cls">
                            <span className="author"> {val.author}</span>
                            <span className="break-word"> {val.timestamp}</span>
                        </div>
                        <span className="comment-cls"> {val.content}</span>
                        <div className="reactions-comments">
                            <div className="like-dislike">
                                <span>
                                <img src={require('../../assets/icons/thumbs-up.png')} class="reaction-like" />
                                </span>
                                <span>1</span>
                            </div>
                            <div className="like-dislike">
                                <span>
                                <img src={require('../../assets/icons/thumbs-down.png')} class="reaction-like" />
                                </span>
                                <span>0</span>
                            </div>
                            <div className='reply-cls'>
                               <button className='reply-btn' onClick={toggleCommentInput}>Reply</button>
                            </div>
                        </div>
                        { isCommentOpen ?  
                        <form className="comment-form">
                            <input type="text" placeholder="Write a reply..." />
                            <button type="submit">post</button>
                        </form>
                         : null}
                    </div>
                )
            })}
        </>
    );
}

export default Comments;