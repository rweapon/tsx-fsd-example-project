import { useAppDispatch } from "@app/appStore";
import { Search } from "@features/search";
import { Slider } from "@features/slider";
import { IFilters } from "@entities/news";
import { setFilters } from "@entities/news/model/slice";
import { Categories } from "@features/categories";
import styles from "./styles.module.css";
import { CategoriesType } from "@entities/categories";

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

export default function NewsFilters({ filters, categories }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
}
