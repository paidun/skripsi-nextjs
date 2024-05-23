import Layout from "@/components/Layout";
import Link from 'next/link'

export default function Home() {
  const menu = [
    {
      name: "Review Text",
      path: '/review-text'
    },
    {
      name: "Review Gambar",
      path: '/image/img-480p'
    },
    {
      name: "Review Video",
      path: '/video/vid-480p'
    },
    {
      name: "Review Kombinasi",
      path: '/review-combination/image/480p'
    },
  ]
  return (
    <Layout type={'Header'}>
      <div className="container">
        <div className="w-full bg-slate-50 rounded-3xl flex justify-center items-center mt-16 py-10">
          <div className="w-3/4 md:w-1/3 mx-auto uppercase text-center text-xl md:text-3xl font-bold text-black">
            Pengujian performa Next js <span className="italic">server side rendering</span>
          </div>
        </div>
        <section id="menu" className="my-10">
          <div className="grid grid-cols-2 gap-5">
            {
              menu.map((item, i) => (
                <Link href={item.path} key={i}>
                  <div className="py-20 bg-slate-200 border border-slate-50 rounded-lg flex justify-center items-center">
                    <h1 className="font-bold text-black">{item.name}</h1>
                  </div>
                </Link>
              ))
            }
          </div>
        </section>
      </div>
    </Layout>
  );
}
