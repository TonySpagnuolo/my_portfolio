const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        const currentlyActive = document.querySelector(".accordion-item.active");

        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove("active");
            currentlyActive.querySelector(".accordion-content").style.maxHeight = null;
        }

        item.classList.toggle("active");

        const content = item.querySelector(".accordion-content");

        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});