import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Posts/Post';
import Message from "../../Dialogs/Message/Message";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => < Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        debugger;
       // props.addPost();
        props.dispatch({ type: 'ADD-POST' });
    }
let onPostChange = () =>{
    let text = newPostElement.current.value;
 // props.updateNewPostText(text);
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
}
    return (

        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement}
                               value={props.newPostText} /></div>
                <div>
                    <button onClick={addPost} >add post</button>
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