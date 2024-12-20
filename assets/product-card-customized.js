document.addEventListener('DOMContentLoaded', () => {
    console.log(" loaded the script!")
    
    const productPrimaryImage = document.querySelector(".product-image-primary");
    const productSecondaryImage = document.querySelector(".product-image-secondary");
    
    productPrimaryImage.addEventListener('mouseover', (e) => {

        productPrimaryImage && (productPrimaryImage.style.display = "none");
        productSecondaryImage && (productSecondaryImage.style.display = "block");
        return;
    });

    productSecondaryImage.addEventListener('mouseout', (e) => {

        productPrimaryImage && (productPrimaryImage.style.display = "block");
        productSecondaryImage && (productSecondaryImage.style.display = "none");
        return;
    })
})