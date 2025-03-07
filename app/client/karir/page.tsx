'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Footer from '@/components/Footer';
import { Search, MapPin } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Content Marketing Specialist', location: 'Kota Madiun, Jawa Timur', description: 'Deskripsi pekerjaan...', date: '08/08/2024' },
  { id: 2, title: 'Media Relations', location: 'Kota Madiun, Jawa Timur', description: 'Deskripsi pekerjaan...', date: '08/08/2024' },
  { id: 3, title: 'Public Relations Manager', location: 'Kab Madiun, Jawa Timur', description: 'Deskripsi pekerjaan...', date: '08/08/2024' },
  { id: 4, title: 'SEO Specialist', location: 'Kota Madiun, Jawa Timur', description: 'Deskripsi pekerjaan...', date: '08/08/2024' },
  { id: 5, title: 'PPC Specialist', location: 'Kota Madiun, Jawa Timur', description: 'Deskripsi pekerjaan...', date: '08/08/2024' },
];

export default function CareerPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [filters, setFilters] = useState({ 'Kota Madiun': false, 'Kab Madiun': false });

  const handleFilterChange = (city: keyof typeof filters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [city]: !prevFilters[city],
    }));
  };
  
  const handleJobClick = () => {
    router.push(`/client/detailKarir`);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = job.location.toLowerCase().includes(locationTerm.toLowerCase());
    const matchesFilter =
      (!filters['Kota Madiun'] && !filters['Kab Madiun']) ||
      (filters['Kota Madiun'] && job.location.includes('Kota Madiun')) ||
      (filters['Kab Madiun'] && job.location.includes('Kab Madiun'));

    return matchesSearch && matchesLocation && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-green-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-center">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Kami lebih dari sekadar penyedia software. Kami adalah solusi untuk Anda.
          </h1>
          <p className="text-gray-700 mt-2 leading-relaxed text-base md:text-lg">
            Kami paham bahwa menemukan solusi teknologi yang tepat dan efisien untuk bisnis Anda bisa menjadi perjalanan yang menantang.
            Tujuan kami adalah mempermudah proses tersebut dan menciptakan pengalaman pengguna yang memperkaya—solusi yang akan Anda andalkan setiap hari.
          </p>
          <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
            Lihat Lowongan Yang Tersedia
          </button>
        </div>
        <img src="/karir.png" alt="Hiring" className="w-60 md:w-72 h-auto mt-6 md:mt-0 md:ml-6" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">Bergabung Dengan Kami</h2>
        <p className="text-center text-gray-500 mb-8">Terbuka Saat Ini</p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <div className="relative w-full md:w-1/3">
            <input 
              type="text" 
              placeholder="Jabatan atau keterampilan" 
              className="w-full p-3 pl-10 border rounded-md" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
          <div className="relative w-full md:w-1/3">
            <input 
              type="text" 
              placeholder="Kota atau daerah" 
              className="w-full p-3 pl-10 border rounded-md" 
              value={locationTerm} 
              onChange={(e) => setLocationTerm(e.target.value)}
            />
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">Cari</button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md md:sticky md:top-20">
            <h3 className="font-medium text-lg mb-2">Filters</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="kota-madiun" checked={filters['Kota Madiun']} onChange={() => handleFilterChange('Kota Madiun')} />
                <Label htmlFor="kota-madiun">Kota Madiun</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="kab-madiun" checked={filters['Kab Madiun']} onChange={() => handleFilterChange('Kab Madiun')} />
                <Label htmlFor="kab-madiun">Kab Madiun</Label>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex flex-col gap-6">
              {filteredJobs.map((job) => (
                <div key={job.id} onClick={handleJobClick} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 cursor-pointer hover:bg-gray-50">
                  <h3 className="text-lg md:text-xl font-semibold text-green-700">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">{job.description}</p>
                  <p className="text-gray-400 text-sm mt-2 font-medium">Waktu Penuh - {job.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}