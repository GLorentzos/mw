async function fetchPlayerData() {
    try {
        const response = await fetch('https://servers-frontend.fivem.net/api/servers/single/4ryxoo');
        const data = await response.json();

        const playerCount = data.Data.players.length;
        const maxSlots = data.Data.sv_maxclients;

        document.getElementById('playerCount').innerText = `Online ${playerCount}/${maxSlots}`;
    } catch (error) {
        console.error('Error fetching player data:', error);
        document.getElementById('playerCount').innerText = 'Offline';
    }
}

fetchPlayerData();

setInterval(fetchPlayerData, 30000);