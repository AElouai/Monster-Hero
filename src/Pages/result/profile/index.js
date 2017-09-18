import React , {PropTypes} from 'react';
import './index.css'

const Profile = ({ age=0 , name='unknown' , bio='Null' , img="" }) =>
    <div className="profile-box">
        <h1>{name}</h1>
        <h2>Age: {age}</h2>
        <h2>Bio: {bio}</h2>
        <img src={img} height="100%" width="95%"/>
        <br />
    </div>

Profile.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    bio: PropTypes.string,
    img: PropTypes.string
};
export default Profile;