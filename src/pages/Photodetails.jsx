import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PhotoDetails() {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotoDetails = async () => {
            try {
                const response = await axios.get(`https://665736849f970b3b36c864e7.mockapi.io/login1/${id}`);
                setPhoto(response.data);
            } catch (error) {
                setError('Error fetching photo details.');
                console.error('Error fetching photo details:', error);
            }
        };

        fetchPhotoDetails();
    }, [id]);

    if (error) {
        return <div className="alert alert-error">{error}</div>;
    }

    if (!photo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="m-9 flex flex-col items-center bg-base-100 p-9 shadow-xl">
            <img src={photo.image} alt={photo.name} className="rounded" />
            <small>{photo.id}</small>
            <h2>{photo.name}</h2>
            <p>{photo.gender}</p>
            <p>{photo.species}</p>
            <p>{photo.origin}</p>
            <p>{photo.status}</p>
            <p>{photo.description}</p>
        </div>
    );
}
