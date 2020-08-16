import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {connect} from 'react-redux'
import Homepage from "./pages/Hompage/Homepage";
import Shop from "./pages/Shop/Shop";
import "./App.css";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.actions'

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({         
              id: snapShot.id,
              ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispath => ({
  setCurrentUser: user => dispath(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
