import React from 'react';
import styled from 'styled-components';


// define the collection page component
class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //lifecycle


    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //render

    render(){

        return(
            <LoadingContainer>
                <div className={'loader'} />
            </LoadingContainer>
        )
    }
}

export default Loader;

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`