import React from 'react'
import ScrollVelocity from '../utils/ScrollVelocity';

const Scrolltext = () => {
  return (
    <div className="bg-[#080914]" >
    <ScrollVelocity
    texts={['MOHEENKHAN', 'INAMDAR']} 
    velocity={70} 
    className="custom-scroll-text text-white mt-3 font-[Bebas Neue] font-semibold "
    />
    </div>
  )
}

export default Scrolltext