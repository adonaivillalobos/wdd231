// Function to fetch data from the remote API
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export { fetchData };