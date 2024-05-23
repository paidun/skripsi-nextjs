import React from 'react'

export default function CardVideo({ widthVideo, heightVideo, data, poster }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {
        data.map((item, i) => (
          <div key={i}>
            <video className="rounded-sm aspect-video object-fill" width={widthVideo} height={heightVideo} preload="none"
              poster={`${process.env.NEXT_PUBLIC_MEDIA_URL}/videos/${poster}`} controls muted>
              <source src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/videos/${item.path_video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
