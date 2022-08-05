const fetchData = (url) => {
  const data = fetch(`${url}`)
    .then((request) => request.json())
    .then((data) => data)

  return data
}

const newCarouselItems = (itemArray, active) => {
  var html = "";
  for (var j = 0; j < itemArray.length; j++) {
    if (active && j === 0) html += " <div class= \"carousel-item active text-center\"> <div class=\"news-row row\">";
    else html += " <div class= \"carousel-item text-center\"> <div class=\"news-row row\">";
    if (itemArray[j] === undefined) break
    html += `
        <div class="container">
          <img src="images/Logo.png" class="article-img-lg" alt="article-img">
          <div class="article-txt">
            <form id = ` + itemArray[j].ItemID + ` class="" action="index.html" method="post">
              <input type="text" name="ItemName" value= ` + itemArray[j].ItemName + ` form = ` + itemArray[j].ItemID + ` class= "input h1">
              <textarea name="ShortDescription" rows="2" cols="40" form = ` + itemArray[j].ItemID + ` class= "input">` + itemArray[j].ShortDescription + `</textarea>
              <textarea name="LongDescription"  rows="4" cols="80" form = ` + itemArray[j].ItemID + ` class= "input">` + itemArray[j].LongDescription + ` </textarea>
              <hr>
              <h2>Produktinormationen</h2>
              <label for="Stock` + itemArray[j].ItemID + `">Stock:</label>
              <input id = "Stock` + itemArray[j].ItemID + `" type="text" name="Stock"     value= ` + itemArray[j].Stock + `     form = ` + itemArray[j].ItemID + ` class= "input">
              <input type="text" name="Timelimit" value= ` + itemArray[j].TimeLimit + ` form = ` + itemArray[j].ItemID + ` class= "input TimeLimit">
              <br>
              <label for="Price` + itemArray[j].ItemID + `">Price:</label>
              <input id = "Price` + itemArray[j].ItemID + `" type="text" name="PricePerItem" value= ` + itemArray[j].PricePerItem + ` form = ` + itemArray[j].ItemID + ` class= "input">
              <br>
              <button id = "saveChanges" form = ` + itemArray[j].ItemID + ` type="submit" name="button" class="cbtn cbtn-ver-nav">
                Save Changes
              </button>

              <label for="Category" class = "Category">Type:
                <input type="text" name="Category" value= ` + itemArray[j].Category + ` form = ` + itemArray[j].ItemID + ` class= "input">
              </label>
            </form>
           </div>
         </div>
        </div>
      </div>

     `;
  }
  return html;
}

const script = async () => {
  var recommendations = await fetchData(`http://10.6.3.96:4242/user/1/items/3`) // 1 ist testweise

  var htmlcode =
    `
    <h1 class = "news-title"> Own Articles </h1>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div id="carousel-inner" class="carousel-inner">
      ` +
    newCarouselItems(recommendations, true) +
    `
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon c-cou-cntr" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button id="next" class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon c-cou-cntr" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;


  $(".settings-div").prepend(htmlcode);

  $("#nextProducts").on("click", async () => {
    const highestID = recommendations[recommendations.length - 1].ItemID;
    const newProduct = await fetchData(`http://10.6.3.96:4242/user/1/items/1/` + highestID);
    $("#carousel-inner0").append(newCarouselItems(newProduct, false));
    recommendations = recommendations.concat(newProduct);
  });
}

script()
