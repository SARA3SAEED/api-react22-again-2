import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function AddPhoto() {
    const [newPhoto, setNewPhoto] = useState({
        image: '',
        name: '',
        gender: '',
        species: '',
        origin: '',
        status: '',
        hair: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPhoto({ ...newPhoto, [name]: value });
    };

    const handleAddPhoto =  (e) => {
        axios.post('https://665736849f970b3b36c864e7.mockapi.io/login1', newPhoto);      
    };

    return (
        <div className="m-9 flex flex-col items-center bg-base-100 p-9 shadow-xl">
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
                <button type="submit" className="btn btn-primary w-full"><Link to={`/`}>Add Photo</Link></button>
            </form>
        </div>
    );
}
