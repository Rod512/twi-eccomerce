import React,{useContext} from 'react';
// import link
import {Link} from 'react-router-dom'
// import icons
import {BsPlus,BsEyeFill} from 'react-icons/bs'

const Product = ({product}) => {
    console.log(product)

    // desture product
    const { id, image, category, title, price } = product
    return (
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                <div>
                    {/* image */}
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>

            <div>2</div>
        </div>
    );
};

export default Product;