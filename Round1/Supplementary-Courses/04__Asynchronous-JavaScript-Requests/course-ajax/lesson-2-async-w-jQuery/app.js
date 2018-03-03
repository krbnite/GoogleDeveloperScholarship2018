/* eslint-env jquery */

(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        $.ajax({
            url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
            headers: {Authorization: `Client-ID ${unsplashID}`}
        }).done(addImage)
        .fail(function (err) {
          requestError(err,'image')
        });

        // NYT
        //$.ajax({
        //  url: `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=${nytArticleId}`
        //}).done(addArticles);

    });

    //Unsplash
    // fcn now takes an argument; is simplified
    function addImage(data) {
      let htmlContent = '';
      if (data && data.results && data.results.length > 1) {
        const firstImage = data.results[0];
        htmlContent = `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`
      } else {
        htmlContent = '<div class="error-no-image">No images available</div>'
      }
      responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
    }

  // NYT Articles
  //function addArticles (data) {
  //  //debugger;//initially used to monitor response in DevTools
  //  let htmlContent = '';
  //  if(data.response && data.response.docs && data.response.docs[0]) {
  //    const copyright = data.copyright;
  //    const firstArticle = data.response.docs[0];
  //    htmlContent = `
  //    <table>
  //      <tr><td>
  //      <h1>${firstArticle.headline.main}</h1>
  //      <h3>${firstArticle.byline.original}</h3>
  //      <h4>${firstArticle.pub_date.substring(0,10)}</h4>
  //      ${firstArticle.snippet} ... 
  //      (<a href="${firstArticle.web_url}">Continue reading @ NYT</a>)
  //      <br>${copyright}<br>
  //      </td></tr>
  //      <tr><td>
  //      <h2>More Articles...</h2>` + '<ul>' + data.response.docs.map(
  //      article => `<li class="article">
  //        <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
  //        <p>${article.snippet}</p></li>`).join('') + `</ul>
  //      </td></tr>
  //      </table>` ;
  //  } else {
  //    htmlContent = '<div class="error-no-image">No images available</div>'
  //  }
  //  responseContainer.insertAdjacentHTML('beforeend', htmlContent);
  //}
  //
  //function requestError() {};
})();
