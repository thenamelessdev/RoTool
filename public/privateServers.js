setInterval(() => {
    const gameHyperlinks = document.getElementsByClassName("game-card-link");
    if(!location.href.endsWith("/home")) return;
    if(!gameHyperlinks) return console.warn("no game hyperlinks found");

    Array.from(gameHyperlinks).forEach(element => {
        if (element.querySelector(".rotool-show-priv-servers")) return;

        const showPrivateServersBtn = document.createElement("button");

        showPrivateServersBtn.className = "rotool-show-priv-servers";

        const url = element.href;
        let parts = url.split("/");
        const gameId = parts[4];

        showPrivateServersBtn.innerHTML = `<a href="/games/${gameId}#!/game-instances">Private Servers</a>`;

        element.appendChild(showPrivateServersBtn);
    });
}, 1000);