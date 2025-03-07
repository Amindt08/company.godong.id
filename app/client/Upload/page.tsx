"use client";

import { useState } from "react";
import axios from "axios";

export default function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Pilih file terlebih dahulu");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      await axios.post("http://127.0.0.1:8000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Upload berhasil!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload gagal");
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-4">Upload Gambar</h1>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button onClick={handleUpload} className="bg-blue-500 text-white p-2 rounded">
        Upload
      </button>
    </div>
  );
}
