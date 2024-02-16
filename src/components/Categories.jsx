import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <section>
      <div className="pt-10">
        <h2 className="text-5xl text-center tracking-tighter">
          ALL CATEGORIES
        </h2>
      </div>
      <div className="flex justify-center flex-wrap m-6">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}></CategoryItem>
        ))}
      </div>
    </section>
  );
};

export default Categories;
