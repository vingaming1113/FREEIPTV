document.addEventListener('DOMContentLoaded', (event) => {
    const dailyGeneratedElement = document.getElementById('dailyGenerated');
    let dailyGenerated = parseInt(localStorage.getItem('dailyGenerated')) || 0;
    dailyGeneratedElement.textContent = dailyGenerated.toLocaleString();

    setInterval(() => {
        const now = new Date();
        const ukTime = new Date(now.toLocaleString('en-GB', { timeZone: 'Europe/London' }));

        if (ukTime.getHours() === 0 && ukTime.getMinutes() === 0) {
            dailyGenerated = 0;
            localStorage.setItem('dailyGenerated', dailyGenerated);
        }

        const randomIncrement = Math.floor(Math.random() * (3720000000000000000000000000000000000 - 29300739273937347363457834578345783457834578345783457834578345783457834578345783457834578345783457834578345783457834578345783457834578345783457834578838380 + 740050)) + 84728178373973933938273;
        dailyGenerated += randomIncrement;
        localStorage.setItem('dailyGenerated', dailyGenerated);
        dailyGeneratedElement.textContent = dailyGenerated.toLocaleString();
    }, 100);
});

function generateRoBUCKS() {
    const usernameElement = document.getElementById('username');
    const amountElement = document.getElementById('amount');
    const resultElement = document.getElementById('result');
    const loadingElement = document.getElementById('loading');
    const username = usernameElement.value;
    const amount = parseInt(amountElement.value);
    
    if (username && amount > 0) {
        resultElement.textContent = '';
        loadingElement.style.display = 'block';
        setTimeout(() => {
            loadingElement.style.display = 'none';
            window.location.href = `success.html?username=${encodeURIComponent(username)}&amount=${amount}`;
        }, 2000);
    } else {
        resultElement.textContent = 'Please enter a valid username and amount.';
    }
}
