"use client";

import { useEffect, useState } from "react";

interface Deskripsi {
  id: number;
  deskripsi: string;
}

export default function DeskripsiById({ id }: { id: number }) {
  const [deskripsi, setDeskripsi] = useState<Deskripsi | null>(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/deskripsi/${id}`)
      .then((res) => res.json())
      .then((data) => setDeskripsi(data))
      .catch((err) => console.error("Gagal mengambil deskripsi:", err));
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {deskripsi ? (
        <p className="text-lg font-semibold">{deskripsi.deskripsi}</p>
      ) : (
        <p>Memuat deskripsi...</p>
      )}
    </div>
  );
}