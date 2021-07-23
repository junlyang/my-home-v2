import React from 'react';
import Link from 'next/link'
import { Input, Menu, Button } from 'antd';
const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="1"><Link href="/"><a>홈</a></Link></Menu.Item>
                <Menu.Item key="2"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="3">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>
            <Link href="/signup"><a><Button>SignUp</Button></a></Link>
            {children}
        </div>
        )
}

export default AppLayout;