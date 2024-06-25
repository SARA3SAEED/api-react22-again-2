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
        if (window.confirm("Are you sure you want to delete this photo?")) {
        const deleteUrl = `https://665736849f970b3b36c864e7.mockapi.io/login1/${id}`;

        axios.delete(deleteUrl)
            .then(() => {
                setPhotos(photos.filter(photo => photo.id !== id));
            })
        }
    };

    const handleUpDate = (photo) => {
        localStorage.setItem("id",photo.id)
        localStorage.setItem("name",photo.name)
        localStorage.setItem("image",photo.image)
        localStorage.setItem("gender",photo.gender)
        localStorage.setItem("species",photo.species)
        localStorage.setItem("status",photo.status)
        localStorage.setItem("origin",photo.origin)
        localStorage.setItem("hair",photo.hair)
    };

    return (
        <>
            <div className="max-w-2xl m-28  mx-auto">
            <form> 
            <Link to={`/add`} className="btn btn-primary my-2 w-full">Add Photo</Link>
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


            <div className="mx-9 flex flex-wrap  bg-base-100 p-9 shadow-xl">
                {charfilter.length > 0 ? (
                    charfilter.map(photo => (
                        <div className="text-center bg-gray-100 p-7 rounded m-7" key={photo.id} style={{ width: '300px' }}>
                            <img src={photo.image} alt={photo.name} className="rounded" style={{width: '250px', height: '200px' }} />
                            <h2>{photo.name}</h2>
                            <Link to={`/${photo.id}`} className="btn btn-primary" style={{width: '80px'}} >View Details</Link>
                            <button onClick={() => handleDelete(photo.id)}   className="btn m-2 btn-danger" style={{width: '50px'}}>Delete</button>
                            <Link to='/edit' onClick={handleUpDate(photo)} className="btn m-2 btn-danger" style={{width: '50px'}} >UpDate</Link>
                        </div>
                    ))
                ) : (
                
                    <div className="text-center m-2 justify-center">
                        <h2>Oops, no photos found!</h2>
                        <img className="rounded"  src="data:image/jpeg;base64,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" alt="" />
                    </div>
                
                )}
            </div>
        </>
    );
}
