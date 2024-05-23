import React from 'react'

export default function LayoutMedia(props) {
  const { type, children, resolution = '' } = props
  return (
    <TypeMedia type={type} resolution={resolution} >
      {children}
    </TypeMedia>
  )
}

const TypeMedia = ({ type, children, resolution }) => {
  if (type === "Gambar") {
    return (
      <section id="image" className='mt-16'>
        <div className="container">
          <h1 className='text-3xl font-semibold text-dark'>GAMBAR</h1>
          <p className='text-lg text-dark'>Resolusi: {resolution}</p>
          {children}
        </div>
      </section>
    )
  } else if (type === "Text") {
    return (
      <section id="Review Text" className='mt-16'>
        <div className="container">
          <h1 className='text-3xl font-semibold text-dark'>Review Text</h1>
          {children}
        </div>
      </section>
    )

  } else if (type === "Kombinasi Gambar") {
    return (
      <section id="Kombinasi Gambar" className='mt-16'>
        <div className="container">
          <h1 className='text-3xl font-semibold text-dark'>Kombinasi Gambar</h1>
          <p className='text-lg text-dark'>Resolusi: {resolution}</p>
          {children}
        </div>
      </section>
    )
  }
  else if (type === "Kombinasi Video") {
    return (
      <section id="Kombinasi Video" className='mt-16'>
        <div className="container">
          <h1 className='text-3xl font-semibold text-dark'>Kombinasi Video</h1>
          <p className='text-lg text-dark'>Resolusi: {resolution}</p>
          {children}
        </div>
      </section>
    )
  }
  else {
    return (
      <section id="video" className='mt-16'>
        <div className="container">
          <h1 className='text-3xl font-semibold text-dark'>VIDEO</h1>
          <p className='text-lg text-dark'>Resolusi: {resolution}</p>
          {children}
        </div>
      </section>
    )
  }
}
