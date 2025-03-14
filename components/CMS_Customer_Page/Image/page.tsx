"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProgressSpinner } from "primereact/progressspinner";
import { apiEndpoints } from "@/app/api/api";

interface Image {
    Kode: string;
    image: string;
}

interface Props {
    id: number | string;
}

const GetImageById: React.FC<Props> = ({ id }) => {
    const [data, setData] = useState<Image | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchDataById(id.toString());
        }
    }, [id]);

    const fetchDataById = async (id: string) => {
        try {
            const response = await axios.get(`${apiEndpoints.GETIMAGE}/${id}`);
            console.log("Response data:", response.data);

            if (response.data) {
                setData(response.data); // Jika API mengembalikan objek
            } else {
                console.error("Gambar tidak ditemukan!");
            }
        } catch (error) {
            console.error("Gagal mengambil Image berdasarkan ID:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="card text-center">
                <ProgressSpinner style={{ width: "20px", height: "20px" }} strokeWidth="8" animationDuration=".5s" />
            </div>
        );
    }

    if (!data) {
        return <p className="text-gray-400">Gambar tidak ditemukan.</p>;
    }

    return (
        <div>
            <img src={`http://localhost:8000/images/${data.image}`} alt={`Gambar ${data.Kode}`} style={{ maxWidth: "100%", height: "auto" }} />
        </div>
    );
};

export default GetImageById;
