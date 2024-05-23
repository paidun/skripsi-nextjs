import Layout from '@/components/Layout'
import LayoutMedia from '@/components/LayoutMedia'
import { getSettingMediaResolution } from '@/utils/mediaUtils'
import Image from 'next/image'

async function getData(slug) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reviews/review-image/${slug}`)
  const res = await response.json()
  return res
}

export default async function Page({ params }) {
  const slug = params.slug
  const { data } = await getData(slug)
  const mediaInfo = getSettingMediaResolution(slug)
  return (
    <Layout type={"Navbar"}>
      <LayoutMedia type="Gambar" resolution={mediaInfo.resolution}>
        <div className="mt-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 mt-5">
            {
              data.map((item, i) => (
                <Image src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/images/${item.path_image}`} alt="" width={mediaInfo.widthMedia} height={mediaInfo.heightMedia} key={i} />
              ))
            }
          </div>
        </div>
      </LayoutMedia>
    </Layout>
  )
}
