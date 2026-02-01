setInterval(() => {
    const gameHyperlinks = document.getElementsByClassName("game-card-link");
    if(!location.href.endsWith("/home")) return;
    if(!gameHyperlinks) return console.warn("no game hyperlinks found");

    Array.from(gameHyperlinks).forEach(element => {
        if (element.querySelector(".rotool-quick-join-btn")) return;

        const quickJoinBtn = document.createElement("button");

        quickJoinBtn.className = "rotool-quick-join-btn";

        const url = element.href;
        let parts = url.split("/");
        const gameId = parts[4];

        quickJoinBtn.innerHTML = `<a href="roblox://placeId=${gameId}">Quick Join</a>`;
        Object.assign(quickJoinBtn.style, {
            margin: "3px",
            borderRadius: "5px",
            border: "none"
        })

        element.appendChild(quickJoinBtn);
    });
}, 1000);