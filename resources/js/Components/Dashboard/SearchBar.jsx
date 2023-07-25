import React from 'react'

const SearchBar = () => {
    return (
        <div className="h-fit bg-info-content rounded-none rounded-t-lg shadow-xl image-full">
            <div className="card-body">
                <div className="form-control flex-row justify-center">
                    <button className="btn bg-base-100 btn-square rounded-none rounded-l-lg border-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <input type="text" placeholder="Search" className="input input-bordered rounded-none rounded-r-lg border-0 w-full md:w-10/12" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar