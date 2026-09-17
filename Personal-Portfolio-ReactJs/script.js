// const setFavicon = (iconName) => {
//     let favicon = document.querySelector("link[rel='icon']");

//     if (!favicon) {
//         favicon = document.createElement("link");
//         favicon.rel = "icon";
//         document.head.appendChild(favicon);
//     }

//     favicon.href = `/${iconName}`;
// };

// document.addEventListener("visibilitychange", function () {
//     if (document.visibilityState === "visible") {
//         document.title = "Adeel Ahmad | Portfolio";
//         setFavicon("favicon.png");
//     } else {
//         document.title = "Come Back To Portfolio";
//         setFavicon("favhand.png");
//     }
// });

// if (document.visibilityState === "visible") {
//     setFavicon("favicon.png");
// }


const setFavicon = (iconName) => {
  // ⚡ Bulletproof selector matching any rel icon variation (shortcut icon, icon, dual quotes)
  let favicon = document.querySelector("link[rel*='icon']");

  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    document.head.appendChild(favicon);
  }

  // ⚡ Enforce a clean, absolute root path URL string with a single slash
  favicon.href = `/${iconName.replace(/^\//, "")}`;
};

// Main Visibility Change Event Loop
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    document.title = "Adeel Ahmad | Portfolio";
    setFavicon("favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    setFavicon("favhand.png");
  }
});

// Sync Initial State Handler on Page Mount
if (document.visibilityState === "visible") {
  setFavicon("favicon.png");
}
