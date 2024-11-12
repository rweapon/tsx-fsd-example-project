import { IFilters, INews } from "@entities/news";
import { Pagination } from "@features/pagination";
import { usePaginationNews } from "@pages/main/utils/hooks/usePaginationNews";
import { TOTAL_PAGES } from "@shared/constants/constants";
import { NewsListWithSkeleton } from "@widgets/news";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

export default function NewsListWithPagination({
  filters,
  news,
  isLoading,
}: Props) {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <>
      <Pagination
        top
        bottom
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      >
        <NewsListWithSkeleton isLoading={isLoading} news={news} />
      </Pagination>
    </>
  );
}
