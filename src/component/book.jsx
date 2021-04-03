import {Button, Modal, Form, Input, DatePicker, Cascader, message, Result} from 'antd'
import { useState } from 'react'
import {option} from "./car"
const {RangePicker} = DatePicker
const url ="https://my-json-server.typicode.com/danhloc112/test-json-sv/booking"

const BookBtn = () => {
    const [visible, setVisible] = useState(false);

    const [confirmLoading, setConfirmLoading] = useState(false)
    const [notify, setNotify] = useState('')
    const [showNotify, setShowNotify] = useState(false)

   
    const handleCancel = () => {
        setVisible(false)
    }

    const handleOk = async (value) => {
        onFinish()
        setConfirmLoading(true);
        await postAPI(value)
        setVisible(false);
        setConfirmLoading(false)
    }
    const handleClick = () => {
        setVisible(true)
    }
    const turnOffNotify = () => {
        setShowNotify(false)
    }
    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 14
        }
    }
    
    const onFinish = (values) => {
        console.log(values);
    }

    const postAPI = async (value) => {
        try {
            
            await fetch(url, {
                method: 'post',
                body: JSON.stringify({
                    name: value.name,
                    phone: value.phone,
                    car: value.car,
                    date: value.date
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
            }).then( res => res.json())
            .then(res => {
                console.log(res);
                if(res !== undefined) {
                    setVisible(false)
                    setShowNotify(true);
                    setNotify(
                        `Quý khách ${res.name} số điện thoại ${res.phone} đã đặt xe ${res.car[0]} ${res.car[1]} đời ${res.car[2]} từ ngày ${res.date.start} đến ${res.date.end}.`
                    )
                }
                else {
                    message.warning('Vui lòng nhập lại!')
                }
            })
        }
        catch(e) {
            console.log(e);
        }
    }
    return (
        <>
            <Button type="primary" shape="round" size={'large'} className="sub_btn" onClick={handleClick}>
                <strong>Đặt xe ngay!</strong>
            </Button>
            <Modal
                title="Điền các thông tin dưới đây để đặt xe"
                visible={visible}
                confirmLoading={confirmLoading}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form onFinish={onFinish}>
                    <Form.Item
                        {...layout}
                        name="name"
                        label="Họ tên"
                        rules={[
                            {required: true,
                            message: "Vui lòng nhập họ tên!"}
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        {...layout}
                        name="phone"
                        label="Số điện thoại"
                        rules={[
                            {required: true,
                            message: "Vui lòng nhập số điện thoại!"},
                            {
                                pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                message:
                                'Vui lòng nhập đúng số điện thoại!',
                            },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        {...layout}
                        name="car"
                        label="Chọn xe"
                        rules={[
                            {required: true,
                            message: "Vui lòng chọn xe"}
                        ]}
                    >
                        <Cascader options={option} placeholder="Vui lòng chọn xe!"/>

                    </Form.Item>
                    <Form.Item
                        {...layout}
                        name="date"
                        label="Chọn khoảng thời gian thuê"
                        rules={[
                            {required: true,
                            message: "Vui lòng chọn khoảng thời gian!"}
                        ]}
                    >
                        <RangePicker />

                    </Form.Item>
                </Form>
                {/* <p>test...................</p> */}
            </Modal>
            <Modal
                title="Thông báo"
                visible={showNotify}
                onOk={turnOffNotify}
                onCancel={turnOffNotify}
            >   
                <Result 
                    status="success"
                    title="Cảm ơn quý khách đã sử dụng dịch vụ!"
                    subTitle={notify}
                />
            </Modal>
        </>
    )
}
export default BookBtn;