export const serviceLoader = async ({ params }) => {
    const { category, id } = params;
    let apiUrl = '';
  
    switch (category) {
      case 'hairservices':
        apiUrl = `http://localhost:5000/hairservices/${id}`;
        break;
      case 'facialservices':
        apiUrl = `http://localhost:5000/facialservices/${id}`;
        break;
      case 'yogaServices':
        apiUrl = `http://localhost:5000/yogaServices/${id}`;
        break;  
      case 'gymservices':
        apiUrl = `http://localhost:5000/gymservices/${id}`;
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