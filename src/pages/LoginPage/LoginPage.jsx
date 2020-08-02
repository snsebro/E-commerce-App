import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import './LoginPage.scss'

export default function LoginPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}
