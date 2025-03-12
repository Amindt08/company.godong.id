"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '@/app/api/api';
import { ProgressSpinner } from 'primereact/progressspinner';

interface Title {
    Kode: string;
    Keterangan: string;
}

interface Props {
    id: number | string; // Bisa menerima number atau string
}

const GetTitleById: React.FC<Props> = ({ id }) => {
    const [data, setData] = useState<Title | null>(null);

    useEffect(() => {
        if (id) {
            fetchDataById(id.toString()); // Convert id menjadi string
        }
    }, [id]);

    const fetchDataById = async (id: string) => {
        try {
            const response = await axios.get(`${apiEndpoints.GETTITLE}/${id}`);
            setData(response.data);
        } catch (error) {
            console.error("Gagal mengambil data berdasarkan ID:", error);
        }
    };

    if (!data) {
        return <div className="card text-center">
            <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    }

    return (
        <div>
            <p>{data.Keterangan}</p>
        </div>
    );
};

export default GetTitleById;



