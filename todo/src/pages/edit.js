import React from 'react'
import ProfileForm from '../../components/module/ProfileForm'
import connectDB from '../../utils/connectDB'
import { getServerSession } from 'next-auth';

const editPage = async() => {
 

  return (
    <>
     <ProfileForm />
    <h1>edit</h1>
    </>
  )
}

export default editPage
