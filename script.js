/* =========================================
   FLIME BERRY
   Main JavaScript
========================================= */


/* =========================================
   KONFIGURASI WHATSAPP
========================================= */

const WHATSAPP_NUMBER = "6285332557707";


/* =========================================
   PRODUK 03 - 12
========================================= */

const products = [
    {
        image: "images/produk-03.jpg",
        name: "FLIME BERRY Beauty 03",
        price: "Rp199.000",
        oldPrice: "Rp299.000",
        tag: "PROMO"
    },
    {
        image: "images/produk-04.jpg",
        name: "FLIME BERRY Beauty 04",
        price: "Rp199.000",
        oldPrice: "Rp299.000",
        tag: "PROMO"
    },
    {
        image: "images/produk-05.jpg",
        name: "FLIME BERRY Beauty 05",
        price: "Rp229.000",
        oldPrice: "Rp329.000",
        tag: "NEW"
    },
    {
        image: "images/produk-06.jpg",
        name: "FLIME BERRY Beauty 06",
        price: "Rp229.000",
        oldPrice: "Rp329.000",
        tag: "NEW"
    },
    {
        image: "images/produk-07.jpg",
        name: "FLIME BERRY Beauty 07",
        price: "Rp249.000",
        oldPrice: "Rp349.000",
        tag: "BEST SELLER"
    },
    {
        image: "images/produk-08.jpg",
        name: "FLIME BERRY Beauty 08",
        price: "Rp249.000",
        oldPrice: "Rp349.000",
        tag: "BEST SELLER"
    },
    {
        image: "images/produk-09.jpg",
        name: "FLIME BERRY Beauty 09",
        price: "Rp199.000",
        oldPrice: "Rp299.000",
        tag: "PROMO"
    },
    {
        image: "images/produk-10.jpg",
        name: "FLIME BERRY Beauty 10",
        price: "Rp199.000",
        oldPrice: "Rp299.000",
        tag: "PROMO"
    },
    {
        image: "images/produk-11.jpg",
        name: "FLIME BERRY Beauty 11",
        price: "Rp279.000",
        oldPrice: "Rp379.000",
        tag: "LIMITED"
    },
    {
        image: "images/produk-12.jpg",
        name: "FLIME BERRY Beauty 12",
        price: "Rp279.000",
        oldPrice: "Rp379.000",
        tag: "LIMITED"
    }
];


/* =========================================
   RENDER PRODUK
========================================= */

const productGrid = document.querySelector(".products-grid");

products.forEach((product) => {

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
        <div class="product-image">

            <span class="product-tag">
                ${product.tag}
            </span>

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <button
                class="quick-view"
                data-product="${product.name}"
            >
                +
            </button>

        </div>

        <div class="product-content">

            <span class="product-category">
                BEAUTY & WELLNESS
            </span>

            <h3>
                ${product.name}
            </h3>

            <p>
                Pilihan produk FLIME BERRY
                untuk melengkapi rutinitas harian.
            </p>

            <div class="price">

                <del>
                    ${product.oldPrice}
                </del>

                <strong>
                    ${product.price}
                </strong>

            </div>

            <button
                class="buy-button"
                onclick="buyProduct('${product.name}')"
            >
                Beli Sekarang
                <span>→</span>
            </button>

        </div>
    `;

    productGrid.appendChild(card);

});


/* =========================================
   WHATSAPP ORDER
========================================= */

function buyProduct(productName) {

    const message =
        `Halo FLIME BERRY 👋%0A%0A` +
        `Saya tertarik untuk membeli:%0A` +
        `*${productName}*%0A%0A` +
        `Mohon info harga, stok dan cara pemesanannya.`;

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(url, "_blank");
}


/* =========================================
   COUNTDOWN
========================================= */

const countdownDate = new Date();

countdownDate.setDate(
    countdownDate.getDate() + 3
);


function updateCountdown() {

    const now = new Date().getTime();

    const distance =
        countdownDate.getTime() - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days =
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   FAQ
========================================= */

document.querySelectorAll(".faq-question")
.forEach((question) => {

    question.addEventListener("click", () => {

        const item =
            question.parentElement;

        const answer =
            item.querySelector(".faq-answer");

        const isActive =
            item.classList.contains("active");


        document
            .querySelectorAll(".faq-item")
            .forEach((faq) => {

                faq.classList.remove("active");

                faq.querySelector(".faq-answer")
                    .style.maxHeight = null;

            });


        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =========================================
   PRODUCT MODAL
========================================= */

const modal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalName =
    document.getElementById("modalProductName");

const modalBuy =
    document.getElementById("modalBuy");


document.addEventListener("click", (event) => {

    const button =
        event.target.closest(".quick-view");

    if (!button) return;

    const product =
        button.dataset.product;

    modalName.textContent =
        product;

    modal.classList.add("show");

    modalBuy.onclick = () => {

        buyProduct(product);

    };

});


function closeModal() {

    modal.classList.remove("show");

}


modalClose.addEventListener(
    "click",
    closeModal
);


document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeModal
    );


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.querySelector(".nav-menu");


menuToggle.addEventListener("click", () => {

    const opened =
        navMenu.classList.toggle("mobile-open");

    if (opened) {

        navMenu.style.display = "flex";

        navMenu.style.position = "absolute";

        navMenu.style.top = "70px";

        navMenu.style.left = "0";

        navMenu.style.width = "100%";

        navMenu.style.padding = "20px";

        navMenu.style.background = "#fffaf7";

        navMenu.style.flexDirection = "column";

        navMenu.style.gap = "18px";

    } else {

        navMenu.style.display = "";

    }

});


/* =========================================
   ESC CLOSE MODAL
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});