(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        const unsplashRequest = new XMLHttpRequest();
        unsplashRequest.onload = addImage;
        unsplashRequest.onerror = function(err) {
          requestError(err, 'image');
        };
        unsplashRequest.open('GET', 
          `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        unsplashRequest.setRequestHeader('Authorization', `Client-ID ${unsplashId}`);
        unsplashRequest.send();

    });

  // Unsplash Images
  function addImage() {
    //debugger;//initially used to monitor response in DevTools
    let htmlContent = '';
    const data = JSON.parse(this.responseText);
    const firstImage = data.results[0];
    if(data && data.results && data.results[0]) {
      htmlContent = `<figure>
        <img src="${firstImage.urls.regular}" alt=${searchedForText}">
        <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
      <figure>`;
    } else {
      htmlContent = '<div class="error-no-image">No images available</div>'
    }
    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
  };

})();
