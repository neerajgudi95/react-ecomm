import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryTile from "../UI/CategoryTile";
import { getCategoriesList, options } from "../Utils/endPoints";
import styles from "./CategoryList.module.css";
import CategorySkeletonLoader from "../Loaders/CategorySkeletonLoader";


const CategoryList = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategoriesList = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetch(getCategoriesList(), options);
      const categories = await data.json();
      const destructeredList = categories?.components[0]?.cells?.items?.map(
        (cat) => {
          const target = cat.actions[0].target;
          return {
            displayName: cat.displayText,
            displayImg: cat.image.uri,
            categoryId: target.slice(target.indexOf("=") + 1),
          };
        }
      );
      setCategoriesList(destructeredList);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategoriesList();
  }, [fetchCategoriesList]);

  return (
    <div className={styles.categories}>
      {isLoading ? (
        <CategorySkeletonLoader />
      ) : (
        <ul className={styles.catList}>
          {categoriesList.map((category) => {
            return (
              <li key={category.categoryId}>
                {
                  <Link to={`/categories/${category.categoryId}`}>
                    <CategoryTile
                      displayImg={category.displayImg}
                      name={category.displayName}
                      imgAlt={category.categoryId}
                    />
                  </Link>
                }
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;
