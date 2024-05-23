import Layout from '@/components/Layout'
import LayoutMedia from '@/components/LayoutMedia'
import { getSettingMediaResolution } from '@/utils/mediaUtils'
import React from 'react'

async function getData(slug) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reviews/review-video/${slug}`)
  const res = await response.json()
  return res
}

export default async function Page({ params }) {
  const slug = params.slug
  const { data } = await getData(slug)
  const mediaInfo = getSettingMediaResolution(slug)
  const posterVideo = `poster-${mediaInfo.resolution}.png`;
  return (
    <Layout type={"Navbar"}>
      <LayoutMedia type="Video" resolution={mediaInfo.resolution}>
        <div className="mt-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 mt-5">
            {
              data.map((item, i) => (
                <video className="rounded-sm aspect-video object-fill" width={mediaInfo.widthMedia} height={mediaInfo.heightMedia} preload="none"
                  poster={`${process.env.NEXT_PUBLIC_MEDIA_URL}/videos/${posterVideo}`} controls muted key={i + 1} >
                  <source src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/videos/${item.path_video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))
            }
          </div>
        </div>
      </LayoutMedia>
    </Layout>
  )
}
