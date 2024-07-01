async function fetchPlayerCount() {
    try {
        const response = await fetch('https://servers-frontend.fivem.net/api/servers/single/4ryxoo');
        const data = await response.json();
        const playerCount = data.Data.players.length; 
        document.getElementById('playerCount').innerText = `${playerCount}`;
    } catch (error) {
        console.error('Error fetching player data:', error);
        document.getElementById('playerCount').innerText = 'Could not fetch player data.';
    }
}

fetchPlayerCount();

setInterval(fetchPlayerCount, 30000);