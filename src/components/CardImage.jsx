import React from 'react'
import Image from "next/image"


export default function CardImage({ widthImage, heightImage, data }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {
        data.map((item, i) => (
          <div key={i}>
            <Image src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/images/${item.path_image}`} alt={`Gambar ${item.name}`} className="rounded" width={widthImage} height={heightImage} />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <h3 className="text-sm truncate">Rating: {item.rating}</h3>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold">{item.area}</h3>
                <h3 className="text-sm truncate">{item.review_date}</h3>
              </div>
              <p className='line-clamp-2'>{item.review_text}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
