"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';
import { apiEndpoints } from '@/app/api/api';

interface Deskripsi {
    Kode: string;
    Keterangan: string;
}

interface Props {
    id: number | string; // Bisa menerima number atau string
}

const GetDeskripsiById: React.FC<Props> = ({ id }) => {
    const [data, setData] = useState<Deskripsi | null>(null);

    useEffect(() => {
        if (id) {
            fetchDataById(id.toString()); // Convert id menjadi string
        }
    }, [id]);

    const fetchDataById = async (id: string) => {
        try {
            const response = await axios.get(`${apiEndpoints.GETDESKRIPSIPRODUCT}/${id}`);
            setData(response.data);
        } catch (error) {
            console.error("Gagal mengambil data berdasarkan ID:", error);
        }
    };

    if (!data) {
        return <div className="card text-center">
                    <ProgressSpinner style={{ width: '10px', height: '10px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                </div>
    }

    return (
        <div>
            <p>{data.Keterangan}</p>
        </div>
    );
};

export default GetDeskripsiById;