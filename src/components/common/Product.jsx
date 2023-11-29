import { useNavigate } from "react-router-dom"


const Product = ({product}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`products/${product?.id}`)} className="w-[390px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer ">
      <div className="text-l font-bold absolute rounded-md top-0 right-0 bg-red-600 text-white p-2 m-1"> {product?.price}
      <span className=" text-xs "> TL</span>
      </div>
      <img className="w-[200px] h-[200px] object-cover m-auto " src={product?.image} alt="" />

     <div className="text-center px-3 mt-3 text-l font-bold"> {product?.title}
     </div>
      
    </div>
  )
}

export default Product
