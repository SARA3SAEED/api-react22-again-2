import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Editphoto() {
    const [newPhoto, setNewPhoto] = useState({
        image: '',
        name: '',
        gender: '',
        species: '',
        origin: '',
        status: '',
        hair: ''
    });

    const id = localStorage.getItem('id');

    useEffect(() => {
        axios.get(`https://665736849f970b3b36c864e7.mockapi.io/login1/${id}`)
            .then(response => {
                setNewPhoto(response.data);
            })
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPhoto({ ...newPhoto, [name]: value });
    };

    const handleAddPhoto = (e) => {
        e.preventDefault();
        axios.put(`https://665736849f970b3b36c864e7.mockapi.io/login1/${id}`, newPhoto)
            .then(() => {
                alert('Photo updated successfully!');
                setNewPhoto({
                    image: '',
                    name: '',
                    gender: '',
                    species: '',
                    origin: '',
                    status: '',
                    hair: ''
                });
                localStorage.clear();
            })
    };

    return (
        <div className="m-9 flex bg-base-100 p-9 shadow-xl">
            <form onSubmit={handleAddPhoto} className="mt-6 w-full max-w-md">
                <h3 className="text-xl mb-4">Edit Photo</h3>
                {['image', 'name', 'gender', 'species', 'origin', 'status', 'hair'].map((field, idx) => (
                    <div className="mb-4" key={idx}>
                        <label className="block text-sm font-bold mb-2" htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        {field === 'hair' ? (
                            <textarea
                                name={field}
                                id={field}
                                value={newPhoto[field]}
                                onChange={handleInputChange}
                                className="textarea textarea-bordered w-full"
                                required
                            />
                        ) : (
                            <input
                                type="text"
                                name={field}
                                id={field}
                                value={newPhoto[field]}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                required
                            />
                        )}
                    </div>
                ))}
                <button type="submit" className="btn btn-primary w-full">Update Photo</button>
                <Link to={`/`} className="btn btn-primary my-1 w-full">Back</Link>
            </form>

            <div className="mx-16 my-28 flex flex-wrap rounded bg-base-300 p-9 shadow-xl">
                <div className="text-center bg-gray-100 p-7 rounded m-14" key={newPhoto.id} style={{ width: '400px' }}>
                    <img src={newPhoto.image} className="rounded" style={{ width: '350px', height: '200px' }} alt={newPhoto.name} />
                    <small>{newPhoto.id}</small>
                    <h2 className='m-3'>{newPhoto.name}</h2>
                    <p>{newPhoto.gender}</p>
                    <p>{newPhoto.species}</p>
                    <p>{newPhoto.origin}</p>
                    <p>{newPhoto.status}</p>
                    <p>{newPhoto.hair}</p>
                </div>
            </div>
        </div>
    );
}
