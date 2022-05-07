import React from 'react'
import GlobalStyle from './component.style'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './pages/landing-page/main-page'
import Footer from './pages/landing-page/footer/footer'
import MainApp from './pages/speech-recognition/main-app'

const Component = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/app" exact>
                    <MainApp />
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Component
