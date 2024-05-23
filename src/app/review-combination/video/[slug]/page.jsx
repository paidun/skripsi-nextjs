import CardVideo from '@/components/CardVideo'
import Layout from '@/components/Layout'
import LayoutMedia from '@/components/LayoutMedia'
import { getSettingMediaResolution } from '@/utils/mediaUtils'
import React from 'react'

async function getData(slug) {
  try {
    const response = await fetch(`https://api-skripsi.monobox.my.id/api/reviews/review-combination-video/vid-${slug}`)
    const res = await response.json()
    return res
  } catch (error) {
    console.log(error)
  }
}

export default async function Page({ params }) {
  const slug = params.slug
  const { data } = await getData(slug)
  const mediaInfo = getSettingMediaResolution('vid-' + slug)
  const posterVideo = `poster-${mediaInfo.resolution}.png`;
  return (
    <Layout type={"Combination"}>
      <LayoutMedia type="Kombinasi Video" resolution={mediaInfo.resolution}>
        <div className="my-6">
          <CardVideo data={data} widthVideo={mediaInfo.widthMedia} heightVideo={mediaInfo.heightMedia} poster={posterVideo} />
        </div>
      </LayoutMedia>
    </Layout>
  )
}
