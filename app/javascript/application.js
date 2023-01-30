// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
window.addEventListener("load", (event) => {

    document.forms[0].addEventListener("submit", function (e) {
        e.preventDefault();
        let address = document.getElementById("address").value;
        let zipcode = zipcodeFromAddress(address)
        if (zipcode != false) {
            getCachedImageOrFetchFresh(zipcode);
        } else {
            alert("Error: ensure the address ends with a 5 digit only US zipcode");
            window.location.reload();
        }
    });

});

function zipcodeFromAddress(input) {
    let array = input.trim().split(/[ ]+/);
    let zipcode = array[array.length - 1];
    if (zipcode.match(/^\d{5}/)) {
        return zipcode
    } else {
        return false
    }
}

function getCachedImageOrFetchFresh(zipcode) {
    let imageCache = document.getElementById("cached");
    imageCache.onerror = function (message) {
        window.location.href = `/forecasts/${zipcode}+US`
    }
    imageCache.src = `/zipcodes/${zipcode}+US.png`;
}
