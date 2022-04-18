import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Posts/Post';
import Message from "../../Dialogs/Message/Message";


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => < Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();


    let onAddPost = () => {
         props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
         props.updateNewPostText(text);
    }
    return (

        <div className={s.postsBlock}>

            <h3>My posts </h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement}
                               value={props.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}>add post</button>
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