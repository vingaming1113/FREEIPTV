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

        const randomIncrement = Math.floor(Math.random() * (10000000000 - 1000000 + 1)) + 1000000;
        dailyGenerated += randomIncrement;
        localStorage.setItem('dailyGenerated', dailyGenerated);
        dailyGeneratedElement.textContent = dailyGenerated.toLocaleString();
    }, 100);
});

function generateRoBUCKS() {
    const usernameElement = document.getElementById('username');
    const amountElement = document.getElementById('amount');
    const resultElement = document.getElementById('result');
    const username = usernameElement.value;
    const amount = parseInt(amountElement.value);
    
    if (username && amount > 0) {
        resultElement.textContent = `${username}, you have generated ${amount.toLocaleString()} roBUCKS!`;
    } else {
        resultElement.textContent = 'Please enter a valid username and amount.';
    }
}

