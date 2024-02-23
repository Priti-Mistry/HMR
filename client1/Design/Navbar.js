import React, { useState } from 'react'
import { Layout, Flex, Space } from 'antd';
import { Image, Dropdown, Drawer, DrawerProps } from 'antd'
import { InfoCircleOutlined, MenuOutlined } from '@ant-design/icons'
import Search from 'antd/es/input/Search';
const { Header, Footer, Sider, Content } = Layout;



function Navbar() {

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header style={{ backgroundColor: 'white', paddingLeft: 20, margin: 0, alignItems: 'center', justifyContent: 'center' }}>
        <MenuOutlined style={{ fontSize: '20px' }}
          menu={{

          }}
          trigger={['click']}
          onClick={showDrawer}
        />
        <Drawer onClose={onClose} open={open} placement={placement}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Image
          style={{ marginLeft: 15 }}
          src='https://static.ipms247.com/oem_images/frontoffice/eZee_Absolute_1.png'
          preview={false}
        />
        <Space direction='vertical'>
          <Search style={{ paddingTop: 20, paddingLeft: 25 }} placeholder="input search text" enterButton />
        </Space>
        <InfoCircleOutlined style={{ color: 'blue', paddingLeft: 10 }} />
      </Header>
    </>
  )
}

export default Navbar