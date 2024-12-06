import React from 'react'
import Card from '../Card/Card'

const CardFrame = ({datas}) => {
  return (
    <div className='w-[55%] bg-[#fff4bd] px-5 py-6 flex flex-wrap justify-around gap-y-8'>
      {
        datas.map((data) => {
          return (
            <Card key={data.id} data={data}/>
          )
        })
      }
    </div>
  )
}

export default CardFrame
