import { useDispatch, useSelector } from "react-redux"
import {useParams} from "react-router-dom"
import { getDetailProduct } from "../../store/slice/productSlice";
import { useEffect } from "react";
import DetailComp from "../../components/common/DetailComp";
import Loading from "../../components/common/Loading";


const ProductPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    // Verileri useSelector ile çekerim
    const {productDetail, productDetailStatus} = useSelector (state => state.products)

useEffect (()=>
{
    dispatch(getDetailProduct(id))
}, [dispatch,id] )

console.log(productDetail, "productDetail")

  return (
    <div>
        {
            productDetailStatus == "LOADING" ? <Loading /> : <DetailComp productDetail ={productDetail} />
        }
     
    </div>
  )
}

export default ProductPage
