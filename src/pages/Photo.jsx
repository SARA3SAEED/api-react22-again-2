import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Photo() {
    const [photos, setPhotos] = useState([]);

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
            <div className="m-9 flex flex-wrap bg-base-100 p-9 shadow-xl">
                {photos.map(photo => (
                    <div className="text-center m-2" key={photo.id}>
                        <img src={photo.image} alt={photo.name} className="rounded" />
                        <small>{photo.id}</small>
                        <h2>{photo.name}</h2>
                        <p>{photo.gender}</p>
                        <p>{photo.species}</p>
                        <p>{photo.origin}</p>
                        <p>{photo.status}</p>
                        <Link to={`/${photo.id}`} className="btn btn-primary">View Details</Link>
                        <Link to={`/add`} className="btn btn-primary m-2">Add Photo</Link>
                        <button onClick={() => handleDelete(photo.id)} className="btn m-2 btn-danger">Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
}
