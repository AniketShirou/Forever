import React, { useContext, useState } from 'react'
import { assets, products } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { Listbox } from '@headlessui/react'

const options = [
  { label: 'Sort by: Relevant', value: 'relevant' },
  { label: 'Price: Low to High', value: 'low-high' },
  { label: 'Price: High to Low', value: 'high-low' }
];

const Collection = () => {

 const {products} = useContext(ShopContext); 
 const [showFilter , setShowFilter] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>
      {/* Left Side Filter Options */}
      <div className='min-w-60'>
           <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} />
           </p>
           {/* Category Filter */}
           <div className={`border border-gray-300 pl-3 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
             <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='gap-2 flex'>
                  <input className='w-3' type='checkbox' value={'Men'}/> Men
                </p> 
                <p className='gap-2 flex'>
                  <input className='w-3' type='checkbox' value={'Women'}/> Women
                </p> 
                <p className='gap-2 flex'>
                  <input className='w-3' type='checkbox' value={'Kids'}/> Kids
                </p> 
             </div>
           </div>
           {/* Sub-Category Filter */}
           <div className={`border border-gray-300 pl-3 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
             <p className='mb-3 text-sm font-medium'>TYPE</p>
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='gap-2 flex'>
                  <input className='w-3' type='checkbox' value={'Topwear'}/> Top Wear
                </p> 
                <p className='gap-2 flex'>
                  <input className='w-3' type='checkbox' value={'Bottomwear'}/> Bottom Wear
                </p> 
                <p className='gap-2 flex'>
                  <input className='w-3' type='checkbox' value={'Winterwear'}/> Winter Wear
                </p> 
             </div>
           </div>
      </div>

      {/* Right Side  */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={' COLLECTIONS'}/>
          {/* Product Sort */}
          <select className="border-2 border-gray-300 text-sm px-3">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Price (Low to High)</option>
            <option value="high-low">Sort by: Price (High to Low)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Collection