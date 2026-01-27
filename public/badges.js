(async () => {
    try{
        const response = await fetch("https://thenamelessdev.github.io/rotool-website/config/badges.json");
        if(!response.ok){
            return console.warn("error getting the badges - RoTool");
        }
        const json = await response.json();
        setInterval(() => {
            json.badges.forEach(badge => {
                if(location.href.includes(badge.id)){
                    const displayNameElement = document.getElementById("profile-header-title-container-name");
                    if(!displayNameElement) return console.warn("display name element not found - RoTool");
                    if(displayNameElement.textContent.includes(badge.text)) return;
                    if(badge.color){
                        displayNameElement.style.setProperty("color", badge.color, "important");
                    }
                    displayNameElement.textContent = `${displayNameElement.textContent} - ${badge.text}`;
                }
            });
        }, 1000);
    }
    catch{
        console.warn("error getting the badges - RoTool");
    }
})();