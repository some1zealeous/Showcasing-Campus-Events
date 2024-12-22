// Countdown Timer functionality
export function initCountdown() {
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

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}