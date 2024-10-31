import type { Employee } from "../types";

interface Props {
  details: Pick<Employee, "image" | "first_name" | "last_name" | "profession">;
}

export const Card = ({ details }: Props) => {
  const { image, first_name, last_name, profession } = details;

  return (
    <div className="w-[300px] bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={`${first_name} profile photo`}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{`${first_name} ${last_name}`}</h3>
        <p className="text-gray-600">{profession}</p>
      </div>
    </div>
  );
};
