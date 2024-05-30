
const SearchBar =() =>{
    return(
        <div className="mb-3 xl:w-96">
            <div className="relative mb-1 flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                        className="relative m-0 block 
                                flex-auto rounded-full
                                border border-solid border-amber-300 
                                bg-transparent bg-clip-padding px-4 py-[0.25rem] 
                                text-base font-normal leading-[1.4] text-gray-500 
                                outline-none transition duration-200 ease-in-out 
                                focus:z-[3] focus:border-amber-400 focus:text-gray-500 
                                focus:shadow-[inset_0_0_0_1px_rgb(248,208,91)] focus:outline-none 
                                dark:border-amber-600 dark:text-amber-200 
                                dark:placeholder:text-amber-200 dark:focus:border-amber-200"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                    {/* <!--Search icon--> */}
                    <span
                        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-amber-400 dark:text-neutral-200"
                        id="basic-addon2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
            </div>
        </div>
    );
};
 export default SearchBar;