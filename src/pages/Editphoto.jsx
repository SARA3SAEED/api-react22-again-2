

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Editphoto() {
    const [newPhoto, setNewPhoto] = useState({
        image: localStorage.getItem('image'),
        name: localStorage.getItem('name'),
        gender: localStorage.getItem('gender'),
        species: localStorage.getItem('species'),
        origin: localStorage.getItem('origin'),
        status: localStorage.getItem('status'),
        hair: localStorage.getItem('hair'),
    });

    const id = localStorage.getItem('id');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPhoto({ ...newPhoto, [name]: value });
    };

    const handleAddPhoto =  (e) => {
        e.preventDefault();
        axios.put(`https://665736849f970b3b36c864e7.mockapi.io/login1/${id}`, newPhoto); 
        alert('Photo added successfully!');
        setNewPhoto({
            image: '',
            name: '',
            gender: '',
            species: '',
            origin: '',
            status: '',
            hair: ''
        });    
    };

    return (
        // <div className="m-9 flex flex-col items-center bg-base-100 p-9 shadow-xl">
        <div className="m-9 flex   bg-base-100 p-9 shadow-xl">

            <form onSubmit={handleAddPhoto} className="mt-6 w-full max-w-md">
                <h3 className="text-xl mb-4">Add New Photo</h3>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        value={newPhoto.image}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={newPhoto.name}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                    <input
                        type="text"
                        name="gender"
                        id="gender"
                        value={newPhoto.gender}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="species">Species</label>
                    <input
                        type="text"
                        name="species"
                        id="species"
                        value={newPhoto.species}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="origin">Origin</label>
                    <input
                        type="text"
                        name="origin"
                        id="origin"
                        value={newPhoto.origin}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="status">Status</label>
                    <input
                        type="text"
                        name="status"
                        id="status"
                        value={newPhoto.status}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="hair">Hair</label>
                    <textarea
                        name="hair"
                        id="hair"
                        value={newPhoto.hair}
                        onChange={handleInputChange}
                        className="textarea textarea-bordered w-full"
                        required
                    />
                </div>
                 <button type="submit" className="btn btn-primary w-full">Add Photo</button>
            </form>

            
            <div className="mx-16 flex flex-wrap rounded bg-base-100 p-9 shadow-xl">
               
            <div className="text-center bg-gray-100 p-7 rounded m-7" key={newPhoto.id} style={{ width: '400px' }}>
                            <img src={newPhoto.image}  className="rounded " style={{width: '350px', height: '200px' }} />
                            <small >{newPhoto.id}</small>
                            <h2 className='m-3'>{newPhoto.name}</h2>
                            <p>{newPhoto.gender}</p>
                            <p>{newPhoto.species}</p>
                            <p>{newPhoto.origin}</p>
                            <p>{newPhoto.status}</p>
                            <p>{newPhoto.hair}</p>
                        </div>
                        <Link to={`/`} className="btn btn-primary my-1 w-full">Back page</Link>

            </div>
        </div>
    );
}
