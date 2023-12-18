import React from 'react'

function JoinNowCTA() {
  return (
    <div>
        <div className="mt-5 mx-6 rounded-xl p-2 text-white text-center"
            style={{ background: "linear-gradient(247deg, #F77 1.21%, #D62323 1.22%, #D75931 102%)"}}
        >
            <p className="text-[12px] font-helvetica font-bold">JOIN THE ONE PERSON AGENCY WORKSHOP NOW!</p>
            <p className="text-[12px] font-helvetica font-bold text-center py-1">(ONLY ₹299)</p>
        </div>
        <p className="text-[13px] font-helvetica text-white mx-6 my-3 text-center">Register before 28th December to unlock bonus worth <span className='text-[#f90]'>₹17,000</span></p>
    </div>
  )
}

export default JoinNowCTA