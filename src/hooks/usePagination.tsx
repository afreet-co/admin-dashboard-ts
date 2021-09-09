import { useEffect, useState } from "react";

export const usePagination = (rows: any[], paginateButtonClasses?: string) => {
  const [pageSize, setPageSize] = useState("5");
  const [showableRows, setShowableRows] = useState<any[]>([]);
  const [pages, setPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const calculatedPages = Math.ceil(rows.length / +pageSize);
    setPages(calculatedPages);
    if (calculatedPages < pageNumber) {
      setPageNumber(calculatedPages);
    }
  }, [pageSize]);

  const onPrevClick = () => setPageNumber((prev) => prev - 1);
  const onNextClick = () => setPageNumber((prev) => prev + 1);
  const onPageChange = (value: number) => setPageNumber(value);
  const onPageSizeChange = (value: string) => setPageSize(value);

  const isPreviousDisabled = !(pageNumber - 1 > 0);
  const isNextDisabled = !(pageNumber < pages);
  useEffect(() => {
    setShowableRows(
      rows.slice((pageNumber - 1) * +pageSize, pageNumber * +pageSize)
    );
  }, [pageNumber, pages]);

  return {
    showableRows,
    onPrevClick,
    onNextClick,
    isNextDisabled,
    isPreviousDisabled,
    pageNumber,
    pages,
    onPageChange,
    onPageSizeChange,
    pageSize,
  };
};
