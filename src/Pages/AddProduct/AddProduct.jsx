import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
        <section className="dark:bg-gray-100 dark:text-gray-900 max-sm:w-[350px] mx3 bg-teal-100 rounded-lg lg:mx-16 my-6">
            <div className="space-y-2 col-span-full lg:col-span-1 text-center pt-5">
                <p className="font-cinzel lg:text-4xl text-2xl font-bold">Add Product</p>
                <p className="text-xs max-w-96 mx-auto font-inter">Add your favorite contest.Mention the price along with the contest.Also mention the date line of adding the contest.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="container p-6 font-lato">
                <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md dark:bg-gray-50">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm font-semibold">Product Name</label>
                            <input {...register('productName')} type="text" placeholder="Product Name" className="w-full h-12 pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm font-semibold">Product Category</label>
                            <input {...register('productCategory')} type="text" placeholder="Contest Name" className="w-full h-12 pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm font-semibold">Product Description</label>
                            <textarea {...register('productDescription')} placeholder='Contest Description....' className="w-full pt-1 pl-3 h-20 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm font-semibold">Product Price</label>
                            <input {...register("productPrice")} type="number" placeholder="Contest Price" className="w-full h-12 pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm font-semibold">Product Rating</label>
                            <input {...register("productRating", { min: 0, max: 5 })} type="number" placeholder="Contest Price" className="w-full h-12 pl-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            {
                                errors.productRating && <p className='text-red-600'>Please provide rating only 0 to 5</p>
                            }
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="state" className="text-sm font-semibold">Product Image</label>
                            <input {...register('productImg')} type="file" className="file-input w-full" />
                           
                        </div>

                        <div className="col-span-full">
                            <button className='btn w-full btn-accent font-bold text-lg text-slate-800'>Add Product</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddProduct;