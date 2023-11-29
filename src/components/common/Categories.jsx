import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/slice/categorySlice";

const Categories = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/6 bg-gray-100 p-4">
      <div className="border-b pb-1 px-2 text-lg font-bold">KATEGORİ</div>
      {categories?.map((category,i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-l cursor-pointer hover:bg-gray-200 p-2"
          key={i}
        >
          {category}{" "}
        </div>
      ))}
    </div>
  );
};

export default Categories;
