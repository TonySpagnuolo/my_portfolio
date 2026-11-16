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

(function () {
    const listLinks = document.querySelectorAll(".list-link");
    const listViews = document.querySelectorAll(".list-view");

    function openList(id) {
        const view = document.getElementById(id);
        if (!view) return;
        view.scrollTop = 0;
        view.classList.add("open");
        view.setAttribute("aria-hidden", "false");
    }

    function closeLists() {
        listViews.forEach(view => {
            view.classList.remove("open");
            view.setAttribute("aria-hidden", "true");
        });
    }

    listLinks.forEach(link => {
        link.addEventListener("click", () => openList(link.dataset.target));
    });

    document.querySelectorAll(".list-close").forEach(btn => {
        btn.addEventListener("click", closeLists);
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeLists();
    });
})();