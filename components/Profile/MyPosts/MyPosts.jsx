import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Posts/Post';
import Message from "../../Dialogs/Message/Message";

const MyPosts = (props) => {

    let postsElements = props.state.posts.map(post => < Post message={post.message} likesCount={post.likesCount}/>);
    return (

        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button >add post</button>
                </div>
                <div>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>

                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;