var htmlcode =
  "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\"><div class=\"carousel-inner\">";

  http.get( "http://localhost:4242/item/", function(responds)
  {
      responds.on("data", function(data)
      {
          const userData = JSON.parse(data);


      });
  });

for (var i = 0; i < 3; i++) {
  htmlcode += " <div class= \"carousel-item active text-center\"><div class=\"news-row row\">";
    for (var j = 0; j < 3; j++) {


    }
    htmlcode +=  </div>
    </div>;
}








$(".news-contaner").html("")
htmlcode += </div>
</div>;
