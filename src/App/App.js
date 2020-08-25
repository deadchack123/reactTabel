import React from 'react'
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Container from '@material-ui/core/Container';
import './App.scss'

const App = () => {
    return (
        <div>
            <Container fixed>
                <Header />
                <Main />
                <Footer />
            </Container>
        </div>
    )
}

export default App