//////////////////////////////////////////////////////////////////////////////////////////////////////
//

// react 
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components'

// components
import TextInputField from '../Inputs/TextInputField'
import Loader from '../HelperComponents/Loader'

// images
import Earth from '../../Assets/Images/Earth'
import EarthJpg from '../../Assets/Images/EarthJpg.jpeg'

// redux
import { requstServerDataGen } from '../../Redux/Action'
import styled from "styled-components";

// define the collection page component
class UserSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //lifecycle

    componentDidUpdate(prevProps, prevState) {

    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //render

    render() {

        let { loading } = this.state

        return (
            <Fragment>
                <div className={'top-container'}>
                    <HeaderContainer>
                        <Title size={22} height={25} weight={true}>SCM Global Enterprise</Title>
                        <LinkContainer>
                            <Link>Services</Link>
                            <Link>Blob</Link>
                            <Link>Pricing</Link>
                            <Link>Contanct Us</Link>
                            <Link color={'#000'}>Language</Link>
                            <Link>: English</Link>
                        </LinkContainer>
                    </HeaderContainer>
                    <div className={'content-container'}>
                        <ImageContainer url={EarthJpg}>
                            <SignupContainer>
                                <SignUpSection>
                                    <Title color={'#FF0000'} size={18} height={20} wrap={'wrap'}>Register to purchase new or activate prepaid account</Title>

                                    <div style={{ marginBottom: 10, marginTop: 10 }}>
                                        <Title size={10} height={20} weight={false}>First Name</Title>
                                        <TextInputField />
                                    </div>
                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={10} height={20} weight={false}>Last Name</Title>
                                        <TextInputField />
                                    </div>

                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={10} height={20} weight={false}>Email</Title>
                                        <TextInputField />
                                    </div>

                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={10} height={20} weight={false}>Password</Title>
                                        <TextInputField />
                                    </div>

                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={10} height={20} weight={false}>Confirm Password</Title>
                                        <TextInputField />
                                    </div>

                                    <ButtonContainer>
                                        <div style={{cursor: 'pointer'}}>
                                            <Title onClick={() => { this.props.history.push('/users/login') }}>Login</Title>
                                        </div>
                                        <Button onClick={() => { this.handleSignup() }}>Sign Up</Button>
                                    </ButtonContainer>

                                </SignUpSection>

                                {
                                    loading &&
                                    <LoadingContainer>
                                        <Loader />
                                    </LoadingContainer>
                                }

                                <BrowserSection>
                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={25} height={30} weight={false}>Browser Support</Title>
                                    </div>
                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={10} height={20} weight={false}>Google Chrome</Title>
                                    </div>
                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={10} height={20} weight={false}>Mozila Firefox</Title>
                                    </div>
                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={10} height={20} weight={false}>Apple Safari</Title>
                                    </div>
                                </BrowserSection>
                            </SignupContainer>
                        </ImageContainer>
                    </div>
                </div>
            </Fragment>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // helper's : user action

     // handle login
     handleSignup = () => {

        let email = this.email_input.current && this.email_input.current.getValue()
        let Password = this.password_input.current && this.password_input.current.getValue()

    }


}
////////////////////////////////////////////////////////////////////////////////////////////////////
//Redux

let emptyObj = {}
const mapStateToProps = ({ store }) => {

    return {
        emptyObj
    };
};


export default connect(mapStateToProps, { requstServerDataGen })(withRouter(UserSignup));

////////////////////////////////////////////////////////////////////////////////////////////////////
// css


const HeaderContainer = Styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 50px;
    padding : 0px 4px 0px 35px;
    justify-content: space-around;
`
const LinkContainer = Styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    height: 50px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
       display : none;
    }
`
const Link = Styled.a`
    margin : 0px 8px;
    padding : 0px;
    color:  ${props => props.color ? props.color : '#FF0000'};
    font-size: ${props => props.size ? props.size : 16}px;
    font-weight: ${props => props.weight ? 'bold' : ''};
    line-height: ${props => props.height ? props.height : 22}px;
    white-space: nowrap;
`

const ImageContainer = Styled.div`
    background-image: url(${props => props.url});
    background-color: #000;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`
const Title = Styled.p`
    margin : 0px;
    padding : 0px;
    color:  ${props => props.color ? props.color : '#000'};
    font-size: ${props => props.size ? props.size : 20}px;
    font-weight: ${props => props.weight ? 'bold' : ''};
    line-height: ${props => props.height ? props.height : 22}px;
    white-space: ${props => props.wrap === 'wrap' ? '' : 'nowrap'};
    overflow: hidden;
    text-overflow: ellipsis;
`
const SignupContainer = Styled.div`
    margin : 40px;
    background: aliceblue;
    padding: 20px;
    max-width: ${window.innerWidth - 20}px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
       display : none;
    }
`
const SignUpSection = Styled.div`
`
const BrowserSection = Styled.div`
`

const ButtonContainer = Styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evently;
`
const Button = Styled.button`
    margin-left: 10px;
    background: #000;
    color: #fff;
    border: 0px;
    padding : 5px;
`

const LoadingContainer = Styled.div`
    margin-top: 20px;
    margin-buttom: 20px;
`