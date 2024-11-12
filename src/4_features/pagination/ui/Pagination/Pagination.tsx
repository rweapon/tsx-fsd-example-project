import { IPaginationProps } from "@features/pagination/model/types";
import PaginationButton from "@features/pagination/ui/PaginationButton/PaginationButton";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

export default function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: IPaginationProps & Props) {
  
  return (
    <>
      {top && <PaginationButton {...paginationProps} />}
      {children}
      {bottom && <PaginationButton {...paginationProps} />}
    </>
  );
}
