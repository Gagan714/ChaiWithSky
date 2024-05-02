import React from 'react'

const Username = ({params}) => {
  return (
  <>
  <div className="relative">
  <img className="relative w-full h-[340px]" src="https://pas-bp-wp-cdn.s3.amazonaws.com/bplans/content/uploads/2023/11/03154343/How-to-Write-Your-Business-Plan-Cover-Page-Template.png" alt=''></img>
  <img className="absolute top-[266px] right-[46.5%] w-28 h-28 rounded-full" src="https://cdn.dribbble.com/userupload/11428818/file/original-e26099b859f5de5bb632ee44ec1a502d.jpg?resize=400x300&vertical=center" alt=''></img>
  </div>
  <div className="flex flex-col justify-center items-center mt-12">
<div className="text-white text-base font-bold">@{params.username}</div>
<div className="text-slate-400 text-sm">Creating Animated Art for SkyNetworks</div>
<div className="text-slate-400 text-sm">9718 members . 69 posts . $15,240/release</div>
  </div>
  </>
  )
}

export default Username