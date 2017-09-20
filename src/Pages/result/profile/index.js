import React , {PropTypes} from 'react';
import './index.css'

const Profile = ({ age=0 , name='unknown' , bio='Null' , img="" }) =>

    <div className="bodyClass">
        <h1 headerClass="center-header" >Your lucky to be</h1>
        <div className="profile-box">
            <h1>{name}</h1>
            <h2>Age: {age}</h2>
            <h2>Bio: {bio}</h2>
            <img src={img} />
            <br />
        </div>
    </div>


Profile.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    bio: PropTypes.string,
    img: PropTypes.string
};
export default Profile;