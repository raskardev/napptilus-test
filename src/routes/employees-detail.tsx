import { useGetEmployeeQuery } from "@/features/employees/employeesSlice";
import { useParams } from "react-router-dom";

export default function EmployeesDetailPage() {
  const { id } = useParams();

  const { data: employee, isFetching } = useGetEmployeeQuery(Number(id));

  return (
    <div className="flex">
      <div className="flex flex-1 w-[50%]">
        {isFetching ? (
          <img className="object-cover w-full h-[600px] bg-gray-200 animate-pulse" />
        ) : (
          <img
            src={employee?.image}
            alt={`${employee?.first_name} profile photo`}
            className="object-cover w-full h-[600px]"
          />
        )}
      </div>
      <div className="flex flex-1 w-[50%] flex-col">
        <div className="px-4">
          <h3 className="mb-2 text-2xl font-semibold text-gray-800">
            {isFetching
              ? "Loading..."
              : `${employee?.first_name} ${employee?.last_name}`}
          </h3>
          {!isFetching ? (
            <>
              <p className="text-gender">
                {employee?.gender === "M" ? "Man" : "Woman"}
              </p>
              <p className="text-profession">{employee?.profession}</p>
              {employee?.quota ? (
                <p className="mt-6">
                  {employee?.quota.split(". ").length <= 10
                    ? employee?.quota
                    : employee?.quota.split(". ").slice(0, 10).join(". ") + "."}
                </p>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
