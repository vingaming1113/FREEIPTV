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

        const randomIncrement = Math.floor(Math.random() * (83828379182738473838373 - 8294726152749484748757372648373 + 839382948293875)) + 9273928383828282;
        dailyGenerated += randomIncrement;
        localStorage.setItem('dailyGenerated', dailyGenerated);
        dailyGeneratedElement.textContent = dailyGenerated.toLocaleString();
    }, 25);
});

function generateRoBUCKS() {
    const usernameElement = document.getElementById('username');
    const amountElement = document.getElementById('amount');
    const resultElement = document.getElementById('result');
    const loadingElement = document.getElementById('loading');
    const timeElement = document.getElementById('time');
    const username = usernameElement.value;
    const amount = parseInt(amountElement.value);
    const time = timeElement.value;
    
    if (username && amount > 0) {
        resultElement.textContent = '';
        loadingElement.style.display = 'block';
        setTimeout(() => {
            loadingElement.style.display = 'none';
            window.location.href = `success.html?username=${encodeURIComponent(username)}&amount=${amount}&time=${time}`;
        }, 2000);
    } else {
        resultElement.textContent = 'Please enter a valid username, and a valid amount of IPTV.';
    }
}
