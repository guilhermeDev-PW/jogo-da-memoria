 document.addEventListener("DOMContentLoaded", () => {
    const recordsList = document.getElementById("recordsList");
    const records = JSON.parse(localStorage.getItem("memoryGameRecords")) || [];

    if (records.length === 0) {
        recordsList.innerHTML = "<li>Nenhum recorde salvo ainda. Jogue para registrar o seu!</li>";
    } else {
        records.forEach((record, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${index + 1}. ${record.player}</span>
                <span>Tempo: ${record.time}s</span>
                <span>Pontos: ${record.points}</span>
                `;
            recordsList.appendChild(listItem);
        });
    }
});