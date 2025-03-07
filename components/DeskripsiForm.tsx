"use client";

import { useState, useEffect } from "react";

interface Deskripsi {
  id: number;
  deskripsi: string;
}

export default function DeskripsiForm() {
  const [deskripsiList, setDeskripsiList] = useState<Deskripsi[]>([]);
  const [deskripsi, setDeskripsi] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Ambil data deskripsi dari API Laravel
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/deskripsi")
      .then((res) => res.json())
      .then((data) => setDeskripsiList(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Tambah atau Edit Deskripsi
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = selectedId ? "PUT" : "POST";
    const url = selectedId
      ? `http://127.0.0.1:8000/api/deskripsi/${selectedId}`
      : "http://127.0.0.1:8000/api/deskripsi";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deskripsi }),
    });

    if (response.ok) {
      setDeskripsi("");
      setSelectedId(null);
      window.location.reload(); // Refresh halaman agar data terupdate
    } else {
      console.error("Gagal menyimpan data");
    }
  };

  // Hapus Deskripsi
  const handleDelete = async (id: number) => {
    const response = await fetch(`http://127.0.0.1:8000/api/deskripsi/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Gagal menghapus data");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">{selectedId ? "Edit Deskripsi" : "Tambah Deskripsi"}</h2>

      {/* Form Input */}
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="border p-2 w-full rounded"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          placeholder="Masukkan deskripsi..."
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          {selectedId ? "Update" : "Tambah"}
        </button>
      </form>

      {/* List Deskripsi */}
      <h2 className="text-xl font-bold mt-6">Daftar Deskripsi</h2>
      {deskripsiList.length === 0 && <p className="text-gray-500">Tidak ada data</p>}
      <ul className="mt-4">
        {deskripsiList.map((item) => (
          <li key={item.id} className="border p-2 rounded mb-2 flex justify-between items-center">
            <span>{item.deskripsi}</span>
            <div>
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setDeskripsi(item.deskripsi);
                }}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}