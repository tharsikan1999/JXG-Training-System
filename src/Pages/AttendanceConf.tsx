import React,{useState} from 'react';
const AttendanceConf: React.FC =()=>{
    const [attendance, setAttendance] = useState<string>('');
    const [reason, setReason] = useState<string>('');
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log({ attendance, reason });
    };
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Confirm Your Attendance</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Training Details</label>
                    <textarea className="w-full border-2 border-CustomYellow p-2 rounded-md" rows={4} disabled>
                        Training Details
                    </textarea>
                </div>
                <div className="mb-4 flex justify-center space-x-4">
                <button
                    type="button"
                    className={`py-2 px-4 rounded ${attendance === 'yes' ? 'bg-amber-200 text-white' : 'bg-amber-200'}
                    focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105`}
                    onClick={() => setAttendance('yes')}
                >
                    Yes
                </button>
                <button
                    type="button"
                    className={`py-2 px-4 rounded ${attendance === 'no' ? 'bg-amber-400 text-white' : 'bg-amber-400'}
                    focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105`}
                    onClick={() => setAttendance('no')}
                >
                    No
                </button>
                </div>
                {attendance === 'no' && (
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Why reject the invitation?</label>
                    <textarea
                    className="w-full border-2 border-CustomYellow p-2 rounded-md"
                    rows={4}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    ></textarea>
                </div>
                )}
                <div className="flex justify-center">
                <button type="submit" className="bg-CustomYellow text-white py-2 px-4 rounded-md focus:outline-none
                transition-transform duration-300 ease-in-out transform hover:scale-105">
                    Submit
                </button>
                </div>
            </form>
    </div>
    );
};

export default AttendanceConf;


