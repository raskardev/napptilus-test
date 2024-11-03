import { SearchInput } from "@/features/core/components/search-input";
import { setPage } from "@/features/core/coreSlice";
import { useAppDispatch, useAppSelector } from "@/features/core/hooks/store";
import { Card } from "@/features/employees/components/card";
import { useEffect, useState } from "react";
import { useGetEmployeesQuery } from "../features/employees/employeesSlice";

export default function RootPage() {
  const [search, setSearch] = useState("");

  const page = useAppSelector((state) => state.core.page);
  const dispatch = useAppDispatch();

  const { data, isFetching } = useGetEmployeesQuery(page);

  const filteredEmployees = data?.results.filter((employee) => {
    return (
      employee.first_name.toLowerCase().includes(search.toLowerCase()) ||
      employee.last_name.toLowerCase().includes(search.toLowerCase()) ||
      employee.profession.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrolledToBottom && !isFetching) {
        dispatch(setPage(page + 1));
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-end mb-8 pr-7">
        <SearchInput onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="p-2 text-5xl">Find your Oompa Loompa</h1>
        <p className="text-3xl text-zinc-500">There are more than 100k</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees ? (
          filteredEmployees.map((employee) => (
            <Card key={employee.id} details={employee} />
          ))
        ) : (
          <p className="text-2xl">No employees found</p>
        )}
      </div>
      {isFetching ? <p className="text-2xl text-center">Loading...</p> : null}
    </div>
  );
}
