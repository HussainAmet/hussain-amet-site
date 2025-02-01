import React from 'react'

function OrderedList({ listTitle, list }) {
  console.log(list.length);
  
  return (
    <div>
      <ul
        className="
          xl:text-3xl xl:pl-8
          lg:text-2xl lg:pl-8
          text-xl mb-4 pl-6
        "
      >
        <li
          className='
            list-disc
          '
        >
          {listTitle}
        </li>
      </ul>
      <ol
        className="
          font-Inter font-normal list-decimal flex flex-col gap-3
          xl:text-2xl xl:pl-16
          lg:text-xl lg:pl-16
          text-base pl-9
        "
      >
        {
          list.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.title}</span>{item.description}
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default OrderedList