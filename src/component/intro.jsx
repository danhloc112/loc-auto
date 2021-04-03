import { Col, Row } from 'antd';
// import { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';
import locAuto from "../Loc-auto.png"
import BookBtn from './book'
const Intro = () => {
    // const [show, setShow] = useState(false)
    // window.addEventListener('scroll', function() {
    //     setShow(true)
    //   });
    return (
        <Row gutter={[8,16]} className="intro_div" >
            <Col lg={12} md={12} xs={24} className="intro_div-left">
                <Fade duration={1500} left >
                    <img src={locAuto} alt="Loc Auto" className="intro_div-image" id="intro"/>
                </Fade>
            </Col>

            <Col lg={12} md={12} xs={24} className="intro_div-right">
                <Zoom  duration={1500} right cascade >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. </p>  
                </Zoom>
                <Fade duration={1500} right >
                    <BookBtn />
                </Fade>
            </Col>
            
            
        </Row>
    )
}

export default Intro;