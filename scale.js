function setScale() {
    const scale = window.innerWidth / 1440;
    document.querySelector('meta[name="viewport"]')
        .setAttribute('content', `width=1440, initial-scale=${scale}, user-scalable=yes`);
}
window.addEventListener('load', setScale);
