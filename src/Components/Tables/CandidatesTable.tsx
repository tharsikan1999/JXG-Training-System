import DATA from "../../Datas/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheckSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CandidatesTable = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  return (
    <div className="mx-auto flex justify-center   h-screen items-start auto-scroll">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 w-auto">ID</th>
            <th className="px-4 py-2 w-auto">Candidate Name</th>
            <th className="px-4 py-2 w-auto">NIC</th>
            <th className="px-4 py-2 w-auto">Mobile</th>
            <th className="px-4 py-2 w-auto">Email</th>
            <th className="px-4 py-2 w-auto">AVO</th>
            <th className="px-4 py-2 w-auto">CDS2</th>
            <th className="px-4 py-2 w-auto">CDS3</th>
            <th className="px-4 py-2 w-auto">Status</th>
            <th className="px-4 py-2 w-auto">Actions</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 w-auto">{row.id}</td>
              <td className="border px-4 py-2 w-auto">{row.candidate_name}</td>
              <td className="border px-4 py-2 w-auto">{row.nic}</td>
              <td className="border px-4 py-2 w-auto">{row.mobile}</td>
              <td className="border px-4 py-2 w-auto">{row.email}</td>
              <td className="border px-4 py-2 w-auto">{row.avo}</td>
              <td className="border px-4 py-2 w-auto">{row.cds2}</td>
              <td className="border px-4 py-2 w-auto">{row.cds3}</td>
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

export default CandidatesTable;
