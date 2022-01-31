import React, { useState, useEffect, useCallback } from 'react'
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default function Navigation() {
  const [current, setCurrent] = useState('mail')

  const handleClick = useCallback((e: any) => {
    setCurrent(e.key);
  }, []);
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" >
        {/* <Menu.Item key="mail" icon={<MailOutlined />}> */}
        Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled >
        {/* <Menu.Item key="app" disabled icon={<AppstoreOutlined />}> */}
        Navigation Two
      </Menu.Item>
      <SubMenu key="SubMenu" title="Navigation Three - Submenu">
        {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu"> */}
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  )
}
// export default function Navigation() {
//   return (<div>我是导航</div>
//   )
// }