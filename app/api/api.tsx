const api_url = `http://127.0.0.1:8000/api`;

export const apiEndpoints = {
  allNavbar: `${api_url}/getallnavbar`,
  allContent : `${api_url}/getallcontent`,// Tambahkan endpoint lain di sini

  //Deskripsi
  GETDESKRIPSIBYID: (id: string) => `${api_url}/getDeskripsi/${id}`, // GET data berdasarkan ID
  GETDESKRIPSI: `${api_url}/getDeskripsi`, // GET semua data

  //Navbar
  GETNAVBARBYID: (id: string) => `${api_url}/getNavbar/${id}`, // GET data berdasarkan ID
  GETNAVBAR: `${api_url}/getNavbar`, // GET semua data

  //Gambar
  GETGAMBAR: `${api_url}/getGambar`, // GET semua data

  //Judul
  GETTITLE: `${api_url}/getTitle`, // GET semua data

};

export { api_url };