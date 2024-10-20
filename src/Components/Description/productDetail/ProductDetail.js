import { useEffect } from 'react';
import BackIcon from '../../../Assets/Icons/Right icon.svg'
import ProductImage from '../../../Assets/Products/product_1.png'
import './ProductDetail.css';
import {useNavigate} from 'react-router-dom';
import React from 'react';

const ProductDetail = () => {
    const navigate = useNavigate()
    const naviagteToHome = () =>{
        // sessionStorage.setItem("itemSelected", [])
        navigate('/dashboard');
      }
      const [data, setData] = React.useState({})
    useEffect(() =>{
        setData(JSON.parse(sessionStorage.getItem("itemSelected")))
    },[])
    return(
        <>
        <div className='product_detail_container'>
            <div className='back_catalog' onClick={naviagteToHome}>
                <img src={BackIcon} />
                <p>Back to catalog</p>
            </div>
            <img className='product_image' src={ProductImage} />
            <div className='details_wrapper'>
                <p className='auction'>{data?.badge}</p>
                <p className='product_name'>{data?.heading}</p>
                <div className='min_current_bid'>
                    <p className='text'>Minimum Bid</p>
                    <p className='price'>{data?.minimumBid}</p>
                </div>
                <div className='min_current_bid'>
                    <p className='text'>Current Bid</p>
                    <p className='price'>{data?.currentBid}</p>
                </div>
                <p className='offer_timings'>Ends in : {data?.saleEnd}</p>
            </div>
        </div>
        </>
    )
}

export default ProductDetail