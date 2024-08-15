import React from 'react';
import ReactStars from 'react-stars';

const ProductsCard = ({ product }) => {
    // console.log(product);
    const { productRating, productAddingTime, productPrice,brandName, productName, productImg, productDescription, productCategory } = product
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className='relative'>
                <img className='w-full h-72'
                    src={productImg}
                    alt="Shoes" />
                <p className='bg-gray-800 absolute text-white px-2 py-1 rounded-sm left-0 top-0'>{productAddingTime}</p>
                <p className='bg-gray-800 absolute text-white px-2 py-1 rounded-sm right-0 top-0'>{brandName}</p>
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{productName}</h2>
                <p>{productDescription.slice(0, 75)}...</p>
                <div className="card-actions justify-between items-center">
                    <ReactStars
                        value={productRating}
                        edit={false}
                        size={24}
                    >
                    </ReactStars>
                    <div className="badge badge-outline">{productCategory}</div>
                </div>

                <div className="card-actions justify-between items-center">
                    <h3 className='text-2xl font-semibold'>
                        ${productPrice}
                    </h3>
                    <button className='btn btn-accent'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;