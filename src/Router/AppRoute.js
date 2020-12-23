////////////////////////////////////////////////////////////////////////////////////////////////////
// imports

// react
import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react'
import { connect } from "react-redux";

// components
import UserLogin from '../Components/UserLoginSignup/UserLogin'
import UserSignup from '../Components/UserLoginSignup/UserSignup'

// css
// import 'Assets/css/vendor/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Assets/CSS/style.css'

////////////////////////////////////////////////////////////////////////////////////////////////////
// Component

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // lifecycle

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // render

    render() {

        const { location } = this.props;

        //---------- views

        // if the pathname is app then redirect the user to browse route
        if (location.pathname === '/' || location.pathname === '/') {

            return (<Redirect to={"/users/login"} />);
        }
        return (

            <Fragment>
                <Switch>

                    <Route exact path={`/users/login`} component={UserLogin} />
                    <Route exact path={`/users/signup`} component={UserSignup} />

                    {/* <Route path={`/`} render={() => {
                        return < Suspense fallback={<Loader show_full_bg_fixed_spinner={true} />}>
                            <Home />
                        </Suspense>
                    }
                    } /> */}

                </Switch>

            </Fragment>
        );
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // helpers


}

////////////////////////////////////////////////////////////////////////////////////////////////////
// redux

let emptyObj = {}
const mapStateToProps = ({ store }) => {

    return emptyObj
};

export default App;


