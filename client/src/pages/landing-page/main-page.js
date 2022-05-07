import React from 'react'
import { Content } from './content/content'
import Features from './features/features'
import MainBanner from './main-banner/main-banner'
import { contentOne, contentTwo } from '../../data/content-data'
import NavbarDefault from './navbar/navbar-default'

const MainPage = () => {
    return (
        <>
            <NavbarDefault />
            <MainBanner />
            <Features />
            <Content {...contentOne} />
            <Content {...contentTwo} />
        </>
    )
}

export default MainPage
