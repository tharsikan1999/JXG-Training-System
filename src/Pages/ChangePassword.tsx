
const ChangePassword = () => {
    return (
        <div>
            <h2 className="text-lg font-semibold py-4">Change Password</h2>
            <form className="grid justify-items-start px-20">
                <div className="flex flex-col py-2">
                    <label className=" font-semibold text-gray-500 mb-2">
                       Current Password
                    </label>
                    <input className="border p-2 rounded-lg " type="password" />
                    <label className=" font-semibold text-gray-500 mb-2">
                        New Password
                    </label>
                    <input className="border p-2 rounded-lg " type="password" />
                    <label className=" font-semibold text-gray-500 mb-2">
                        Confirm Password
                    </label>
                    <input className="border p-2 rounded-lg " type="password" />
                    <div className="pt-6 pl-4">
                    <button
                        className="text-white bg-CustomYellow
                         px-10 py-2 focus:outline-none rounded-lg 
                         text-sm mr-5 font-semibold text-center 
                         transition-transform duration-300 ease-in-out transform hover:scale-105">
                        Change Password{" "}
                    </button>
                    </div>
                </div>
            </form>
        </div>
    );
  };
  
  export default ChangePassword;