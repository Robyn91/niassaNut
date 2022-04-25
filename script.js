// Object Constructor

function product(header, img, description, size, extDescription, price, cartQty) {
    this.header = header;
    this.img = img;
    this.description = description;
    this.size = size;
    this.extDescription = extDescription;
    this.price = price;
    this.cartQty = cartQty;
}

// Create product objects
// Macadamia Nut Products

let nutInShell = new product(
    "Nut In Shell",
    "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/af67f3a91e673bc2-7yLTVnzu-zoom.jpg",
    "Macadamia Nuts sold in-shell.",
    "1 kg",
    "Fresh off the farm, these nuts are sold per kilogram, nut in shell. These are mainly for wholesalers, or those of you who would like to attempt cracking these nuts yourselves!",
    "65.00",
    0
);

let rawMac = new product(
    "Raw Macadamia Nuts",
    "https://sc04.alicdn.com/kf/Ubf958081e5b2411ca07173e5ad23140dX.jpg",
    "Macadamia Nuts sold raw.",
    "1 kg",
    "Fresh off the farm, these nuts are sold per kilogram, de-shelled, cleaned and dried. These are one of our best sellers, ready to eat straight out of the bag.",
    "95.00",
    0
);

let toastedMac = new product(
    "Toasted Macadamia Nuts",
    "https://cjdannemiller.com/wp-content/uploads/2015/12/Macadamia-NS-p.jpg",
    "Lightly toasted Macadamia Nuts.",
    "1 kg",
    "Fresh off the farm, these nuts are sold per kilogram, de-shelled, cleaned and dried and toasted to perfection. These are one of our best sellers, ready to eat straight out of the bag.",
    "105.00",
    0
);

// Food Products

let macOil = new product(
    "Macadamia Nut Oil",
    "http://cdn.shopify.com/s/files/1/2258/8005/products/61ovOIw50-L._SL1240.jpg?v=1611710070",
    "Macadamia Nut cooking oil.",
    "200ml",
    "Fresh off the farm, our Macadamia Nuts are hand-manufactured by us into a smooth cooking oil. Sold in 200ml bottles, good for cooking as a healthy replacement for vegetable oil.",
    "35.00",
    0
);

let macButter = new product(
    "Macadamia Nut Butter",
    "http://cdn.shopify.com/s/files/1/0362/3410/0873/products/nature-roasted-macadamia-nut-butter-other-spreads-by-nature-173744.jpg?v=1642759627",
    "Smooth & creamy Macadmia Nut Butter.",
    "100g",
    "Fresh off the farm, our Macadamia Nuts are hand-manufactured by us into a smooth butter spread. Sold in 100g bottles, good for making sandwiches and cooking to keep your heart healthy.",
    "25.00",
    0
);

let macFlour = new product(
    "Macadamia Nut Flour",
    "https://img3.exportersindia.com/product_images/bc-full/dir_149/4459797/macadamia-nut-flour-1487035224-2723051.jpeg",
    "Finely ground fresh Mac Nut Flour.",
    "250g",
    "Fresh off the farm, our Macadamia Nuts are hand-manufactured by us into a fine dry flour. Sold in 250g bags, good for baking your favourite cakes, using our flour as a healthy alternative.",
    "42.00",
    0
);

// Health Products

let faceCream = new product(
    "Macadamia Nut Face Cream",
    "https://i0.wp.com/cosmeticalstore.com/wp-content/uploads/2020/07/8905-01.jpg?fit=600%2C600&ssl=1",
    "Anti-aging Macadamia Nut face cream.",
    "30ml",
    "Fresh off the farm, our Macadamia Nuts are hand-manufactured by us into a well balanced daily face cream. Sold in 30ml tubs, our cream has been proven to aid in removing blemishes and keeping skin looking young and healthy.",
    "59.00",
    0
);

let bodyCream = new product(
    "Macadamia Nut Body Cream",
    "https://sc02.alicdn.com/kf/UTB8oGR8XpfJXKJkSamHq6zLyVXa8/1888501/UTB8oGR8XpfJXKJkSamHq6zLyVXa8.jpg",
    "Macadamia Nut cream for silky skin.",
    "150ml",
    "Fresh off the farm, our Macadamia Nuts are hand-manufactured by us into a well balanced daily body cream. Sold in 150ml tubs, our cream has been proven to aid in removing blemishes and keeping skin looking young and healthy.",
    "25.00",
    0
);

