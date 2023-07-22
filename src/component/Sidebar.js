import React from 'react'

function Sidebar() {
  return (
    <div className='grid h-full fixed w-60 bg-[#fafbfd]'>
        <div className='flex flex-col gap-20 w-full'>
        <div className='flex self-center py-5 text-xl font-bold '><font className="text-[#f7542e]">Dev</font>challenges.io</div>
      <ul className='grid gap-10 justify-center'>
        {Menu.map((item,index)=>{
            return(
                <li key={index} className={`${!item.active ? 'text-gray-300 font-bold' : 'text-black font-bold'}`}>{item.name}</li>
            )
        })}
      </ul>
        </div>
    </div>
  )
}

export default Sidebar

const Menu =[
    {name:'Typography', active:false},
    {name:'Grid', active:false},
    {name:'Buttons', active:false},
    {name:'Inputs', active:true},
]