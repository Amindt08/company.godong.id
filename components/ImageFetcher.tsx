// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// interface ImageFetcherProps {
//   imageId: number;
// }

// const ImageFetcher: React.FC<ImageFetcherProps> = ({ imageId }) => {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/image/${imageId}`);
//         setImageUrl(response.data.url);
//       } catch (error) {
//         console.error("Error fetching image:", error);
//         setImageUrl(null);
//       }
//     };

//     fetchImage();
//   }, [imageId]); // Akan dipanggil saat `imageId` berubah

//   return (
//     <div className="flex flex-col items-center">
//       {imageUrl ? (
//         <img src={imageUrl} alt={`Image ${imageId}`} className="w-64 h-64 object-cover rounded-lg shadow-md" />
//       ) : (
//         <p className="text-gray-500">Loading image...</p>
//       )}
//     </div>
//   );
// };

// export default ImageFetcher;
