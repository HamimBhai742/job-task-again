import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import ProductsCard from './ProductsCard';

const Products = () => {
    const axiosPublic = useAxiosPublic()
    const [selectedValue, setSelected] = useState()

    const { data: products = [] } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products`)
            return res.data
        }
    })
    console.log(selectedValue);
    const handelSort = (e) => {
        // console.log(e.target.value);
        setSelected(e.target.value)
    }
    if (selectedValue === 'asc') {
        const no = products.sort((a, b) => (a.productPrice < b.productPrice) ? -1 : (a.productPrice > b.productPrice) ? 1 : 0);
    }
    else if (selectedValue === 'desc') {
        const yes = products.sort((a, b) => (a.productPrice < b.productPrice) ? 1 : (a.productPrice > b.productPrice) ? -1 : 0);
    }
    else if (selectedValue === 'recently') {
        const yes = products.sort((a, b) => (a.productAddingTime < b.productAddingTime) ? 1 : (a.productAddingTime > b.productAddingTime) ? -1 : 0);
    }
    return (
        <div className='mx-10'>
            <div className='my-7'>
                <select onChange={handelSort} className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Sort By</option>
                    <option value={'desc'}>High to Low</option>
                    <option value={'asc'}>Low to High</option>
                    <option value={'recently'}>Newest first</option>
                </select>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => <ProductsCard product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;