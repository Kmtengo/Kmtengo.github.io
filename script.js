// Function to show the schedule for a specific day
function showDay(day) {
    const days = document.querySelectorAll('.day');
    days.forEach(dayElement => {
        dayElement.style.display = 'none';
    });
    const selectedDay = document.querySelectorAll(`.day${day}`);
    selectedDay.forEach(dayElement => {
        dayElement.style.display = '';
    });
}

// Add event listeners to day buttons
document.getElementById('day1').addEventListener('click', () => showDay('1'));
document.getElementById('day2').addEventListener('click', () => showDay('2'));
document.getElementById('day3').addEventListener('click', () => showDay('3'));

// Show the schedule for Day 1 by default
showDay('1');
