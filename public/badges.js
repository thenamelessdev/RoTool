let badges;
let badge = [];

async function getBadges() {
    try {
        const response = await fetch("https://thenamelessdev.github.io/rotool-website/config/badges.json");
        if (!response.ok) {
            return console.warn("Bad response");
        }

        return await response.json();
    }
    catch{
        return console.warn("error while fetching badge config - RoTool");
    }
}

(async () => {
    badges = await getBadges();
    if (!badges || !badges.owners) return;

    badges.owners.forEach(userId => {
        if (location.href.includes(userId)) {
            badge.push("Owner");
        }
    });
})();

setInterval(() => {
    if(badge == []) return;

    badge.forEach(badgeName => {
        const displayNameElement = document.getElementById("profile-header-title-container-name");
        if(!displayNameElement) return console.warn("display name element not found - RoTool");
        if(displayNameElement.textContent.includes(badgeName)) return;
        displayNameElement.style.color = "green";
        displayNameElement.textContent = `${displayNameElement.textContent} - ${badgeName}`
    });
}, 1000);