// Checking if js file is connected or not:

//console.log('connected');

// Step-1: Data gulo re fetch kore anlam:
const loadProduct = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const products = data.data;
    console.log(products);
    displayProducts(products);
}

// Step-2: Data gulo re dekhabo:
const displayProducts = (products) => {
    //console.log(products);
    const productContainer = document.getElementById('product-container');
    productContainer.textContent = '';

    // Step-1: Show product one by one:
    products.forEach((product) => {
        //console.log(product);

        //1. Creating a div:
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card bg-gray-100 p-8 shadow-xl`;

        // 2. Set a inner HTML: 
        phoneCard.innerHTML = `
        <figure>
            <img src="${product.image}"
            alt="phone" />
        </figure>
        <div class="card-body">
            <h2 class="card-title justify-center">${product.phone_name}</h2>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${product.slug}')" class="btn bg-purple-700">Show Details</button>
                <button class="btn bg-purple-700">Add To Cart</button>
            </div>
        </div>`;

        // 3. append child:
        productContainer.appendChild(phoneCard);

    });
};

// Handle search button:
const handleSearch = () => {
    //console.log('search handle');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadProduct(searchText);
}

// Handle  show details:
const handleShowDetail = async (id) => {
    //console.log('click',id);

    // Load single phone data:
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    //console.log(data);
    const product = data.data;
    showPhoneDetail(product);
}

const showPhoneDetail = (product) => {
    console.log(product);

    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = product.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
        <img src="${product.image}" alt="" />
        <p><span>Storage:</span>${product?.mainFeatures?.storage}</p>
        <p><span>GPS:</span>${product?.others?.GPS || 'No GPS Available'}</p>
    `;
    // Show the modal
    show_details_modal.showModal();
}
loadProduct();