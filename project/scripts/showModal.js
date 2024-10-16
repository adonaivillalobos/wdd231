// Function to show the modal dialog
function showModal(itemId) {
    const modalContainer = document.getElementById('modal-container');
    const modalHTML = `
      <div class="modal">
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <button class="close-modal">Close</button>
      </div>
    `;
  
    // Use template literals to build the modal HTML
    const modalElement = document.createElement('div');
    modalElement.innerHTML = modalHTML;
    modalContainer.appendChild(modalElement);
  
    // Add event listener to the close button
    const closeButton = document.querySelector('.close-modal');
    closeButton.addEventListener('click', () => {
      modalContainer.removeChild(modalElement);
    });
  
    // Fetch the item data from local storage
    const data = JSON.parse(localStorage.getItem('data'));
    const item = data.find((item) => item.id === parseInt(itemId));
  
    // Update the modal content
    const modalTitle = document.querySelector('.modal h2');
    const modalContent = document.querySelector('.modal p');
    modalTitle.textContent = item.title;
    modalContent.textContent = item.body;
  }
  
  export { showModal };