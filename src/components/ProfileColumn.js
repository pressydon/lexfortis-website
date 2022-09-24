import React from 'react';
import './ProfileColumn.css'

function ProfileColumn({biography, profileName, profileImage}) {
  return (
    <div className='profile-column-container'>
      <img src={profileImage} />
      <h2 className='profile-name'>{profileName}</h2>
      <h4 className='partner'>PARTNER</h4>
      <p className='biography'> {biography}</p>
    </div>
  )
}

export default ProfileColumn
