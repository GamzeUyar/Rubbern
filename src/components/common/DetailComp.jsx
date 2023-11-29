/* eslint-disable react/prop-types */
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/slice/cartSlice"



const DetailComp = ({productDetail}) => {
    const dispatch = useDispatch()
    const [quantity , setQuantity]= useState(0)
    

    function decrement() {
    if (quantity > 0) setQuantity(quantity - 1) // quantity 0 dan büyükse 1 azalt değilse azaltma
  }
const increment = () => {
    // eslint-disable-next-line react/prop-types
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1) // quantity değerim yukarıdan gelen count değerimden küçük olduğu sürece 1 arttır
}
const addBasket = ()=> {
    dispatch(addToCart ({
      // eslint-disable-next-line react/prop-types
      id: productDetail?.id, 
      // eslint-disable-next-line react/prop-types
      title: productDetail?.title, 
      // eslint-disable-next-line react/prop-types
      price: productDetail?.price, 
      // eslint-disable-next-line react/prop-types
      image: productDetail?.image, 
      quantity : quantity  
    }))
 

}

  return (
    <div>
     <div className="flex gap-10 my-10">
        
       
        <img className="w-[700px] h=[700px] object-cover  " src={productDetail?.image} />
<div className="">

<div className="text-4xl font-bold"> {productDetail?.title} </div>

<div className="my-2 text-2xl"> {productDetail?.description} </div>
<div className="my-2 text-xl text-red-500">Rating : {productDetail?.rating?.rate} </div>
<div className="my-2 text-xl  text-red-500">Count :{productDetail?.rating?.count} </div>
<div className="text-5xl font-bold">{productDetail?.price} <span className="text-sm">TL</span> </div>

<div className="flex items-center gap-5 my-4">

<div onClick={decrement} className="text-5xl cursor-pointer">-</div>
<input className="w-10 text-center text-4xl font-bold " type="text" value={quantity} />
<div onClick={increment} className="text-4xl cursor-pointer">+</div>

</div>

<div onClick={addBasket} className="my-4 w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center border justify-center ">Sepete Ekle</div>
</div>


     </div>
    </div>
  )
}

export default DetailComp
