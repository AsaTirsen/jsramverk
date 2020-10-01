function baseUrl() {
    let domain = window.location.href;
    console.log(domain);
    if (domain.includes("localhost") || domain.includes("127.0.0.1")) {
        return "http://localhost:1337/";
    } else {
        return "http://me-api.asatirsen.me/";
    }
}

export {baseUrl};
