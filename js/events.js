// Event data and functionality
const pastEvents = [
    {
        title: "Annual Cultural Fest 2023",
        date: "December 15, 2023",
        description: "A celebration of diverse cultures through music, dance, and art."
    },
    {
        title: "Tech Symposium",
        date: "November 20, 2023",
        description: "Industry experts shared insights on emerging technologies."
    },
    {
        title: "Sports Meet",
        date: "October 5, 2023",
        description: "Inter-college sports competition with multiple sporting events."
    }
];

const upcomingEvents = [
    {
        title: "Science Exhibition",
        date: "January 15, 2024",
        description: "Showcase of innovative student projects and research work."
    },
    {
        title: "Alumni Meet",
        date: "February 1, 2024",
        description: "Annual gathering of college alumni sharing their experiences."
    },
    {
        title: "Spring Festival",
        date: "March 20, 2024",
        description: "Celebration of spring with music, food, and activities."
    }
];

function createEventCard(event) {
    return `
        <div class="event-card">
            <h4>${event.title}</h4>
            <p><strong>${event.date}</strong></p>
            <p>${event.description}</p>
        </div>
    `;
}

export function initEvents() {
    const pastEventsContainer = document.getElementById('pastEvents');
    const upcomingEventsContainer = document.getElementById('upcomingEvents');

    if (pastEventsContainer && upcomingEventsContainer) {
        pastEventsContainer.innerHTML = pastEvents.map(createEventCard).join('');
        upcomingEventsContainer.innerHTML = upcomingEvents.map(createEventCard).join('');
    }
}