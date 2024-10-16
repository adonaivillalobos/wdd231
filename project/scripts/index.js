import { fetchData } from './fetchData.js';
import { generateItems } from './generateItems.js';
import { showModal } from './showModal.js';

// Initialize the application
async function init() {
  try {
    // Fetch data from the remote API
    const data = await fetchData();

    // Store the data in local storage
    localStorage.setItem('data', JSON.stringify(data));

    // Generate the list of items
    generateItems(data);
  } catch (error) {
    console.error(error);
  }
}

// Call the init function
init();