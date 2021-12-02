import React, { useEffect, useState } from 'react'
import './comment.css'
import MyPic from '../assets/Profile1.jpg'
import useSubscription from '../hooks/useSubscriptionComments'
import useInsertComment from '../hooks/useInsertComment'

export default function Comment(props) {

    const event_ID = props.event_id
    const {CommentData} = useSubscription(event_ID)
    const [CommentList, setCommentList] = useState([])


    const {insertComment, loadingInsert} = useInsertComment()
    const [inputComment, setinputComment] = useState('')

    // useEffect(() => {
    //     CommentEvent({ 
    //         variables: {
    //             event_id: event_ID
    //         }
    //     })
    // }, [])

    useEffect(() => {
        setCommentList(CommentData?.comments)
    }, [CommentData])

    if (loadingInsert){
        return <h3>Loading...</h3>
    }

    const onChangeComment = (e) => {
        e.preventDefault()
        setinputComment(
            e.target.value
        )
    }

    const onClickComment = (e) => {
        e.preventDefault()
        insertComment({
            variables:{
                event_id: event_ID,
                user_id: 1,
                comment: inputComment
                }
        })
    }

    return (
        <div>
            {console.log('body Data',CommentData)}
            
            <div className="comment-container me-5">
                <h3>Comment</h3>
                <hr/>
                {CommentList?.map(value => {return(
                    <div key={value.id} className="user d-flex  my-3">
                        <img className="profile-img me-3" src={MyPic} alt=""/>
                        <div className="comment">
                            <p className="name mb-1">{value.user.name}</p>
                            <p>{value.comment}</p>
                        </div>
                    </div>
                )})}
                
            </div>
            <div className="comment-form ms-5 ps-5">
                <form action="" className="d-flex">
                    <textarea className="form-control me-2" name="comments" placeholder="Comment Here..." id="" cols="15" rows="3" onChange={onChangeComment}></textarea>
                    <div><button className="btn btn-secondary" onClick={onClickComment}>Send</button></div>
                </form>
            </div>
        </div>
    )
}
