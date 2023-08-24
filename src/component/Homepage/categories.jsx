import getAllCategories from "../../utils/getAllCategories";
import SingleCategory from "./SingleCategory";


const Categories = async() => {
    const categories= await getAllCategories();
    return (
        <div className="container mx-auto">
            <h1>Categories</h1>
            {
                categories.map((category)=><SingleCategory key={category.id} category={category}></SingleCategory>)
            }
        </div>
    );
};

export default Categories;