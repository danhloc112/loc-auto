import Slideshow from './sildeshow';
import Intro from './intro';
import BookBtn from './book';
import Service from './service';
import {options} from './car'
import Contact from './contact';
import {BackTop, Col, Row} from 'antd'


const Home = () => {
    return(
    <>
          <div className="First_sub">
            <div>
              <h1>Ưu đãi giảm <strong>20%</strong> chi phí thuê xe cho khách hàng lần đầu sử dụng dịch vụ</h1>
            </div>
            <div>
              <BookBtn/>
            </div>
          </div>
          
          <div className="slide">
            <Slideshow/>
          </div>
          
            <Intro/>
          
          <Row className="service_div" id="service">
            {options.map(option => (<Service key={option.id} title={option.title} delay={option.delay} url={option.url}/>))}
          </Row>
        
          
          <Row>
            <Contact/>
          </Row>
          <BackTop className="back_top"/>
        </>
    )
}
export default Home