let lipBalm = new product(
    "Macadamia Nut Lip Balm",
    "https://cdn.shopify.com/s/files/1/0352/8556/5571/products/en1654_emma_noel_organic_lipbalm_macadamia_nuts_1200x.jpg?v=1647541310",
    "Macadamia Nut lip balm for smooth lips.",
    "10g",
    "Fresh off the farm, our Macadamia Nuts are hand-manufactured by us into a well balanced daily lip balm. Sold in 10ml tubs, our lip balm has been proven to aid in keeping your lips soft and smooth, preventing cracks and blemishes.",
    "9.99",
    0
);


// Create arrays for each object category
let healthProducts;
let nutProducts;
let foodProducts;
let pendingTotal = document.getElementById('pendingTotal');
let curTotal = 0;
let num1 = 0;

// To update object properties using session storage on page load each time
if (sessionStorage.getItem("hasRun") === null) {

    nutProducts = [nutInShell, rawMac, toastedMac];
    foodProducts = [macOil, macButter, macFlour];
    healthProducts = [faceCream, bodyCream, lipBalm];
    sessionStorage.setItem("healthProducts", JSON.stringify(healthProducts));
    sessionStorage.setItem("nutProducts", JSON.stringify(nutProducts));
    sessionStorage.setItem("foodProducts", JSON.stringify(foodProducts));
    sessionStorage.setItem("hasRun", true)

} else {

    healthProducts = JSON.parse(sessionStorage.getItem("healthProducts"));
    nutProducts = JSON.parse(sessionStorage.getItem("nutProducts"));
    foodProducts = JSON.parse(sessionStorage.getItem("foodProducts"));

};


// Populate Objects on Shop Page on load

// Category Nut Products function

function nuts() {
    let macNutsMain = document.getElementById('macNuts');

    // Create new row child div
    let nutItems = document.createElement('div');

    // Add class name for boostrap styling
    nutItems.classList.add('row');
    macNutsMain.appendChild(nutItems);

    // Loop to display nutProducts objects in html
    nutProducts.forEach(function (item) {

        // Display curTotal next to cart symbol on shop page (I did this in place of the alert - just looks cleaner)
        curTotal += item.cartQty * item.price;
        pendingTotal.innerHTML = "R " + curTotal.toFixed(2);

        // Create child div for column styling of each product
        let nutCol = document.createElement('div');
        nutCol.classList.add('col-lg-4', 'text-center');
        nutItems.appendChild(nutCol);

        // Product Div Contents
        // Header
        let rule1 = document.createElement('hr');
        let head = document.createElement('h4');
        head.innerHTML = item.header;
        head.innerHTML = head.innerHTML.toUpperCase();
        let rule2 = document.createElement('hr');
        nutCol.appendChild(rule1);
        nutCol.appendChild(head);
        nutCol.appendChild(rule2);

        // Image
        let image = document.createElement('img');
        image.src = item.img;
        image.alt = item.header;
        image.classList.add('shopImg');

        // Add event listener to each image and use JSON to store the information for use in displaying the correct item on single product page.
        image.addEventListener("click", function () {
            sessionStorage.setItem("nuts", JSON.stringify(item));
            window.location = "sproduct.html";
        });
        nutCol.appendChild(image);

        // Description
        let des = document.createElement('p');
        des.innerHTML = item.description;
        nutCol.appendChild(des);

        // Size
        let sizes = document.createElement('p');
        sizes.innerHTML = item.size;
        nutCol.appendChild(sizes);

        // Cost
        let cost = document.createElement('h5');
        cost.innerHTML = "R" + item.price;
        nutCol.appendChild(cost);

        // Quick Add to cart
        let div = document.createElement('div');
        div.classList.add('addDiv');
        nutCol.appendChild(div);

        // Input bar
        let qty = document.createElement('input');
        qty.classList.add('text-center');
        qty.style.width = "60px";
        qty.type = 'number';
        qty.value = 1;
        div.appendChild(qty);

        // Add to cart symbol
        let cart = document.createElement('i');
        cart.classList.add('fa-solid', 'fa-cart-arrow-down');
        div.appendChild(cart);

        // Add to cart functionality
        cart.addEventListener("click", function () {
            // Update cartQty property on click --- add to current value
            item.cartQty += Number(qty.value);
            // Add this new value to session storage
            sessionStorage.setItem("nutProducts", JSON.stringify(nutProducts));
            location.reload();
        });
    });

};


// Category Food Products function

