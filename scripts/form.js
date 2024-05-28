// footer dynamic dates
const d = new Date();
let currentYear = d.getFullYear();
let outputFullYear = document.querySelector('#current-year');
let outputLastModified = document.querySelector('#last-modified');
let lastModifiedDate = document.lastModified;

outputFullYear.innerHTML = `${currentYear}`;
outputLastModified.innerHTML = `${lastModifiedDate}`;

// product data arrays
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// constants
const productList = document.querySelector("#product-id");
let numVisited = Number(window.localStorage.getItem("number-visited")) || 0;
numVisited++;

// add product options
loadProductOptions();

function loadProductOptions(){
    if(productList){
        products.forEach(product => {
            let option = document.createElement("option");
            option.textContent = product.name;
            option.value = product.id;
            
            productList.appendChild(option);
        });
    }
}

/* review */
const getReviewsCounter = () => {
    return localStorage.getItem("reviews-count");
}

const setReviewsCounter = () => {
    numReviews++;
    localStorage.setItem("reviews-count", numReviews);
}

let numReviews = Number(getReviewsCounter()) || 0;
const blockNumReviews = document.querySelector("#num-reviews");

