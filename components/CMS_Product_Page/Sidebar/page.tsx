import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoints } from '@/app/api/api';
import { ProgressSpinner } from 'primereact/progressspinner';

interface Navbar {
    Kode: string;
    label: string;
}

interface Props {
    id: number | string; // Bisa menerima number atau string
}

const GetSidebarById: React.FC<Props> = ({ id }) => {
    const [data, setData] = useState<Navbar | null>(null);

    useEffect(() => {
        if (id) {
            fetchDataById(id.toString()); // Convert id menjadi string
        }
    }, [id]);

    const fetchDataById = async (id: string) => {
        try {
            const response = await axios.get(`${apiEndpoints.GETSIDEBARPRODUCT}/${id}`);
            setData(response.data);
        } catch (error) {
            console.error("Gagal mengambil data berdasarkan ID:", error);
        }
    };

    if (!data) {
        return <div className="card ">
            <ProgressSpinner style={{ width: '10px', height: '10px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    }

    return (
        <div>
            <p>{data.label}</p>
        </div>
    );
};

export default GetSidebarById;



