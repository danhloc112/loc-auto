import {Col, Row, Form, Input, Button, Modal, Result} from 'antd'
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
const {TextArea} = Input;
const Contact = () => {
    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 14
        }
    }
    const [showNotify, setShowNotify] = useState(false)
    const handleClick = () => {
        setShowNotify(true)
    }
    const turnOffNotify = () => {
        setShowNotify(false)
    }
    return (
        <Col className="contact-main" span={24}>
            <Fade duration={1000} left>
                <div className="contact-form">
                    <Row>
                        <Col span={24}>
                            <Form {...layout}>
                                <Form.Item
                                    // {...layout}
                                    name="name"
                                    label="Họ tên"
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    // {...layout}
                                    name="phone"
                                    label="Email"
                                    rules={[
                                        {required: true,
                                        message: "Vui lòng nhập email!"},
                                        {
                                            pattern: /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                            message:
                                            'Vui lòng nhập đúng địa chỉ email!',
                                        },
                                    ]}
                                >
                                    <Input type="email" />
                                </Form.Item>
                                <Form.Item 
                                    
                                    name="context"
                                    label="Lời nhắn"
                                    rules={[
                                        {required: true,
                                        message: "Vui lòng nhập nội dung"},
                                    ]}
                                >
                                    <TextArea placeholder="Nội dung tin nhắn" showCount maxLength={200}/>
                                </Form.Item>
                            

                                    <Button type="primary" shape="round" size={'large'} className="send_btn" onClick={handleClick}>
                                        <strong>Gửi</strong>
                                    </Button>
                                
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Fade>
            <Fade duration={1000} delay={100} right>
                <div className="contact-div" id="contact"></div>
            </Fade>
            <Modal
                title="Thông báo"
                visible={showNotify}
                onOk={turnOffNotify}
                onCancel={turnOffNotify}
            >   
                <Result 
                    status="success"
                    title="Đã gửi lời nhắn thành công"
                />
            </Modal>
            
        </Col>
    )
}
export default Contact;