// Product Information
const products = [

    {
        name: "Smartphone",
        category: "electronics",
        price: 15000,
        rating: 4.5,
        icon: "📱"
    },

    {
        name: "Laptop",
        category: "electronics",
        price: 55000,
        rating: 4.8,
        icon: "💻"
    },

    {
        name: "Headphones",
        category: "electronics",
        price: 2000,
        rating: 4.2,
        icon: "🎧"
    },

    {
        name: "Smart Watch",
        category: "electronics",
        price: 5000,
        rating: 4.6,
        icon: "⌚"
    },

    {
        name: "T-Shirt",
        category: "clothing",
        price: 800,
        rating: 4.1,
        icon: "👕"
    },

    {
        name: "Jacket",
        category: "clothing",
        price: 2500,
        rating: 4.7,
        icon: "🧥"
    },

    {
        name: "Shoes",
        category: "clothing",
        price: 1800,
        rating: 4.4,
        icon: "👟"
    },

    {
        name: "Backpack",
        category: "accessories",
        price: 1200,
        rating: 4.3,
        icon: "🎒"
    },

    {
        name: "Sunglasses",
        category: "accessories",
        price: 700,
        rating: 4.0,
        icon: "🕶️"
    }

];


// Get HTML Elements

const productList = document.getElementById("productList");

const categoryFilter =
    document.getElementById("categoryFilter");

const priceFilter =
    document.getElementById("priceFilter");

const sortFilter =
    document.getElementById("sortFilter");

const resetBtn =
    document.getElementById("resetBtn");

const productCount =
    document.getElementById("productCount");


// Display Products

function displayProducts(productArray) {

    productList.innerHTML = "";

    productCount.innerText =
        "Showing " + productArray.length + " Products";

    if (productArray.length === 0) {

        productList.innerHTML =
            '<p class="no-products">No products found!</p>';

        return;
    }

    for (let i = 0; i < productArray.length; i++) {

        let product = productArray[i];

        let card = document.createElement("div");

        card.className = "product-card";

        let icon = document.createElement("div");
        icon.className = "product-icon";
        icon.innerText = product.icon;

        let name = document.createElement("h3");
        name.innerText = product.name;

        let category = document.createElement("p");
        category.className = "category";
        category.innerText = product.category;

        let price = document.createElement("p");
        price.className = "price";
        price.innerText = "₹" + product.price;

        let rating = document.createElement("p");
        rating.className = "rating";
        rating.innerText = "⭐ " + product.rating + " / 5";

        let buyBtn = document.createElement("button");
        buyBtn.className = "buy-btn";
        buyBtn.innerText = "Buy Now";

        buyBtn.addEventListener("click", function() {

            alert("You selected: " + product.name);

        });

        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(category);
        card.appendChild(price);
        card.appendChild(rating);
        card.appendChild(buyBtn);

        productList.appendChild(card);

    }

}


// Filter and Sort Products

function filterProducts() {

    let selectedCategory = categoryFilter.value;

    let maxPrice = priceFilter.value;

    let selectedSort = sortFilter.value;

    // Create a copy of original products

    let filteredProducts = [...products];

    // Category Filtering

    if (selectedCategory !== "all") {

        filteredProducts = filteredProducts.filter(
            function(product) {

                return product.category === selectedCategory;

            }
        );

    }

    // Price Filtering

    if (maxPrice !== "") {

        filteredProducts = filteredProducts.filter(
            function(product) {

                return product.price <= Number(maxPrice);

            }
        );

    }

    // Sorting Products

    if (selectedSort === "low") {

        filteredProducts.sort(function(a, b) {

            return a.price - b.price;

        });

    }

    else if (selectedSort === "high") {

        filteredProducts.sort(function(a, b) {

            return b.price - a.price;

        });

    }

    else if (selectedSort === "rating") {

        filteredProducts.sort(function(a, b) {

            return b.rating - a.rating;

        });

    }

    // Display Final Products

    displayProducts(filteredProducts);

}


// Category Filter Event

categoryFilter.addEventListener("change", filterProducts);


// Price Filter Event

priceFilter.addEventListener("input", filterProducts);


// Sorting Event

sortFilter.addEventListener("change", filterProducts);


// Reset All Filters

resetBtn.addEventListener("click", function() {

    categoryFilter.value = "all";

    priceFilter.value = "";

    sortFilter.value = "default";

    displayProducts(products);

});


// Initial Product Display

displayProducts(products);
