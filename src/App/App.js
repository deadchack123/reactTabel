import React, {useEffect} from 'react'
import Main from "../Main";
import Container from '@material-ui/core/Container';
import './App.scss';
import { fetchPost } from '../actions'
import { connect } from 'react-redux'

const App = ({fetchPost}) => {

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div>
            <Container fixed>
                <Main />
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    state: state
})

const mapDispatcherToProps = dispatch => ({
    fetchPost: () => dispatch(fetchPost())
})

export default connect(mapStateToProps, mapDispatcherToProps)(App)