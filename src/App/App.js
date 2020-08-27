import React from 'react'
import Main from "../Main";
import Container from '@material-ui/core/Container';
import './App.scss'

const App = () => {
    return (
        <div>
            <Container fixed>
                <Main />
            </Container>
        </div>
    )
}

export default App