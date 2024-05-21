import { products } from "./data.js";

//carousel container
const carouselContainer = document.getElementById("carousel")
carouselContainer.classList.add("carouselContainer")

//arrows
const prevArrow = document.createElement("button")
prevArrow.innerHTML = "&#8678;"
prevArrow.classList.add("prevArrow")
// prevArrow.addEventListener("click", prevSlide)
carouselContainer.appendChild(prevArrow)


const nextArrow = document.createElement("button")
nextArrow.innerHTML = "&#8680;"
nextArrow.classList.add("nextArrow")
// nextArrow.addEventListener("click", nextSlide)
carouselContainer.appendChild(nextArrow)


// create each slide

products.forEach(product => {

    // productContainer
    const productContainer = document.createElement("article")
    productContainer.classList.add("productContainer")
    carouselContainer.appendChild(productContainer)

    //textContainer

    const textContainer = document.createElement("div")
    textContainer.classList.add("textContainer")
    productContainer.appendChild(textContainer)

    // name
    const name = document.createElement('h4')
    name.textContent = product.name
    name.classList.add("productName")
    textContainer.appendChild(name)

    //price container
    const priceContainer = document.createElement("div")
    priceContainer.classList.add("priceContainer")
    textContainer.appendChild(priceContainer)

    // price
    const price = document.createElement("h5")
    price.textContent = `$${product.regularPrice}`
    price.classList.add("price")
    priceContainer.appendChild(price)

    // sale price
    const salePrice = document.createElement("h3")
    salePrice.textContent = `now $${product.salePrice}`
    salePrice.classList.add("salePrice")
    priceContainer.appendChild(salePrice)

    // image
    const image = document.createElement("img")
    image.setAttribute("src", `${product.image}`)
    image.setAttribute("alt", `${product.alt}`)
    image.classList.add("carouselImage")
    productContainer.append(image)

})

// carousel functionality

const carousel = document.querySelector("#carousel")
const slides = carousel.querySelectorAll(".productContainer");

let currentSlideIndex = 0
slides[currentSlideIndex].classList.add("activeSlide")

function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

prevArrow.addEventListener("click", prevSlide);
nextArrow.addEventListener("click", nextSlide);

function prevSlide() {
    currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : slides.length - 1;
    showSlide(currentSlideIndex);
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex < slides.length - 1) ? currentSlideIndex + 1 : 0;
    showSlide(currentSlideIndex);
}


showSlide(currentSlideIndex)

