import { useState, useEffect } from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";
import { PaginationFilterProps } from "types/index";

function PaginationFilter({ total }: PaginationFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<undefined | number>(undefined);
  const [size, setSize] = useState<undefined | number>(30);
  const onChange: PaginationProps["onChange"] = (pageNumber, pageSize) => {
    handleMakeParams("page", String(pageNumber));
    handleMakeParams("size", String(pageSize));
  };
  const handleMakeParams = (key: string, value: string) => {
    if (value) {
      if (searchParams.has(key)) searchParams.set(key, value);
      else searchParams.append(key, value);
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };
  const setDefaults = () => {
    const dPage = searchParams.get("page");
    const dSize = searchParams.get("size");
    setPage(dPage ? +dPage : 1);
    setSize(dSize ? +dSize : 30);
  };

  useEffect(() => {
    setDefaults();
  }, [searchParams]);

  return (
    <Pagination
      total={total}
      current={page}
      onChange={onChange}
      style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}
    />
  );
}

export default PaginationFilter;
