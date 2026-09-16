const menuButton = document.getElementById("menuButton");
const sidebar = document.querySelector(".sidebar");

if (menuButton && sidebar) {

    menuButton.addEventListener("click", function () {

        sidebar.classList.toggle("menu-open");

        const menuIsOpen =
            sidebar.classList.contains("menu-open");

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

        if (menuIsOpen) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });

    const sidebarLinks =
        document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            sidebar.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        });

    });

}


const inventoryFilters =
    document.querySelectorAll(".inventory-filter");

const inventoryRows =
    document.querySelectorAll(".inventory-table tbody tr");


inventoryFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedCategory = filter.textContent.trim();

        inventoryFilters.forEach(function (button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        inventoryRows.forEach(function (row) {

            const category =
                row.children[1].textContent.trim();

            if (
                selectedCategory === "All Items" ||
                category === selectedCategory
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});

const orderFilters =
    document.querySelectorAll(".order-filter");

const orderRows =
    document.querySelectorAll(".orders-table tbody tr");


orderFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedType =
            filter.textContent.trim();

        orderFilters.forEach(function (button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        orderRows.forEach(function (row) {

            const orderType =
                row.children[2].textContent.trim();

            if (
                selectedType === "All Orders" ||
                orderType === selectedType
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});

