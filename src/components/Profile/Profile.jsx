import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import addPost from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContanier";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} /></div>
}
export default Profile;