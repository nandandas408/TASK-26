import { useEffect, useState } from 'react'
import { About, CardFrame, Cart, Contact, Error, Layout,  Loading,  Payment, PaymentCart } from './Components';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './Features/Cart/cartSlice';

function App() {
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();
  const productData = useSelector(state => state.initialProducts);
  const searchData = useSelector(state => state.searchproduct);
  const isError = useSelector(state => state.isError);
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  },[])

  useEffect(() => {
    if(productData.length > 0)
      setDatas(productData);
  },[productData])

  useEffect(() => {
    if(searchData.length > 0)
      setDatas(searchData);
  },[searchData])

  const CardFrameWithCart = () => {
    return(
      <>
        <CardFrame datas={datas} />
        <Cart />
      </>
    )
  }

  const PaymentWithPaymentCart = () => {
    return(
      <>
        <Payment />
        <PaymentCart />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <CardFrameWithCart />
        },
        {
          path: 'payment',
          element: <PaymentWithPaymentCart />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'about',
          element: <About />
        }
      ]
    }
  ])

  return (
    <div className='min-h-screen'>
      {
        isLoading ? <Loading /> : (isError ? <Error /> : <RouterProvider router={router} />)
      }
    </div>
  )
}

export default App
