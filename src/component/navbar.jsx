import {Menu} from 'antd'
import { useState } from 'react';
import {Link } from 'react-router-dom'
const Navbar = () => {
    const [active, setActive] = useState('intro')
    const handleClick = (e) => setActive(e.key);
    return (
        
        <Menu onClick={handleClick} selectedKeys={[active]} mode="horizontal" style={{backgroundColor: "#f8f8f8"}}> 
            <Menu.Item key="intro">
                 <a href="#intro">Giới thiệu</a>
            </Menu.Item>    

            <Menu.Item key="service">
                 <a href="#service">Dịch vụ</a>
            </Menu.Item>   

            <Menu.Item key="contact">
                 <a href="#contact"> Góp ý</a>
            </Menu.Item>  
            <Menu.Item key="footer">
                 <a href="#footer"> Liên hệ</a>
            </Menu.Item>  
        </Menu>
    )
}

export const SignHome = () => {
    const [active, setActive] = useState('home')
    const handleClick = (e) => setActive(e.key);
    return (
        
        <Menu onClick={handleClick} selectedKeys={[active]} mode="horizontal" style={{backgroundColor: "#f8f8f8"}}> 
            <Menu.Item key="home">
                 <Link to="/">Home</Link>
            </Menu.Item>    
            <Menu.Item key="sign">
                 <Link to="/sign">Sign In/Sign Up</Link>
            </Menu.Item>   
        </Menu>
    )
}

export default Navbar;