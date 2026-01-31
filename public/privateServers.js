setInterval(() => {
    const gameHyperlinks = document.getElementsByClassName("game-card-link");
    if(!gameHyperlinks && location.href.endsWith("/home")) return console.warn("no game hyperlinks found");

    Array.from(gameHyperlinks).forEach(element => {
        if (element.querySelector(".rotool-show-priv-servers")) return;

        const showPrivateServersBtn = document.createElement("button");

        showPrivateServersBtn.className = "rotool-show-priv-servers";

        const url = element.href;
        let parts = url.split("/");
        let base = parts.slice(0, 5)
        const gameId = parts[4];
        const cleanUrl = base.join("/");

        showPrivateServersBtn.innerHTML = `<a href="/games/${gameId}#!/game-instances">Private Servers</a>`;

        element.appendChild(showPrivateServersBtn);
    });
}, 1000);