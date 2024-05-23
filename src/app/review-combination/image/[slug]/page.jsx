import CardImage from '@/components/CardImage'
import Layout from '@/components/Layout'
import LayoutMedia from '@/components/LayoutMedia'
import { getSettingMediaResolution } from '@/utils/mediaUtils'
import React from 'react'

async function getData(slug) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reviews/review-combination-image/img-${slug}`)
  const res = await response.json()
  return res
}

export default async function Page({ params }) {
  const slug = params.slug
  const { data } = await getData(slug)
  const mediaInfo = getSettingMediaResolution('img-' + slug)
  return (
    <Layout type={"Combination"}>
      <LayoutMedia type="Kombinasi Gambar" resolution={mediaInfo.resolution}>
        <div className="my-6">
          <CardImage data={data} widthImage={mediaInfo.widthMedia} heightImage={mediaInfo.heightMedia} />
        </div>
      </LayoutMedia>
    </Layout>
  )
}
