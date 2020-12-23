import React from 'react';
import styled from 'styled-components';


class TextInputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            error: ''
        };
    }

    componentDidMount() {
        if (this.props.value) {
            this.setState({ text: this.props.value })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.value !== prevProps.value) {
            this.setState({ text: this.props.value })
        }
    }

    render() {

        let {  name, classes, onChange, onKeyPress,
            type, show_clear_btn, placeholder, disabled } = this.props;

        return (
            <WrapUserInput>
                <Input style={{ margin: 0 }}
                    name={name}
                    id="text-input-filed"
                    type={type}
                    className={classes}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={(e) => this.handleOnChange(e)}
                    value={this.state.text || ''}
                    onKeyPress={(e) => { this.handleOnKeyup(e) }}
                />
                {
                    show_clear_btn &&
                    <p>*</p>
                }
            </WrapUserInput>
        );
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////    // helper
    // get value function for any component 

    getValue = () => {
        return this.state.text
    }

    getState = () => {
        return this.state
    }

    //for clear value on cross button 
    clearValue = () => {
        this.setState({ text: '' })
    }

    handleOnChange = (e) => {

        // add to state      
        this.setState({
            text: e.target.value
        })
        // call top onChange          
        if (this.props.onChange) {
            this.props.onChange(e, e.target.name);
        }
        if (this.props.clearError) {

            this.props.clearError()
        }
    }


    handleOnKeyup = (e) => {

        if (e.key === "Enter" || e.key === "enter") {

            this.props.onKeyPress && this.props.onKeyPress(this.state.text)
        }
    }
}

export default TextInputField;

const WrapUserInput = styled.div`
    position: relative;
    width: 100%; 
    display: flex;
`;

const Input = styled.input`
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid black;
`