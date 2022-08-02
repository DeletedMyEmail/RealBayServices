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

const script = async () => {
const recommendations = await fetchData(`http://10.6.3.96:4242/item/recommendations/foreach/9`)
console.log(recommendations)

var htmlcode = "";
const categories = [`Products`, `Services`, `Bets`];

recommendations.forEach((item, i) => {

    htmlcode += `
    <h1 class = "news-title">`+ `Top `+categories[i] + `</h1>
    <div id="carouselExampleControls`+ i +`" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
      `;

    for (var j = 0; j < 3; j++) {
      htmlcode += " <div class= \"carousel-item active text-center\"> <div class=\"news-row row\">";
        for (var l = 0; l < 3; l++) {
           if (item[3*j+l] === undefined) break
           console.log(item[3*j+l])
           htmlcode += `
           <div class="col-lg-4 col-sm-12">
            <button class="cbtn news-item">
              <div>
               <img src="images/Logo.png" class="article-img" alt="ItemImg">
                <h1 class="article-title">`+ item[3*j+l].ItemName + `</h1>
                <p class="article-desc">` + item[3*j+l].ShortDescription + `</p>
              </div>
              <p class="article-footer">` + item[3*j+l].TimeLimit + " | " + item[3*j+l].Rating + `</p>
            </button>
           </div>`

        }
        htmlcode += `</div></div>`;
    }



    htmlcode += `
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls`+ i +`" data-bs-slide="prev">
      <span class="carousel-control-prev-icon c-cou-cntr" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls`+ i +`" data-bs-slide="next">
      <span class="carousel-control-next-icon c-cou-cntr" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>`;

   });


  $(".news-container").prepend(htmlcode);
}

script()
