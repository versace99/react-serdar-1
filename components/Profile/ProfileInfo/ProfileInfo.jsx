import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {

    return <div>
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87L52vGYzSUdfCDrCweb1ufqSCAmzP2i3Og&usqp=CAU'/>
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>

    </div>


}
export default ProfileInfo;