function food() {
    let foodDiv = document.getElementById('foodProducts');

    // Create new row child div
    let nutItems = document.createElement('div');

    // Add class name for boostrap styling
    nutItems.classList.add('row');
    foodDiv.appendChild(nutItems);

    // Loop to display nutProducts objects in html
    foodProducts.forEach(function (item) {

        // Display curTotal next to cart symbol on shop page (I did this in place of the alert - just looks cleaner)
        curTotal += item.cartQty * item.price;
        pendingTotal.innerHTML = "R " + curTotal.toFixed(2);

        // Create child div for column styling of each product
        let nutCol = document.createElement('div');
        nutCol.classList.add('col-lg-4', 'text-center');
        nutItems.appendChild(nutCol);

        // Product Div Contents
        // Header
        let rule1 = document.createElement('hr');
        let head = document.createElement('h4');
        head.innerHTML = item.header;
        head.innerHTML = head.innerHTML.toUpperCase();
        let rule2 = document.createElement('hr');
        nutCol.appendChild(rule1);
        nutCol.appendChild(head);
        nutCol.appendChild(rule2);

        // Image
        let image = document.createElement('img');
        image.src = item.img;
        image.alt = item.header;
        image.classList.add('shopImg');

        // Add event listener to each image and use JSON to store the information for use in displaying the correct item on single product page.
        image.addEventListener("click", function () {
            sessionStorage.setItem("nuts", JSON.stringify(item));
            window.location = "sproduct.html";
        });
        nutCol.appendChild(image);

        // Description
        let des = document.createElement('p');
        des.innerHTML = item.description;
        nutCol.appendChild(des);

        // Size
        let sizes = document.createElement('p');
        sizes.innerHTML = item.size;
        nutCol.appendChild(sizes);

        // Cost
        let cost = document.createElement('h5');
        cost.innerHTML = "R" + item.price;
        nutCol.appendChild(cost);

        // Quick Add to cart
        let div = document.createElement('div');
        div.classList.add('addDiv');
        nutCol.appendChild(div);

        // Input bar
        let qty = document.createElement('input');
        qty.classList.add('text-center');
        qty.style.width = "60px";
        qty.type = 'number';
        qty.value = 1;
        div.appendChild(qty);

        // Add to cart symbol
        let cart = document.createElement('i');
        cart.setAttribute('id', 'quickAdd');
        cart.classList.add('fa-solid', 'fa-cart-arrow-down');
        div.appendChild(cart);

        // Add to cart functionality
        cart.addEventListener("click", function () {
            // Update cartQty property on click --- add to current value
            item.cartQty += Number(qty.value);
            // Add this new value to session storage
            sessionStorage.setItem("foodProducts", JSON.stringify(foodProducts));
            location.reload();
        });
    });
};

// Category Health Products function

function health() {

    let healthDiv = document.getElementById('healthProducts');

    // Create new row child div
    let nutItems = document.createElement('div');

    // Add class name for boostrap styling
    nutItems.classList.add('row');
    healthDiv.appendChild(nutItems);

    // Loop to display nutProducts objects in html
    healthProducts.forEach(function (item) {

        // Display curTotal next to cart symbol on shop page (I did this in place of the alert - just looks cleaner)
        curTotal += item.cartQty * item.price;
        pendingTotal.innerHTML = "R " + curTotal.toFixed(2);

        // Create child div for column styling of each product
        let nutCol = document.createElement('div');
        nutCol.classList.add('col-lg-4', 'text-center');
        nutItems.appendChild(nutCol);

        // Product Div Contents
        // Header
        let rule1 = document.createElement('hr');
        let head = document.createElement('h4');
        head.innerHTML = item.header;
        head.innerHTML = head.innerHTML.toUpperCase();
        let rule2 = document.createElement('hr');
        nutCol.appendChild(rule1);
        nutCol.appendChild(head);
        nutCol.appendChild(rule2);

        // Image
        let image = document.createElement('img');
        image.src = item.img;
        image.alt = item.header;
        image.classList.add('shopImg');

        // Add event listener to each image and use JSON to store the information for use in displaying the correct item on single product page.
        image.addEventListener("click", function () {
            sessionStorage.setItem("nuts", JSON.stringify(item));
            window.location = "sproduct.html";
        });
        nutCol.appendChild(image);

        // Description
        let des = document.createElement('p');
        des.innerHTML = item.description;
        nutCol.appendChild(des);

        // Size
        let sizes = document.createElement('p');
        sizes.innerHTML = item.size;
        nutCol.appendChild(sizes);

        // Cost
        let cost = document.createElement('h5');
        cost.innerHTML = "R" + item.price;
        nutCol.appendChild(cost);

        // Quick Add to cart
        let div = document.createElement('div');
        div.classList.add('addDiv');
        nutCol.appendChild(div);

        // Input bar
        let qty = document.createElement('input');
        qty.classList.add('text-center');
        qty.style.width = "60px";
        qty.type = 'number';
        qty.value = 1;
        div.appendChild(qty);

        // Add to cart symbol
        let cart = document.createElement('i');
        cart.setAttribute('id', 'quickAdd');
        cart.classList.add('fa-solid', 'fa-cart-arrow-down');
        div.appendChild(cart);

        // Add to cart functionality
        cart.addEventListener("click", function () {
            // Update cartQty property on click --- add to current value
            item.cartQty += Number(qty.value);
            // Add this new value to session storage
            sessionStorage.setItem("healthProducts", JSON.stringify(healthProducts));
            location.reload();
        });
    });
};

