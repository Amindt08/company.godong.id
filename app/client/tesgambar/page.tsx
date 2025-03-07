import ImageFetcher from "@/components/ImageFetcher";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Pilih Gambar Berdasarkan ID</h1>
      
      <div className="flex gap-4">
        <ImageFetcher imageId={1} />
        <ImageFetcher imageId={2} />
        <ImageFetcher imageId={3} />
      </div>
    </div>
  );
}
