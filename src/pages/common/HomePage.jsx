import { useState } from "react";
import Categories from "../../components/common/Categories";
import Products from "../../components/common/Products";
import Sorting from "../../components/common/Sorting";
import Sliders from "../../components/common/Sliders";



const HomePage = () => {

const [sort, setSort]= useState ('');
const [category, setCategory] = useState ('') 



  return (
    <>
      <Sliders />
      <Sorting  setSort={setSort} />
      <div className="flex">
      <Categories setCategory = {setCategory} />
      <Products category= {category} sort = {sort} />
      </div>
      
    </>
  );
};

export default HomePage;
