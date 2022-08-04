// const fetchData = async (url) => {
// const request = await fetch(`${url}`)
// const data = await request.json()
// return data
// }

const fetchData = (url) => {
  const data = fetch(`${url}`)
    .then((request) => request.json())
    .then((data) => data)

  return data
}

const newCarouselItems = (itemArray, active) => {
  var html = "";
  for (var j = 0; j < itemArray.length/3; j++) {
    if (active && j === 0) html += " <div class= \"carousel-item active text-center\"> <div class=\"news-row row\">";
    else html += " <div class= \"carousel-item text-center\"> <div class=\"news-row row\">";
    for (var l = 0; l < 3; l++) {
         if (itemArray[3*j+l] === undefined) break
         html += `
         <div class="col-lg-4 col-sm-12">
          <button class="cbtn news-item">
            <div>
             <img src="images/Logo.png" class="article-img" alt="ItemImg">
              <h1 class="article-title">`+ itemArray[3*j+l].ItemName + `</h1>
              <p class="article-desc">` + itemArray[3*j+l].ShortDescription + `</p>
            </div>
            <p class="article-footer">` + itemArray[3*j+l].TimeLimit + " | " + itemArray[3*j+l].Rating + `</p>
          </button>
         </div>`

      }
      html += `</div></div>`;
  }
  return html;
}

const script = async () => {
var recommendations = await fetchData(`http://10.6.3.96:4242/item/recommendations/foreach/6/ignore/ignore/desc`)

var htmlcode = "";
const categories = [`Products`, `Services`, `Bets`];

recommendations.forEach((item, i) => {

    htmlcode += 
    `
    <h1 class = "news-title">`+ `Top `+categories[i] + `</h1>
    <div id="carouselExampleControls`+ i +`" class="carousel slide" data-bs-ride="carousel">
      <div id="carousel-inner`+ i +`" class="carousel-inner">
      `
    + newCarouselItems(item, true) + 
      `
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls`+ i +`" data-bs-slide="prev">
      <span class="carousel-control-prev-icon c-cou-cntr" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button id="next`+categories[i]+`" class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls`+ i +`" data-bs-slide="next">
      <span class="carousel-control-next-icon c-cou-cntr" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>`;

   });

  $(".news-container").prepend(htmlcode);
  
  $("#nextProducts").on("click", async () => {
    const lowestID = recommendations[0][recommendations[0].length-1].ItemID-1;
    const newProduct= await fetchData(`http://10.6.3.96:4242/item/recommendations/product/3/ignore/`+lowestID+`/desc`);
    $("#carousel-inner0").append(newCarouselItems(newProduct, false));  
    recommendations[0] = recommendations[0].concat(newProduct);
  });
  $("#nextServices").on("click", async () => {
      const lowestID = recommendations[1][recommendations[1].length-1].ItemID-1;
      const newServices = await fetchData(`http://10.6.3.96:4242/item/recommendations/service/3/ignore/`+lowestID+`/desc`);
      $("#carousel-inner1").append(newCarouselItems(newServices, false));  
      recommendations[1] = recommendations[1].concat(newServices);
    });
  $("#nextBets").on("click", async () => {
    const lowestID = recommendations[3][recommendations[3].length-1].ItemID-1;
    const newBets = await fetchData(`http://10.6.3.96:4242/item/recommendations/bet/3/ignore/`+lowestID+`/desc`);
    $("#carousel-inner3").append(newCarouselItems(newBets, false));  
    recommendations[3] = recommendations[3].concat(newBets);
  });  
}

script()
