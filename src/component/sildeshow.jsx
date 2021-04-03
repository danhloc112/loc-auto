import {Carousel, Image} from 'antd'
import camry from '../image/camry.jpg'
import fortuner from '../image/fortuner.jpg'
import marda3 from '../image/marda3.jpg'

const Slideshow = () => {
    return (
        <Carousel autoplay effect="fade">
            <Image width="100%" src={camry} />
            <Image width="100%" src={fortuner} />
            {/* <Image width="100%" src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
            <Image width="100%" src={marda3} />
        </Carousel>
    )
}
export default Slideshow;