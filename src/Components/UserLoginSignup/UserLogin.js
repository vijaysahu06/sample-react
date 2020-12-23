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
class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.email_input = React.createRef()
        this.password_input = React.createRef()
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

        let {loading} = this.state

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
                            {/* <Image src={EarthJpg} /> */}
                            <LoginContainer>
                                <LoginView>
                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={18} height={20} weight={true}>
                                            Login
                                    </Title>
                                    </div>
                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={10} height={20} weight={false}>Email</Title>
                                        <TextInputField placeholder={'Email'} ref={this.email_input} />
                                    </div>
                                    <div style={{ marginBottom: 10 }}>
                                        <Title size={10} height={20} weight={false}>Password</Title>
                                        <TextInputField placeholder={'Password'} ref={this.password_input} />
                                    </div>
                                    <CheckBoxContainer>
                                        <CheckBox name={'rememmber_me'} type={'checkbox'} onChange={this.handleCheckBox} />
                                        <Label>Remember me</Label>
                                    </CheckBoxContainer>
                                    <ButtonContainer>
                                        <Button onClick={() => { this.handleLogin() }}>Login</Button>
                                        <div style={{cursor: 'pointer'}}>
                                            <Title onClick={() => { this.props.history.push('/users/signup') }}>Sign Up</Title>
                                        </div>
                                    </ButtonContainer>
                                    {
                                        loading &&
                                        <LoadingContainer>
                                            <Loader />
                                        </LoadingContainer>
                                    }
                                    <div style={{ marginTop: 10 }}>
                                        <Title size={10} height={24} weight={false}>Forget Password</Title>
                                    </div>
                                </LoginView>
                                <div style={{ marginTop: 15, background: '#ebc934', padding: 15 }}>
                                    <NoticeContainer >
                                        <Title size={22} height={25} weight={true}>
                                            Notice
                                    </Title>
                                    </NoticeContainer>
                                </div>
                            </LoginContainer>
                        </ImageContainer>
                    </div>
                </div>
            </Fragment>
        )
    }

    ////////////////////////////////////////////////////////////////////////////////////////////
    // helper's : user's action

    // handle login
    handleLogin = () => {

        let email = this.email_input.current && this.email_input.current.getValue()
        let Password = this.password_input.current && this.password_input.current.getValue()

    }

    // handle remember me check box
    handleCheckBox = (e) => {

        this.setState({
            [e.target.name]: e.target.checked
        })
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


export default connect(mapStateToProps, { requstServerDataGen })(withRouter(UserLogin));

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
const LoginContainer = Styled.div`
    margin : 40px;
    background: aliceblue;
    padding: 20px;
    max-width: ${window.innerWidth - 20}px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
    display : none;
    }
`
const LoginView = Styled.div`
    background-color: aliceblue;
    padding: 15px;
`
const Title = Styled.p`
    margin : 0px;
    padding : 0px;
    color: #000;
    font-size: ${props => props.size ? props.size : 20}px;
    font-weight: ${props => props.weight ? 'bold' : ''};
    line-height: ${props => props.height ? props.height : 22}px;
    white-space: nowrap;
`
const NoticeContainer = Styled.div`
    text-align: center;
    min-height: 200px;
`
const Image = Styled.img`
    width: 100%;
    height: 100%;
`

const CheckBoxContainer = Styled.div`
    display: flex;
    align-items: center;
`
const CheckBox = Styled.input`

  &:checked{
    background: blue;
  }

`
const Label = Styled.label`
  font-size: 15px;
  padding: 0;
  margin: 0px 10px;
`

const ButtonContainer = Styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evently;
`
const Button = Styled.button`
    margin: 10px;
    background: #000;
    color: #fff;
    border: 0px;
    padding : 5px;
`
const LoadingContainer = Styled.div`
    margin-top: 20px;
    margin-buttom: 20px;
`