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

    // Remove the "active-day-button" class from all day buttons
    const dayButtons = document.querySelectorAll('.day-button');
    dayButtons.forEach(button => {
        button.classList.remove('active-day-button');
    });

    // Add the "active-day-button" class to the clicked day button
    document.getElementById(`day${day}`).classList.add('active-day-button');
}

// Add event listeners to day buttons
document.getElementById('day1').addEventListener('click', () => showDay('1'));
document.getElementById('day2').addEventListener('click', () => showDay('2'));
document.getElementById('day3').addEventListener('click', () => showDay('3'));

// Show the schedule for Day 1 by default and highlight the button
showDay('1');
document.getElementById('day1').classList.add('active-day-button');

