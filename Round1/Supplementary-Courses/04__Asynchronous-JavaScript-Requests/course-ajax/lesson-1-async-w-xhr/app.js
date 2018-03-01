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

        // NYT
        const articleRequest = new XMLHttpRequest();
        articleRequest.onload = addArticles;
        articleRequest.open('GET', 
          `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=${nytArticleId}`);
        articleRequest.send();
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

  // NYT Articles
  function addArticlesTest () {
    debugger;//initially used to monitor response in DevTools
  }
  function addArticles () {
    //debugger;//initially used to monitor response in DevTools
    let htmlContent = '';
    const data = JSON.parse(this.responseText);
    const copyright = data.copyright;
    const firstArticle = data.response.docs[0];
    if(data.response && data.response.docs && data.response.docs[0]) {
      htmlContent = `
        <h1>${firstArticle.headline.main}</h1>
        <h3>${firstArticle.byline.original}</h3>
        <h4>${firstArticle.pub_date.substring(0,10)}</h4>
        ${firstArticle.snippet} ... 
        (<a href="${firstArticle.web_url}">Continue reading @ NYT</a>)
        <br>${copyright}`;
    } else {
      htmlContent = '<div class="error-no-image">No images available</div>'
    }
    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
  }
  // Next Up: Add the list course instructor made to
  // After: Add another NYT API

})();