// Function to display object details on single product page onclick

function sProduct() {

    // Get items from session storage
    list = JSON.parse(sessionStorage.getItem("nuts"));

    // Display curTotal next to cart symbol on shop page (I did this in place of the alert - just looks cleaner)
    healthProducts = JSON.parse(sessionStorage.getItem("healthProducts"));
    nutProducts = JSON.parse(sessionStorage.getItem("nutProducts"));
    foodProducts = JSON.parse(sessionStorage.getItem("foodProducts"));
    for (let i = 0; i < healthProducts.length; i++) {
        let list = healthProducts[i];
        curTotal += list.cartQty * list.price;
        pendingTotal.innerHTML = "R " + curTotal.toFixed(2);
    }
    for (let i = 0; i < nutProducts.length; i++) {
        let list = nutProducts[i];
        curTotal += list.cartQty * list.price;
        pendingTotal.innerHTML = "R " + curTotal.toFixed(2);
    }
    for (let i = 0; i < foodProducts.length; i++) {
        let list = foodProducts[i];
        curTotal += list.cartQty * list.price;
        pendingTotal.innerHTML = "R " + curTotal.toFixed(2);
    }

    // Change Title
    let title1 = document.getElementById('sProdID');
    title1.innerHTML = list.header;

    // Create Row Div
    let div = document.getElementById('sProductDiv');
    let row1 = document.createElement('div');
    row1.classList.add('row', 'text-center');
    div.appendChild(row1);

    // Create Column 1
    let col1 = document.createElement('div');
    col1.classList.add('col-lg-6');
    row1.appendChild(col1);

    // Add Image to Col1
    let image = document.createElement('img');
    image.classList.add('productImg');
    image.src = list.img;
    col1.appendChild(image);

    // Add Information to Col2
    let col2 = document.createElement('div');
    col2.classList.add('col-lg-6', 'shopItem', 'pt-5');
    row1.appendChild(col2);
    // Header
    let rule1 = document.createElement('hr');
    let head = document.createElement('h4');
    head.innerHTML = list.header;
    head.innerHTML = head.innerHTML.toUpperCase();
    let rule2 = document.createElement('hr');
    col2.appendChild(rule1);
    col2.appendChild(head);
    col2.appendChild(rule2);

    // Description
    let des = document.createElement('p');
    des.innerHTML = list.extDescription;
    col2.appendChild(des);

    // Size
    let sizes = document.createElement('p');
    sizes.innerHTML = list.size;
    col2.appendChild(sizes);

    // Cost
    let cost = document.createElement('h5');
    cost.innerHTML = "R" + list.price;
    col2.appendChild(cost);

    // Input bar
    let qty = document.createElement('input');
    qty.classList.add('text-center', 'mr-2', 'mt-2');
    qty.style.width = "60px";
    qty.type = 'number';
    qty.value = 1;
    col2.appendChild(qty);

    // Add to cart button
    let button1 = document.createElement('button');
    button1.classList.add('btn', 'btn-primary', 'ml-2', 'mt-1');
    button1.innerHTML = "Add To Cart";
    col2.appendChild(button1);

    // Add to cart functionality
    button1.addEventListener("click", function () {

        let curObj;
        healthProducts = JSON.parse(sessionStorage.getItem("healthProducts"));
        nutProducts = JSON.parse(sessionStorage.getItem("nutProducts"));
        foodProducts = JSON.parse(sessionStorage.getItem("foodProducts"));

        // To find which object was clicked on - and make changes to that array only
        if (curObj = healthProducts.find(x => x.header === list.header)) {
            list.cartQty += Number(qty.value);
            curObj.cartQty = list.cartQty;
            sessionStorage.setItem("healthProducts", JSON.stringify(healthProducts));
            location.reload();

        } else if (curObj = nutProducts.find(x => x.header === list.header)) {
            list.cartQty += Number(qty.value);
            curObj.cartQty = list.cartQty;
            sessionStorage.setItem("nutProducts", JSON.stringify(nutProducts));
            location.reload();

        } else if (curObj = foodProducts.find(x => x.header === list.header)) {
            list.cartQty += Number(qty.value);
            curObj.cartQty = list.cartQty;
            sessionStorage.setItem("foodProducts", JSON.stringify(foodProducts));
            location.reload();
        }
    });

};



