import { Suspense } from 'react'
import Loading from '@/components/loading'
import MainComponent from '@/components/mainComponent'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <table className='table-fixed'>
        <thead>
          <tr>
            <th className="border">Component</th>
            <th className="border">TimeOutCount</th>
          </tr>
        </thead>
        <tbody className='divide-black'>
          <tr>
            <td className="border">1000</td>
            <td className="border">
              <Suspense fallback={<Loading></Loading>}>
                <MainComponent timeOutCount={1000}></MainComponent>
              </Suspense>
            </td>
          </tr>
          <tr>
            <td className="border">3000</td>
            <td className="border">
              <Suspense fallback={<Loading></Loading>}>
                <MainComponent timeOutCount={3000}></MainComponent>
              </Suspense>
            </td>
          </tr>
          <tr>
            <td className="border">5000</td>
            <td className="border">
              <Suspense fallback={<Loading></Loading>}>
                <MainComponent timeOutCount={5000}></MainComponent>
              </Suspense>
            </td>
          </tr>
          <tr>
            <td className="border">10000</td>
            <td className="border">
              <Suspense fallback={<Loading></Loading>}>
                <MainComponent timeOutCount={10000}></MainComponent>
              </Suspense>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
