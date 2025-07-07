document.addEventListener('DOMContentLoaded', () => {
    const targetDateInput = document.getElementById('targetDate');
    const targetTimeInput = document.getElementById('targetTime');
    const startButton = document.getElementById('startButton');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    const messageDisplay = document.getElementById('message');

    let countdownInterval = null;

    startButton.addEventListener('click', () => {
        const targetDateStr = targetDateInput.value;
        const targetTimeStr = targetTimeInput.value;

        if (!targetDateStr || !targetTimeStr) {
            alert('Please select both a target date and time.');
            return;
        }

        const targetDateTimeStr = `${targetDateStr}T${targetTimeStr}:00`;
        const targetDateTime = new Date(targetDateTimeStr).getTime();

        if (isNaN(targetDateTime)) {
            alert('Invalid date or time format. Please use valid inputs.');
            return;
        }

        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        messageDisplay.classList.add('hidden');
        updateCountdown(targetDateTime);

        countdownInterval = setInterval(() => {
            updateCountdown(targetDateTime);
        }, 1000);
    });

    function updateCountdown(targetDateTime) {
        const now = new Date().getTime();
        const distance = targetDateTime - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            daysSpan.textContent = '00';
            hoursSpan.textContent = '00';
            minutesSpan.textContent = '00';
            secondsSpan.textContent = '00';
            messageDisplay.textContent = 'Countdown Finished!';
            messageDisplay.classList.remove('hidden');
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.textContent = String(days).padStart(2, '0');
        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');
    }
});