// Cart Page

function cartLoad() {
    // Get objects from session storage
    healthProducts = JSON.parse(sessionStorage.getItem("healthProducts"));
    nutProducts = JSON.parse(sessionStorage.getItem("nutProducts"));
    foodProducts = JSON.parse(sessionStorage.getItem("foodProducts"));

    // Declare
    let table = document.getElementById("myCart");
    let cartShow = document.getElementById('cartShow');
    let cartHide = document.getElementById('cartHide');
    let subTotal = document.createElement("p");
    let subT = document.getElementById("subT");
    let cartTotal = 0;
    let delCost = 0;
    cartShow.style.display = "none";
    thanksDiv.style.display = "none";
    subT.appendChild(subTotal);

    // Count will be used for tracking total item qty in cart
    let count = 0;

    // curTotal will be used to track subtotal
    let curTotal = 0;

    // Add items to cart table that have a cartQty value over 1
    // Health Products
    for (let i = 0; i < healthProducts.length; i++) {
        let item = healthProducts[i];
        if (item.cartQty >= 1) {

            // To count the amount of items in the cart to calculate shipping later on:
            count += item.cartQty;

            let row = table.insertRow(0);
            row.style.textAlign = "left";
            table.appendChild(row);

            // Cell 1
            let cell1 = row.insertCell(0);
            let trash = document.createElement('i');
            trash.setAttribute('id', 'trash');
            trash.classList.add("fa-solid", "fa-trash-can");
            cell1.appendChild(trash);
            let edit = document.createElement('p');
            edit.innerHTML = "Edit";
            edit.setAttribute('id', 'edit');
            cell1.appendChild(edit);

            // Add event listener to edit button
            edit.addEventListener("click", function () {
                // Add input field to adjust qty on click
                cell4.innerHTML = null;
                let qty = document.createElement('input');
                qty.classList.add('text-center');
                qty.style.width = "60px";
                qty.type = 'number';
                qty.value = item.cartQty;
                cell4.appendChild(qty);

                // Add ok btn to confirm new qty
                let ok = document.createElement('button');
                ok.innerHTML = "OK";
                ok.classList.add('btn', 'btn-primary');
                ok.setAttribute('id', 'okBtn');
                cell4.appendChild(ok);

                // Add functionality to ok btn
                ok.addEventListener("click", function () {
                    item.cartQty = parseInt(qty.value);
                    sessionStorage.setItem("healthProducts", JSON.stringify(healthProducts));
                    cell4.innerHTML = null;
                    cell4.innerHTML = Number(item.cartQty);
                    let num = item.cartQty * item.price;
                    cell6.innerHTML = "R " + num.toFixed(2);
                    location.reload();
                });
            });

            // Add event listener to trash button
            trash.addEventListener("click", function () {
                item.cartQty = 0;
                sessionStorage.setItem("healthProducts", JSON.stringify(healthProducts));
                location.reload();
            });

            // Cell 2
            let cell2 = row.insertCell(1);
            let image = document.createElement('img');
            image.src = item.img;
            cell2.appendChild(image);

            // Cell 3
            let cell3 = row.insertCell(2);
            cell3.innerHTML = item.header;

            // Cell 4
            let cell4 = row.insertCell(3);
            cell4.innerHTML = Number(item.cartQty);


            // Cell 5
            let cell5 = row.insertCell(4);
            cell5.classList.add("text-right");
            cell5.innerHTML = "R " + item.price;

            // Cell 6
            let cell6 = row.insertCell(5);
            cell6.classList.add("text-right");
            let num = item.cartQty * item.price;
            cell6.innerHTML = "R " + num.toFixed(2);

            // To add this row value to order subtotal
            curTotal += num;
            subTotal.innerHTML = "R " + curTotal.toFixed(2);
        }
    }

    // Nut Products

    for (let i = 0; i < nutProducts.length; i++) {
        let item = nutProducts[i];
        if (item.cartQty >= 1) {

            // To count the amount of items in the cart to calculate shipping later on:
            count += item.cartQty;

            let row = table.insertRow(0);
            row.style.textAlign = "left";
            table.appendChild(row);

            // Cell 1
            let cell1 = row.insertCell(0);
            let trash = document.createElement('i');
            trash.setAttribute('id', 'trash');
            trash.classList.add("fa-solid", "fa-trash-can");
            cell1.appendChild(trash);
            let edit = document.createElement('p');
            edit.innerHTML = "Edit";
            edit.setAttribute('id', 'edit');
            cell1.appendChild(edit);

            // Add event listener to edit button
            edit.addEventListener("click", function () {
                // Add input field to adjust qty on click
                cell4.innerHTML = null;
                let qty = document.createElement('input');
                qty.classList.add('text-center');
                qty.style.width = "60px";
                qty.type = 'number';
                qty.value = item.cartQty;
                cell4.appendChild(qty);

                // Add ok btn to confirm new qty
                let ok = document.createElement('button');
                ok.innerHTML = "OK";
                ok.classList.add('btn', 'btn-primary');
                ok.setAttribute('id', 'okBtn');
                cell4.appendChild(ok);

                // Add functionality to ok btn
                ok.addEventListener("click", function () {
                    item.cartQty = parseInt(qty.value);
                    sessionStorage.setItem("nutProducts", JSON.stringify(nutProducts));
                    cell4.innerHTML = null;
                    cell4.innerHTML = Number(item.cartQty);
                    let num = item.cartQty * item.price;
                    cell6.innerHTML = "R " + num.toFixed(2);
                    location.reload();
                });
            });

            // Add event listener to trash button
            trash.addEventListener("click", function () {
                item.cartQty = 0;
                sessionStorage.setItem("nutProducts", JSON.stringify(nutProducts));
                location.reload();
            });

            // Cell 2
            let cell2 = row.insertCell(1);
            let image = document.createElement('img');
            image.src = item.img;
            cell2.appendChild(image);

            // Cell 3
            let cell3 = row.insertCell(2);
            cell3.innerHTML = item.header;

            // Cell 4
            let cell4 = row.insertCell(3);
            cell4.innerHTML = Number(item.cartQty);


            // Cell 5
            let cell5 = row.insertCell(4);
            cell5.classList.add("text-right");
            cell5.innerHTML = "R " + item.price;

            // Cell 6
            let cell6 = row.insertCell(5);
            cell6.classList.add("text-right");
            let num = item.cartQty * item.price;
            cell6.innerHTML = "R " + num.toFixed(2);

            // To add this row value to order subtotal
            curTotal += num;
            subTotal.innerHTML = "R " + curTotal.toFixed(2);
        }
    }

    // Food Products

    for (let i = 0; i < foodProducts.length; i++) {
        let item = foodProducts[i];
        if (item.cartQty >= 1) {

            // To count the amount of items in the cart to calculate shipping later on:
            count += item.cartQty;

            let row = table.insertRow(0);
            row.style.textAlign = "left";
            table.appendChild(row);

            // Cell 1
            let cell1 = row.insertCell(0);
            let trash = document.createElement('i');
            trash.setAttribute('id', 'trash');
            trash.classList.add("fa-solid", "fa-trash-can");
            cell1.appendChild(trash);
            let edit = document.createElement('p');
            edit.innerHTML = "Edit";
            edit.setAttribute('id', 'edit');
            cell1.appendChild(edit);

            // Add event listener to edit button
            edit.addEventListener("click", function () {
                // Add input field to adjust qty on click
                cell4.innerHTML = null;
                let qty = document.createElement('input');
                qty.classList.add('text-center');
                qty.style.width = "60px";
                qty.type = 'number';
                qty.value = item.cartQty;
                cell4.appendChild(qty);

                // Add ok btn to confirm new qty
                let ok = document.createElement('button');
                ok.innerHTML = "OK";
                ok.classList.add('btn', 'btn-primary');
                ok.setAttribute('id', 'okBtn');
                cell4.appendChild(ok);

                // Add functionality to ok btn
                ok.addEventListener("click", function () {
                    item.cartQty = parseInt(qty.value);
                    sessionStorage.setItem("foodProducts", JSON.stringify(foodProducts));
                    cell4.innerHTML = null;
                    cell4.innerHTML = Number(item.cartQty);
                    let num = item.cartQty * item.price;
                    cell6.innerHTML = "R " + num.toFixed(2);
                    location.reload();
                });
            });

            // Add event listener to trash button
            trash.addEventListener("click", function () {
                item.cartQty = 0;
                sessionStorage.setItem("foodProducts", JSON.stringify(foodProducts));
                location.reload();
            });

            // Cell 2
            let cell2 = row.insertCell(1);
            let image = document.createElement('img');
            image.src = item.img;
            cell2.appendChild(image);

            // Cell 3
            let cell3 = row.insertCell(2);
            cell3.innerHTML = item.header;

            // Cell 4
            let cell4 = row.insertCell(3);
            cell4.innerHTML = Number(item.cartQty);


            // Cell 5
            let cell5 = row.insertCell(4);
            cell5.classList.add("text-right");
            cell5.innerHTML = "R " + item.price;

            // Cell 6
            let cell6 = row.insertCell(5);
            cell6.classList.add("text-right");
            let num = item.cartQty * item.price;
            cell6.innerHTML = "R " + num.toFixed(2);

            // To add this row value to order subtotal
            curTotal += num;
            subTotal.innerHTML = "R " + curTotal.toFixed(2);
        }
    }

    // To display empty cart
    if (curTotal == 0) {

        let emptyCart = document.createElement('p');

        emptyCart.innerHTML = "Your Cart Is Empty!";
        emptyCart.style.color = "red";
        subT.appendChild(emptyCart);

    } else {
        // Proceed to checkout or go back
        let cartButtons = document.getElementById("cartButtons");
        let checkOut = document.createElement('button');
        let goBackAnchor = document.createElement('a');
        let goBack = document.createElement('button');

        goBackAnchor.href = "shop.html";
        goBack.innerHTML = "Back to Shop";
        goBack.setAttribute('id', 'goBack');
        goBack.classList.add("btn", "btn-secondary");
        cartButtons.appendChild(goBackAnchor);
        goBackAnchor.appendChild(goBack);

        checkOut.innerHTML = "Proceed to Checkout";
        checkOut.setAttribute('id', 'checkOut');
        checkOut.classList.add("btn", "btn-primary");
        cartButtons.appendChild(checkOut);
    }

    // To proceed to checkout
    checkOut.addEventListener("click", function () {
        let couponDiv = document.getElementById('couponDiv');
        cartHide.style.display = "none";
        cartShow.style.display = "block";
        couponDiv.style.display = "none";

        // Create Order Summary
        let subT = document.getElementById('orderSubTotal');
        subT.innerHTML = "R " + curTotal.toFixed(2);

        // Total and VAT - will update these values once the user selects a delivery option
        let total = document.getElementById('total');
        let vat = document.getElementById('vat');

        // Delivery Options
        let deliveryCost = document.getElementById('deliveryCost');
        let radio1 = document.getElementById('radio1');
        let radio2 = document.getElementById('radio2');

        // Make the page load with collect delivery option as default
        delCost = parseInt(0);
        deliveryCost.innerHTML = "R " + delCost.toFixed(2);
        cartTotal = delCost + curTotal;
        vat.innerHTML = "R " + parseInt(cartTotal * 0.15).toFixed(2);
        total.innerHTML = "R " + cartTotal.toFixed(2);

        // Zero cost delivery if user chooses to collect
        radio1.addEventListener("click", function () {
            delCost = parseInt(0);
            deliveryCost.innerHTML = "R " + delCost.toFixed(2);
            cartTotal = delCost + curTotal;
            vat.innerHTML = "R " + parseInt(cartTotal * 0.15).toFixed(2);
            total.innerHTML = "R " + cartTotal.toFixed(2);
        });

        // If user chooses delivery, the cost increases per qty of items ordered
        radio2.addEventListener("click", function () {
            if (count <= 3) {
                delCost = parseInt(150);
                deliveryCost.innerHTML = "R " + delCost.toFixed(2);
                cartTotal = delCost + curTotal;
                vat.innerHTML = "R " + parseInt(cartTotal * 0.15).toFixed(2);
                total.innerHTML = "R " + cartTotal.toFixed(2);
            } else if (count <= 6) {
                delCost = parseInt(200);
                deliveryCost.innerHTML = "R " + delCost.toFixed(2);
                cartTotal = delCost + curTotal;
                vat.innerHTML = "R " + parseInt(cartTotal * 0.15).toFixed(2);
                total.innerHTML = "R " + cartTotal.toFixed(2);
            } else if (count <= 10) {
                delCost = parseInt(300);
                deliveryCost.innerHTML = "R " + delCost.toFixed(2);
                cartTotal = delCost + curTotal;
                vat.innerHTML = "R " + parseInt(cartTotal * 0.15).toFixed(2);
                total.innerHTML = "R " + cartTotal.toFixed(2);
            } else if (count <= 20) {
                delCost = parseInt(500);
                deliveryCost.innerHTML = "R " + delCost.toFixed(2);
                cartTotal = delCost + curTotal;
                vat.innerHTML = "R " + parseInt(cartTotal * 0.15).toFixed(2);
                total.innerHTML = "R " + cartTotal.toFixed(2);
            } else if (count <= 40) {
                delCost = parseInt(800);
                deliveryCost.innerHTML = "R " + delCost.toFixed(2);
                cartTotal = delCost + curTotal;
                vat.innerHTML = "R " + parseInt(cartTotal * 0.15).toFixed(2);
                total.innerHTML = "R " + cartTotal.toFixed(2);
            } else if (count > 40) {
                delCost = parseInt(1000);
                deliveryCost.innerHTML = "R " + delCost.toFixed(2);
                cartTotal = delCost + curTotal;
                vat.innerHTML = "R " + parseInt(cartTotal * 0.15).toFixed(2);
                total.innerHTML = "R " + cartTotal.toFixed(2);
            }
        });

        // Add coupon
        let discount = document.getElementById('discount');
        let couponInput = document.getElementById('couponInput');
        let couponBtn = document.getElementById('couponBtn');
        let couponInputDiv = document.getElementById('couponInputDiv');
        let couponWarn = document.getElementById('couponWarn');

        couponBtn.addEventListener("click", function () {
            if (couponInput.value === "WOOHOO") {
                discNum = parseInt(cartTotal * 0.1);
                discount.innerHTML = "R " + discNum.toFixed(2);
                couponDiv.style.display = "block";
                couponInputDiv.style.display = "none";
                cartTotal -= discNum;
                total.innerHTML = "R " + cartTotal.toFixed(2);
            } else if (couponInput.value === "YAY") {
                discNum = parseInt(cartTotal * 0.2);
                discount.innerHTML = "R " + discNum.toFixed(2);
                couponDiv.style.display = "block";
                couponInputDiv.style.display = "none";
                cartTotal -= discNum;
                total.innerHTML = "R " + cartTotal.toFixed(2);
            } else {
                couponWarn.innerHTML = "Please enter a valid coupon code";
            }
        })

        // Generate random reference number on checkout
        let confirmOrder = document.getElementById('confirmOrder');
        let thanksDiv = document.getElementById('thanksDiv');

        confirmOrder.addEventListener("click", function () {
            thanksDiv.style.display = "block";
            cartHide.style.display = "none";
            cartShow.style.display = "none";

            // Below generates random number
            let ref = Date.now() + Math.random();
            let newDisp = document.createElement('h3');
            newDisp.setAttribute('id', 'newDisp');

            //Add a background image for Jquery animation 
            let image = document.createElement('img');
            image.setAttribute('id', 'image');
            image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Thank-you-transparent.svg/2048px-Thank-you-transparent.svg.png";
            image.style.height = "500px";
            image.style.width = "500px";
            newDisp.innerHTML = "Thank you for your order. Your reference number is " + ref.toFixed(0);
            thanksDiv.appendChild(newDisp);
            thanksDiv.appendChild(image);

            // JQuery Animation
            $('#image').css({
                "position": "absolute"
            });
            $('#image').css({
                "right": "450px"
            });
            $('#image').css({
                "bottom": "80px"
            });
            $('#image').animate({
                height: '250px'
            }, 2000).animate({
                height: '500px'
            }, 2000)

            // Jquery Chained effect
            $('#newDisp').slideUp(2000).slideDown(2000);
        })
    })

    // Set the updated values back to session storage
    sessionStorage.setItem("healthProducts", JSON.stringify(healthProducts));
    sessionStorage.setItem("nutProducts", JSON.stringify(nutProducts));
    sessionStorage.setItem("foodProducts", JSON.stringify(foodProducts));

};