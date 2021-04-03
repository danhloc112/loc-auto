import {Col} from 'antd'
// import locAuto from "../Loc-auto.png"
import Bounce from 'react-reveal/Bounce';
import {useState } from 'react';

const Service = (props) => {
    const [show, setShow] = useState(false)
    window.addEventListener('scroll', function() {
        setShow(true)
      });
    const {title, delay, url} = props
    return (
        <Col lg={6} md={12} xs={12}>
            <Bounce duration={1500} bottom when={show} delay={delay}>
            <div className="service_div-item">
                 <img src={url} alt="Loc Auto" /> 
                <h2>{title}</h2>
            </div>
            </Bounce>
        </Col>
    )
}
export default Service;