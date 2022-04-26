import React from 'react'
import { Content } from '../components/content/content'
import Features from '../components/features/features'
import MainBanner from '../components/main-banner/main-banner'
import { contentOne, contentTwo } from '../data/content-data'
import NavbarDefault from '../components/navbar/navbar-default'

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
