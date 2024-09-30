// Set the current year dynamically in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set the last modified date dynamically in the footer
document.getElementById('lastModified').textContent = document.lastModified;

// Fetch members from the JSON file asynchronously
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Ensure the correct path to your JSON file
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Failed to fetch members:', error);
        // Display an error message to the user
        document.getElementById('member-list').innerHTML = '<p class="error">Failed to load members. Please try again later.</p>';
    }
}

// Display the members on the page
function displayMembers(members) {
    try {
        const memberList = document.getElementById('member-list');
        memberList.innerHTML = ''; // Clear the list

        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member-card');

            // Add alt attribute fallback for images
            const altText = member.name || 'Member Image';

            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${altText}">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>${member.description}</p>
                <p><strong>Industry:</strong> ${member.industry}</p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
            `;
            memberList.appendChild(memberDiv);
        });
    } catch (error) {
        console.error('Failed to display members:', error);
    }
}

// Function to get the membership level text
function getMembershipLevel(level) {
    switch (level) {
        case 1:
            return 'Member';
        case 2:
            return 'Silver';
        case 3:
            return 'Gold';
        default:
            return 'Unknown';
    }
}

// Toggle between grid view and list view
document.getElementById('toggleView').addEventListener('click', () => {
    const memberList = document.getElementById('member-list');
    memberList.classList.toggle('grid-view');
    memberList.classList.toggle('list-view');
    
    // Toggle button text for better user experience
    document.getElementById('toggleView').textContent = memberList.classList.contains('grid-view') 
        ? 'Switch to List View' 
        : 'Switch to Grid View';
});

// Fetch the members when the page loads
document.addEventListener('DOMContentLoaded', fetchMembers);