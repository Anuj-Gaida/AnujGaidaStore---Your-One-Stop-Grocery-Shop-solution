document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Wai Wai", price: "Rs 20", image: "/static/images/waiwai.jpg" },
        { name: "Vitamilk Biscuit", price: "RS 10", image: "/static/images/vitamilk.jpg" },
        { name: "Dew", price: "Rs 250", image: "/static/images/dew.jpg" },
        { name: "Zing Noodles", price: "Rs 20", image: "/static/images/zing.jpg" },
        { name: "Lolipop", price: "Rs 5", image: "/static/images/lolipop.jpg" },
        { name: "Barasinghe", price: "Rs 330", image: "/static/images/barasinghe.jpg" },
        { name: "Cheeseballs", price: "Rs 20", image: "/static/images/cheeseballs.jpg" },
        { name: "Glucoes Biscuits", price: "Rs 10", image: "/static/images/glucose.jpg" },
        { name: "Detergent Powder", price: "Rs 20", image: "/static/images/detergent.jpg" },
        { name: "Lifeboy", price: "Rs 55", image: "/static/images/lifeboy.jpg" },
        { name: "Lux", price: "Rs 60", image: "/static/images/lux.jpg" }
    ];

    function generateProductElement(product) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = product.price;

        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);

        return productDiv;
    }

    function displayProducts() {
        const productsSection = document.getElementById("products");
        products.forEach(product => {
            const productElement = generateProductElement(product);
            productsSection.appendChild(productElement);
        });
    }

    displayProducts();
});
