import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import ProductsCard from './ProductsCard';
import useProductCount from '../../hooks/useProductCount';
import { MdOutlineMenuOpen } from 'react-icons/md';

const Products = () => {
    const axiosPublic = useAxiosPublic()
    const productsCount = useProductCount()
    const [counts, setCounts] = useState(productsCount)
    const [products, setProducts] = useState([])
    const [selectedValue, setSelected] = useState()
    const [selectedValued, setSelectedValued] = useState()
    const [open, setOpen] = useState(false)

    const handelOpenBtn = () => {
        setOpen(!open)
    }

    useEffect(() => {
        async function fetchDatas() {
            const cou = await axiosPublic.get('/productsCount')
            setCounts(cou.data.count)
        }
        fetchDatas()
    }, [])
    const [itemPerPage, setItemPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const handelPerPage = (e) => {
        setItemPerPage(e.target.value)
        setCurrentPage(0)
    }
    const handelPreviousBtn = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handelNextBtn = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    const numberOfPage = Math.ceil(counts / itemPerPage)
    const pages = [...Array(numberOfPage).keys()]
    const handelSort = (e) => {
        if (e.target.value === 'asc' || e.target.value === 'desc') {
            setSelectedValued()
            setSelected(e.target.value)
        }
        else {
            setSelected()
            setSelectedValued(e.target.value)
        }
    }
    if (selectedValued === 'recently') {
        const yes = products.sort((a, b) => (a.productAddingTime < b.productAddingTime) ? 1 : (a.productAddingTime > b.productAddingTime) ? -1 : 0);
    }

    const handelSearchBtn = async (e) => {
        e.preventDefault()
        const searchss = e.target.search.value;
        const se = await axiosPublic.get(`/searchProduct?search=${searchss}`)
        setProducts(se.data);
        setCounts(se.data.length)
    }

    const handelCategorization = async (e) => {
        e.preventDefault()
        const form = e.target
        const brandName = form.brandName.value
        const productCategory = form.productCategory.value
        const minPrice = form.minPrice.value
        const maxPrice = form.maxPrice.value
        const res = await axiosPublic.get(`/productsCategorization?minPrice=${minPrice}&maxPrice=${maxPrice}&brandName=${brandName}&productCategory=${productCategory}`)
        setProducts(res.data);
        setCounts(res.data.length)
        setOpen(false)
    }

    useEffect(() => {
        async function fetchDatas() {
            const ress = await axiosPublic.get(`/productsPage?page=${currentPage}&&size=${itemPerPage}&&sort=${selectedValue}&&date=${selectedValued}`)
            setProducts(ress.data)
        }
        fetchDatas()
    }, [currentPage, itemPerPage, selectedValue, selectedValued])

    const brand = ['Schick', 'Breville', 'Ninja Kitchen', 'Vita-Mix Corporation', 'Unilever', 'CeraVe', 'Adidas', 'Nike', 'Sony', 'Apple', 'Samsung']
    const category = ['Electronics', 'Fashion', 'Home and Kitchen', 'Health and Beauty', 'Books and Stationery']
    return (
        <div className='mx-10'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 mb-3'>
                    <form onSubmit={handelSearchBtn} className='flex gap-3'>
                        <input
                            type="text"
                            name='search'
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <input type='submit' className='btn btn-success' value='Search' />
                    </form>
                </div>

                <div className='my-7'>
                    <select onChange={handelSort} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Sort By</option>
                        <option value={'desc'}>High to Low</option>
                        <option value={'asc'}>Low to High</option>
                        <option value={'recently'}>Newest first</option>
                    </select>
                </div>

                <div>
                    <button onClick={handelOpenBtn} className='text-5xl'><MdOutlineMenuOpen /></button>
                    <div className={open ? 'mb-3' : 'hidden'}>
                        <form onSubmit={handelCategorization}>
                            <h3 className='text-2xl font-semibold'>Brand Name</h3>
                            <div className='grid grid-cols-2'>
                                {
                                    brand.map(b => <>
                                        <div className='flex gap-1'>
                                            <input type="radio" value={b} name='brandName' />
                                            <span>{b}</span>
                                        </div>
                                    </>)
                                }
                            </div>
                            <h3 className='text-2xl font-semibold mt-3'>Product Category</h3>
                            {
                                category.map(c => <>
                                    <div className='flex gap-1'>
                                        <input type="radio" name="productCategory" value={c} />
                                        <span>{c}</span>
                                    </div>
                                </>)
                            }
                            <h3 className='text-2xl font-semibold mt-3'>Price Range</h3>
                            <input placeholder='Min price' className="input input-bordered w-full max-w-28" name='minPrice' type="number" />
                            <input placeholder='Max price' className="input input-bordered w-full max-w-28 ml-3" name='maxPrice' type="number" />
                            <div className='mt-5'>
                                <input className='btn btn-accent' type="submit" value="Categorize " />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => <ProductsCard product={product}></ProductsCard>)
                }
            </div>

            <div className='flex gap-5 justify-center my-10'>
                <button onClick={handelPreviousBtn} className='btn btn-info'>Prev</button>
                <p>{pages.map(p => <button onClick={() => setCurrentPage(p)} className={currentPage === p ? 'btn btn-secondary btn-circle ml-2' : 'btn ml-2 btn-circle btn-success'}>{p + 1}</button>)}</p>
                <button onClick={handelNextBtn} className='btn btn-accent'>Next</button>
                <select className='border-2 border-blue-500 rounded-md px-2' onChange={handelPerPage}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Products;