import React from 'react';

function UserProfile(props) {
    return (
        <div>
          <h1>User</h1>

          <div className='userInfo'>Username: {props.userName}</div>
          <div className='userInfo'>Member Since: {props.memberSince}</div>
        </div>
    );
  }

export default UserProfile;