const api_url = `http://127.0.0.1:8000/api`;

export const apiEndpoints = {
  allNavbar: `${api_url}/getallnavbar`,
  allContent : `${api_url}/getallcontent`,

  //Deskripsi
  GETDESKRIPSI: `${api_url}/getDeskripsi`, 
  GETDESKRIPSIPRODUCT: `${api_url}/getDeskripsiProduct`,
  GETDESKRIPSIMKLITE: `${api_url}/getDeskripsiMkLite`,


  //Navbar
  GETNAVBAR: `${api_url}/getNavbar`, 

  //Topbar
  GETTOPBARPRODUCT: `${api_url}/getTopbarProduct`,

  //Sidebar
  GETSIDEBARPRODUCT:`${api_url}/getSidebarProduct`,

  //Gambar
  GETIMAGE: `${api_url}/getImage`, 
  GETIMAGEPRODUCT: `${api_url}/getImageProduct`,
  GETIMAGEMKLITE: `${api_url}/getImageMkLite`,

  //Judul
  GETTITLE: `${api_url}/getTitle`, 
  GETTITLEPRODUCT: `${api_url}/getTitleProduct`,
  GETTITLEMKLITE: `${api_url}/getTitleMkLite`,

};

export { api_url };