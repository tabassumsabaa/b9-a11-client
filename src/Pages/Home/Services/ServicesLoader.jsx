export const serviceLoader = async ({ params }) => {
    const { category, id } = params;
    let apiUrl = '';
  
    switch (category) {
      case 'hairservices':
        apiUrl = `https://sabfitzone-server.vercel.app/hairservices/${id}`;
        break;
      case 'facialservices':
        apiUrl = `https://sabfitzone-server.vercel.app/facialservices/${id}`;
        break;
      case 'yogaServices':
        apiUrl = `https://sabfitzone-server.vercel.app/yogaServices/${id}`;
        break;  
      case 'gymservices':
        apiUrl = `https://sabfitzone-server.vercel.app/gymservices/${id}`;
        break;
      default:
        throw new Error('Invalid category');
    }
  
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch service');
    }
  
    const service = await response.json();
    return service;
  };