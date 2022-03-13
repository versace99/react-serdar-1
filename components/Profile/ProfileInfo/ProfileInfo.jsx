import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {

    return <div>
        <div>
            <img
                src='https://img.freepik.com/free-psd/logo-mockup_35913-2089.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>

    </div>


}
export default ProfileInfo;