import DATA from "../../Datas/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPenToSquare,
    faCheckSquare,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ProgressTable=()=>{
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    return(
        <div className="mx-auto flex justify-center h-screen items-start overflow-scroll">
            {/**this is coming from training table */}
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
                        <th className="px-4 py-2 w-auto">Format</th>
                        <th className="px-4 py-2 w-auto">Confirmed</th>
                        <th className="px-4 py-2 w-auto">Status</th>
                        <th className="px-4 py-2 w-auto">Manage</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
        </div>
    );
};

export default ProgressTable;