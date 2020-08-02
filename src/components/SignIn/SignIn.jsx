import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CutomButtom'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import './SignIn.scss'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password:''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email:'', password:''})
    } catch (error) {
      console.log(error)
    };
    

    this.setState({email: '', password: ''})
  }

  handleChange = e => {
    const { value, name } = e.target 
    
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput 
              name='email'
              value={this.state.email}
              handleChange={this.handleChange}
              label='email'
              required
            />
            
            <FormInput
              type='password'
              name='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
            <div className="buttons">
              <CustomButton type="submit" value='Submit Form'>Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In with Google{' '}</CustomButton>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
