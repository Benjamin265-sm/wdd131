document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

        const lastModifiedP = document.getElementById("lastModified");
    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
    }
});