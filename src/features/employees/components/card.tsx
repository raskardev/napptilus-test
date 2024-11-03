import { Link } from "react-router-dom";
import type { Employee } from "../types";

interface Props {
  details: Pick<
    Employee,
    "id" | "image" | "first_name" | "last_name" | "profession"
  >;
}

export const Card = ({ details }: Props) => {
  const { image, first_name, last_name, profession } = details;

  return (
    <Link to={`/employees/${details.id}`}>
      <div className="w-[300px] bg-white rounded-lg overflow-hidden">
        <img
          src={image}
          alt={`${first_name} profile photo`}
          className="w-full h-[200px] object-cover"
        />
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">{`${first_name} ${last_name}`}</h3>
          <p className="text-gray-600">{profession}</p>
        </div>
      </div>
    </Link>
  );
};
