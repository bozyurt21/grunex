if (window.location.pathname.includes("refs.html")) {
    window.history.replaceState({}, "", "/dokumanlar");
}

if (window.location.pathname.includes("about.html")) {
    window.history.replaceState({}, "", "/hakkimizda");
}
if (window.location.pathname.includes("service1.html")) {
    window.history.replaceState({}, "", " /uzunDönemliKurumsalTicari&BinekFiloKiralamaHizmeti");
}
if (window.location.pathname.includes("service2.html")) {
    window.history.replaceState({}, "", "/soğukZincirTaşimalari");
}
if (window.location.pathname.includes("service3.html")) {
    window.history.replaceState({}, "", "/soğukZincirDepoÇözümleri");
}
if (window.location.pathname.includes("service4.html")) {
    window.history.replaceState({}, "", "/e-TicaretLojistiği");
}

if (window.location.pathname.includes("services.html")) {
    window.history.replaceState({}, "", "/hizmetlerimiz");
}
if (window.location.pathname.includes("service5.html")) {
    window.history.replaceState({}, "", "/ilaçLojistiği");
}
if (window.location.pathname.includes("blog.html")) {
    window.history.replaceState({}, "", "/blog");
}

document.addEventListener("DOMContentLoaded", function () {
    // Define mappings for blog URLs
    const blogURLMapping = {
        "blog1.html": "e-ticaret-ruzgar",
        "blog2.html": "yeni-seyler-soylemek",
        "blog3.html": "bireysel-girisimcilerin-etkisi"
    };

    // Get the last part of the current URL path
    const pathSegments = window.location.pathname.split("/");
    const filename = pathSegments.pop(); // Get the last part (e.g., "blog1.html")

    // If the filename is in the mapping, replace the URL
    if (blogURLMapping[filename]) {
        const newUrl = `/blog/${blogURLMapping[filename]}`;
        window.history.replaceState(null, "", newUrl);
    }
});


if (window.location.pathname.includes("contact.html")) {
    window.history.replaceState({}, "", "/iletisim");
}
if (window.location.pathname.includes("index.html")) {
    window.history.replaceState({}, "", "/");
}

if (window.location.pathname.includes("getOffer.html")) {
    window.history.replaceState({}, "", "/teklifAl");
}