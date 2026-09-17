const setFavicon = (iconName) => {
    let favicon = document.querySelector("link[rel='icon']");

    if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        document.head.appendChild(favicon);
    }

    favicon.href = `/${iconName}`;
};

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        document.title = "Adeel Ahmad | Portfolio";
        setFavicon("favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        setFavicon("favhand.png");
    }
});

if (document.visibilityState === "visible") {
    setFavicon("favicon.png");
}