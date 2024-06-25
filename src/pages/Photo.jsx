import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Photo() {
    const [photos, setPhotos] = useState([]);
    const [search, setSearch] = useState("");
    const charfilter = photos.filter((photo) => photo.name.toLowerCase().includes(search.toLowerCase()));


    useEffect(() => {
        getPhotos('https://665736849f970b3b36c864e7.mockapi.io/login1');
    }, []);

    function getPhotos(url) {
        axios.get(url)
            .then(response => {
                setPhotos(response.data);
            })
    }

    const handleDelete = (id) => {
        const deleteUrl = `https://665736849f970b3b36c864e7.mockapi.io/login1/${id}`;

        axios.delete(deleteUrl)
            .then(() => {
                setPhotos(photos.filter(photo => photo.id !== id));
            })
    };

    return (
        <>
                  <div className="max-w-2xl m-28 mx-auto">
            <form>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                        <input type="search" onChange={(e)=>{setSearch(e.target.value)}} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
                        <button type="submit"  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
            </div>


            <div className="m-9 flex flex-wrap bg-base-100 p-9 shadow-xl">
                {charfilter.map(photo => (
                    <div className="text-center m-2" key={photo.id}>
                        <img src={photo.image} alt={photo.name} className="rounded" />
                        <h2>{photo.name}</h2>
                        <Link to={`/${photo.id}`} className="btn btn-primary">View Details</Link>
                        <Link to={`/add`} className="btn btn-primary m-2">Add Photo</Link>
                        <button onClick={() => handleDelete(photo.id)} className="btn m-2 btn-danger">Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
}
