import { useGetOompaLoompasQuery } from "../features/oompa-loompas/api";
import { Card } from "../features/oompa-loompas/components/card";

export default function RootPage() {
  const { data, isLoading } = useGetOompaLoompasQuery();

  return (
    <div className="max-w-screen-xl m-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
      {isLoading && <p>Loading...</p>}
      {data ? (
        data.results.map((employee) => (
          <Card key={employee.id} details={employee} />
        ))
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
}
