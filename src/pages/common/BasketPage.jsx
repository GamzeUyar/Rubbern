
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCartTotal } from "../../store/slice/cartSlice"
import CartComp from "../../components/common/CartComp"

const BasketPage = () => {
    const dispatch = useDispatch();
    const {carts, totalAmount, itemCount} = useSelector (state =>state.carts)
    console.log (carts, totalAmount, itemCount ,"carts");
  
    useEffect(()=> {
      dispatch (getCartTotal())
    }, [dispatch] )

  return (
    <div>
      {
        carts?.length > 0 ? <div>
            {
                carts?.map((cart, i) => (
                    <CartComp key={i} cart={cart} />
                ) )
               
            }
            <div className="flex mx-12 items-center justify-end text-2xl"> TOPLAM TUTAR : <span className="font-bold text-3xl ml-2"> {totalAmount} TL </span> </div>

        </div> :
        <div>Sepetiniz Boş...</div>
      }
    </div>
  )
}

export default BasketPage
