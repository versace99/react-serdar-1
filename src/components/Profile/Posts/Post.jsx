import React from 'react';
import s from './Post.module.css';


const Post = (props) =>{
     
return (

     <div className = {s.item}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png'/>
      {props.message}     
<span> </span>{props.likesCount}

     </div >
)
}
export default Post ;