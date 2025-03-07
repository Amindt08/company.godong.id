"use client";
import DeskripsiForm from "@/components/DeskripsiForm";

export default function DeskripsiPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manajemen Deskripsi</h1>
      <DeskripsiForm />
    </div>
  );
}