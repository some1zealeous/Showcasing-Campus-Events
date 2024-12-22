// Countdown Timer
function updateCountdown() {
    const newYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
    const now = new Date().getTime();
    const gap = newYear - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);

// Sample Events Data
const pastEvents = [
    {
        title: "Annual Cultural Fest 2023",
        date: "December 15, 2023",
        description: "A celebration of diverse cultures through music, dance, and art."
    },
    {
        title: "Tech Fest",
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

// Function to create event cards
function createEventCard(event) {
    return `
        <div class="event-card">
            <h4>${event.title}</h4>
            <p><strong>${event.date}</strong></p>
            <p>${event.description}</p>
        </div>
    `;
}

// Populate events
document.addEventListener('DOMContentLoaded', () => {
    const pastEventsContainer = document.getElementById('pastEvents');
    const upcomingEventsContainer = document.getElementById('upcomingEvents');

    pastEventsContainer.innerHTML = pastEvents.map(createEventCard).join('');
    upcomingEventsContainer.innerHTML = upcomingEvents.map(createEventCard).join('');

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all viewport sections
    document.querySelectorAll('.viewport').forEach(section => {
        observer.observe(section);
    });
});