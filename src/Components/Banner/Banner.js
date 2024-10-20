import Banner_img from '../../Assets/Banner/Banner_img.png'
import './Banner.css'
const Banner = () => {
    return(
        <div className='Banner_Container'>
            <img src={Banner_img} alt='Banner_img' />
        </div>
    )
}

export default Banner