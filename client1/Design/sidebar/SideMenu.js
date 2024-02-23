// import React, { useState } from 'react';
// import { Flex, Layout, Menu } from 'antd';
// import { HomeOutlined, LineChartOutlined, SaveOutlined, StarOutlined } from '@ant-design/icons';
// import './style.css';
// import Search from 'antd/es/input/Search';

// const { Sider } = Layout;
// const { SubMenu } = Menu;

// function SideMenu() {
//     const [openKeys, setOpenKeys] = useState([]);

//     const handleClick = (e) => {
//         const key = e.key;
//         setOpenKeys(openKeys.includes(key) ? [] : [key]); // Toggle submenu
//     };

//     return (
//         <Sider className='sider'>
//             <p className='title'>Reports Insights</p>
//             <div>
//                 <Menu>
//                     <Menu.Item key='home' className='menu-item'>
//                         <HomeOutlined style={{ fontSize: 20 }} className='icon-style' />
//                         Home
//                     </Menu.Item>

//                     <SubMenu
//                         key="template"
//                         title={
//                             <span className="submenu-title-wrapper">
//                                 <LineChartOutlined style={{ fontSize: 20 }} className="icon-style" />
//                                 Template
//                             </span>
//                         }
//                         onTitleClick={handleClick}
//                         openKeys={openKeys}
//                     >
//                         <Menu.Item key="search">
//                             <Flex justify='space-between'>
//                                 <Search
//                                     placeholder="input search text"
//                                     className='search-container'
//                                 />
//                                 <div>
//                                     <StarOutlined style={{ fontSize: 20 }} className='star-style' />
//                                 </div>
//                             </Flex>
//                         </Menu.Item>

//                         <SubMenu
//                             key='reservationReport'
//                             title='Reservation Report'
//                             style={{ display: openKeys.includes('template') ? 'block' : 'none' }}
//                         >
//                             <Menu.Item key="arrivalList">Arrival List</Menu.Item>
//                             <Menu.Item key="cancelledReservation">Cancelled Reservation</Menu.Item>
//                             <Menu.Item key="countryWiseStatistics">Country Wise Reservation Statistics</Menu.Item>
//                             <Menu.Item key="noShowReservation">No Show Reservation</Menu.Item>
//                         </SubMenu>
//                     </SubMenu>

//                     <Menu.Item key='customReport' className='menu-item'>
//                         <SaveOutlined style={{ fontSize: 20 }} className='icon-style' />
//                         Custom Report
//                     </Menu.Item>
//                 </Menu>
//             </div>
//         </Sider>
//     )
// }

// export default SideMenu;
























import React, { useState } from 'react';
import { Flex, Layout, Menu } from 'antd';
import { HomeOutlined, LineChartOutlined, SaveOutlined, StarOutlined } from '@ant-design/icons';
import './style.css';
import Search from 'antd/es/input/Search';

const { Sider } = Layout;
const { SubMenu } = Menu;

function getItem(label, key,children, type) {
    return {
        label,
        key,
        children,
        type,
    };
}

const items = [
    getItem('Reservation Report', 'reservation_report',[
        getItem('Arrival List'),
        getItem('Cancelled Reservation'),
        getItem('Country Wise Reservation Statistics'),
        getItem('No Show Reservation')
    ])
];

function SideMenu() {
    const [openKeys, setOpenKeys] = useState([]);

    const handleClick = (e) => {
        const key = e.key;
        const currentIndex = openKeys.indexOf(key);
        const newOpenKeys = [...openKeys];
        if (currentIndex === -1) {
            newOpenKeys.push(key);
        } else {
            newOpenKeys.splice(currentIndex, 1);
        }
        setOpenKeys(newOpenKeys);
    };
    return (
        // <div className='report'>
        <Sider className='sider'>
            <p className='title'>Reports Insights</p>
            <div>
                <Menu>
                    <Menu.Item key='home' className='menu-item'>
                        <HomeOutlined style={{ fontSize: 20 }} className='icon-style' />
                        Home
                    </Menu.Item>

                    <SubMenu
                        key="template"
                        title={
                            <span className="submenu-title-wrapper">
                                <LineChartOutlined style={{ fontSize: 20 }} className="icon-style" />
                                Template
                            </span>
                        }
                        onTitleClick={handleClick}
                    >
                        <Menu.Item key="search">
                            <Flex justify='space-between'>
                                <Search
                                    placeholder="input search text"
                                    className='search-container'
                                />
                                <div>
                                    <StarOutlined style={{ fontSize: 20 }} className='star-style' />
                                </div>
                            </Flex>
                        </Menu.Item>
                        <Menu
                            mode="inline"
                            style={{
                                float:'left'
                            }}
                            items={items}
                        >

                        </Menu>

                        {/* <SubMenu title='Reservation Report' vertical>  
                            <Menu.Item key="sub1-2" style={{backgroundColor:'RGB(236, 243, 248)',color:'black'}}>
                                Arrival List
                            </Menu.Item>
                            <Menu.Item key="sub1-2" style={{backgroundColor:'RGB(236, 243, 248)',color:'black'}}>
                                Cancelled Reservation
                            </Menu.Item>
                            <Menu.Item key="sub1-2" style={{backgroundColor:'RGB(236, 243, 248)',color:'black'}}>
                                Country Wise Reservation Statistics
                            </Menu.Item>
                            <Menu.Item key="sub1-2" style={{backgroundColor:'RGB(236, 243, 248)',color:'black'}}>
                                No Show Reservation
                            </Menu.Item>
                       </SubMenu> */}
                    </SubMenu>



                    {/* <Menu.Item key={'template'} className='menu-item'>
                        <LineChartOutlined style={{fontSize:20}} className='icon-style'/>
                        Template
                </Menu.Item> */}
                    <Menu.Item key='customReport' className='menu-item'>
                        <SaveOutlined style={{ fontSize: 20 }} className='icon-style' />
                        Custom Report
                    </Menu.Item>
                </Menu>
            </div>
        </Sider>
        // </div>
    )
}

export default SideMenu