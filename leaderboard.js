const schoolLeaderboardData = [
    {
        school: "Roskilde Skole",
        score: 9.8,
        co2: 4.1,
        measurements: 120,
        roadType: "byzone",
        carType: "benzin",
        speed: "lav"
    },
    {
        school: "Køge Skole",
        score: 7.2,
        co2: 5.6,
        measurements: 90,
        roadType: "byzone",
        carType: "benzin",
        speed: "middel"
    },
    {
        school: "Næstved Skole",
        score: 6.5,
        co2: 6.2,
        measurements: 75,
        roadType: "landevej",
        carType: "hybrid",
        speed: "høj"
    },
    {
        school: "Holbæk Skole",
        score: 5.9,
        co2: 6.8,
        measurements: 60,
        roadType: "motorvej",
        carType: "diesel",
        speed: "hurtig"
    }
];


function loadSchoolLeaderboard() {

    const tbody = document.getElementById("leaderboardTableBody");
    tbody.innerHTML = "";

    // sorter efter score (højeste først)
    const sorted = schoolLeaderboardData.sort((a, b) => b.score - a.score);

    for (let i = 0; i < sorted.length; i++) {

        const s = sorted[i];

        tbody.innerHTML +=
            "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + s.school + "</td>" +
                "<td>" + s.co2 + " g</td>" +
                "<td>" + s.measurements + "</td>" +
                "<td>" + s.score + "</td>" +
            "</tr>";
    }
}

function filterLeaderboard(type, value) {

    const tbody = document.getElementById("leaderboardTableBody");
    tbody.innerHTML = "";

    let filtered = schoolLeaderboardData;

    if (type === "road") {
        filtered = schoolLeaderboardData.filter(s => s.roadType === value);
    }

    if (type === "car") {
        filtered = schoolLeaderboardData.filter(s => s.carType === value);
    }

    if (type === "speed") {
        filtered = schoolLeaderboardData.filter(s => s.speed === value);
    }

    filtered = filtered.sort((a, b) => b.score - a.score);

    for (let i = 0; i < filtered.length; i++) {

        const s = filtered[i];

        tbody.innerHTML +=
            "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + s.school + "</td>" +
                "<td>" + s.co2 + " g</td>" +
                "<td>" + s.measurements + "</td>" +
                "<td>" + s.score + "</td>" +
            "</tr>";
    }
}




