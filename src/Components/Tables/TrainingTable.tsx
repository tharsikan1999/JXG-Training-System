import DATA from "../../Datas/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheckSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TrainingTable = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  return (
    <div className="mx-auto flex justify-center   h-screen items-start overflow-scroll">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 w-auto">Date</th>
            <th className="px-4 py-2 w-auto">Type</th>
            <th className="px-4 py-2 w-auto">Name</th>
            <th className="px-4 py-2 w-auto">Start Date</th>
            <th className="px-4 py-2 w-auto">End Date</th>
            <th className="px-4 py-2 w-auto">Zone</th>
            <th className="px-4 py-2 w-auto">Region</th>
            <th className="px-4 py-2 w-auto">Branch</th>
            <th className="px-4 py-2 w-auto">Channel</th>
            <th className="px-4 py-2 w-auto">Format</th>
            <th className="px-4 py-2 w-auto">Confirm</th>
            <th className="px-4 py-2 w-auto">Status</th>
            <th className="px-4 py-2 w-auto">Action</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 w-auto">{row.date}</td>
              <td className="border px-4 py-2 w-auto">{row.type}</td>
              <td className="border px-4 py-2 w-auto">{row.training_name}</td>
              <td className="border px-4 py-2 w-auto">{row.start_date}</td>
              <td className="border px-4 py-2 w-auto">{row.end_date}</td>
              <td className="border px-4 py-2 w-auto">{row.zone}</td>
              <td className="border px-4 py-2 w-auto">{row.region}</td>
              <td className="border px-4 py-2 w-auto">{row.branch}</td>
              <td className="border px-4 py-2 w-auto">{row.channel}</td>
              <td className="border px-4 py-2 w-auto">{row.format}</td>
              <td className="border px-4 py-2 w-auto">{row.confirmed}</td>
              <td className="border px-4 py-2 w-auto">{row.status}</td>
              <td className="border px-4 py-2 w-auto">
                {selectedRowIndex === index ? (
                  <>
                    <div className=" bg-CustomPurple h-8 w-8 rounded-full flex items-center justify-center font-semibold text-white ml-2  hover:text-mycolor hover:border-2 hover:border-mycolor hover:cursor-pointer">
                      <p>
                        <FontAwesomeIcon icon={faCheckSquare} />
                      </p>
                    </div>
                  </>
                ) : (
                  <div className=" flex space-x-3">
                    <div className="bg-CustomPurple h-8 w-8 rounded-full flex items-center justify-center font-semibold text-white ml-2  hover:text-mycolor hover:border-2 hover:border-mycolor hover:cursor-pointer">
                      <p>
                        <FontAwesomeIcon icon={faEye} />
                      </p>
                    </div>
                    <div className="bg-CustomPurple h-8 w-8 rounded-full flex items-center justify-center font-semibold text-white ml-2  hover:text-mycolor hover:border-2 hover:border-mycolor hover:cursor-pointer">
                      <p>
                        <FontAwesomeIcon icon={faTrash} />
                      </p>
                    </div>
                    <div className="bg-CustomPurple h-8 w-8 rounded-full flex items-center justify-center font-semibold text-white ml-2  hover:text-mycolor hover:border-2 hover:border-mycolor hover:cursor-pointer">
                      <p>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </p>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingTable;
