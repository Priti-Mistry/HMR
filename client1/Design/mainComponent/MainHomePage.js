import { Flex, Layout } from 'antd'
import React from 'react'
import Navbar from '../Navbar'
import SideMenu from '../sidebar/SideMenu'
import './style.css'
import HomePageContent from '../homePageContent/HomePageContent'

function MainHomePage() {
    return (

        <div className="page">

            <Layout style={{ backgroundColor: 'gray' }}>
                <Navbar />
            </Layout>

            <div className='content-container'>
                <Flex gap={0} className='mainPage' justify='flex-start' >
                        <SideMenu />
                        <HomePageContent />
                </Flex>
            </div>
        </div>

    )
}

export default MainHomePage