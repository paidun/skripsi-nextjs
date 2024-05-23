import Layout from '@/components/Layout'
import LayoutMedia from '@/components/LayoutMedia'
import React from 'react'

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reviews/review-text`)
  if (!res.ok) {
    throw new Error('Error bosss')
  }
  return res.json()
}

export default async function Page() {
  const { data } = await getData()
  return (
    <Layout type={"Header"}>
      <LayoutMedia type={"Text"}>
        <div className="my-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase border-b text-center">
                <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-50">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-50">
                    Area
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-50">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Review
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, i) => (
                    <tr className="border-gray-200 " key={i}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 text-center">
                        {i + 1}
                      </th>
                      <td className="px-6 py-4 text-center capitalize">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-center bg-gray-50 capitalize">
                        {item.area}
                      </td>
                      <td className="px-6 py-4 text-center capitalize">
                        {item.review_date}
                      </td>
                      <td className="px-6 py-4 text-center bg-gray-50 capitalize">
                        {item.rating}
                      </td>
                      <td className="px-6 py-4 normal-case">
                        {item.review_text}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </LayoutMedia>
    </Layout>
  )
}
