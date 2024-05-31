import { TEInput } from "tw-elements-react";
import Calender from "../Components/Calender";
const CreateTraining =()=>{
    return(
        <div>
            <form>
                <div className="grid grid-cols-2">
                    {/**Colomn 1 */}
                    <div>
                        <div> 
                        <Calender/>
                        </div>                     
                    </div>
                    {/**Colomn 1 */}
                    <div>
                        <div>
                        <label>Status</label>
                        <input
                            className="border p-2 rounded-lg "
                            type="text"
                            placeholder=""
                            />
                        </div>
                        <div>
                        <label>Date</label>  
                        </div>
                        <div>
                        <label>Date</label>  
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateTraining;
