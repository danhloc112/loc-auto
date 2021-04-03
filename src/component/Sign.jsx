import { Col, Row, Form, Input, Button } from "antd"
import { useState } from "react";
import Fade from 'react-reveal/Fade';
import login from '../image/login.png'
import signUp from '../image/signup.png'
export const Sign = () => {
    const [showLoginIn, setShowLogIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const handleClick =  () => {
        if(showLoginIn) {
            setShowLogIn(false)
            setTimeout(() => {
                setShowSignUp(true)
            }, 500)
        }
        else {
            
            setShowSignUp(false)
            setTimeout(() => {
                setShowLogIn(true)
            },500)
        }
    }
    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 16
        } 
    }
    const layout2 = {
        labelCol: {
            span: 10
        },
        wrapperCol: {
            span: 14
        } 
    }
    return (
        <>  
            <Row className="sign_main" >
            {/* <Button onClick={handleClick}>Click</Button> */}
                <Col lg={12} md={24} className="sign_div">
                        <Fade left big when={showLoginIn}>
                            <div className="sign_in-div">
                            </div>
                        </Fade>
                        <Fade left delay={300} big when={showLoginIn}>
                            <img src={login} alt="login" className="login_img"/>
                        </Fade>
                        <Fade left big when={showLoginIn} delay={150}>
                            <div className="sign_in">
                                <Row >
                                    <Col >
                                        <div className="sign_in-form">
                                        <Form {...layout} className>
                                            <Form.Item
                                                name="username"
                                                label="Username"
                                                rules = {[
                                                    {required: true,
                                                    message: "Vui lòng nhập Username!"}
                                                ]}
                                            >
                                                <Input placeholder="Username"/>
                                            </Form.Item>
                                            <Form.Item
                                                name="password"
                                                label="Password"
                                                rules = {[
                                                    {required: true,
                                                    message: "Vui lòng nhập Password!"}
                                                ]}
                                            >
                                                <Input.Password placeholder="Password"/>
                                            </Form.Item>
                                            <div className="extra_btn">
                                                <Button type="link" onClick={handleClick}>Đăng ký!</Button>
                                                <Button type="link" >Quên mật khẩu</Button>
                                            </div>
                                            <Form.Item>
                                                    <Button type="primary" shape="round" onClick={handleClick} className="sign_in_btn">Sign In</Button>
                                            </Form.Item>
                                        </Form>
                                        </div>
                                    </Col>       
                                </Row>  
                            </div>
                        </Fade>
                </Col>
                
                <Col lg={12} md={24} xs={24} className="sign_div">
                        <Fade right big when={showSignUp}>
                            <div className="sign_up-div">
                            </div>
                        </Fade>
                        
                        <Fade right delay={300} big when={showSignUp}>
                            <img src={signUp} alt="sign up" className="sign_up_img"/>
                        </Fade>
                        <Fade right big when={showSignUp} delay={150}>
                            <div className="sign_up">
                                <Row >
                                    <Col >
                                        <div className="sign_up-form">
                                        <Form {...layout2} className>
                                            <Form.Item
                                                name="username"
                                                label="Username"
                                                rules = {[
                                                    {required: true,
                                                    message: "Vui lòng nhập Username!"}
                                                ]}
                                            >
                                                <Input placeholder="Username"/>
                                            </Form.Item>
                                            <Form.Item
                                                name="email"
                                                label="E-mail"
                                                rules={[
                                                {
                                                    type: 'email',
                                                    message: 'Vui lòng nhập đúng email',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập Email!',
                                                },
                                                ]}
                                            >
                                                <Input placeholder="Email"/>
                                            </Form.Item>
                                            <Form.Item
                                                name="password"
                                                label="Password"
                                                rules = {[
                                                    {required: true,
                                                    message: "Vui lòng nhập Password!"}
                                                ]}
                                            >
                                                <Input.Password placeholder="Password"/>
                                            </Form.Item>
                                            <Form.Item
                                                name="confirm"
                                                label="Confirm Password"
                                                dependencies={['password']}
                                                hasFeedback
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập đúng password!',
                                                },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }

                                                    return Promise.reject('Password không khớp!');
                                                    },
                                                }),
                                                ]}
                                            >
                                                <Input.Password placeholder="Confirm password"/>
                                            </Form.Item>
                                            <div className="extra_btn">
                                                <p>Đã có tài khoản?</p>
                                                <Button type="link" onClick={handleClick}>Đăng nhập</Button>
                                                {/* <Button type="link" >Quên mật khẩu</Button> */}
                                            </div>
                                            <Form.Item>
                                                    <Button type="primary" shape="round" onClick={handleClick} className="sign_up_btn">Sign Up</Button>
                                            </Form.Item>
                                        </Form>
                                        </div>
                                    </Col>       
                                </Row>  
                            </div>
                        </Fade>
                        
                </Col>
                
                
                
            </Row>

            
        </>
        
    )   
}