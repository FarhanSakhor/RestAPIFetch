function showFood () {
    var userText = document.getElementById('itemName').value ; 
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userText} `;
   
    document.getElementById('itemName').value = "";
    document.getElementById('showResults').textContent = "";
    
    
    fetch(url)
     .then(res => res.json() )
     .then(data => show(data.meals) ); 
   }
   
   function show (items){
      var oldContent = document.getElementById('showResults');
      var itemNo = document.getElementById('itemNumber').value ; 
      document.getElementById('itemNumber').value = "";
      for (var i=0 ; i<itemNo; i++){
            var card = document.createElement("div");
            card.className = "card";
            card.style.width = "18rem";

            var image = document.createElement("img");
            image.className = "card-img-top";
            image.src = items[i].strMealThumb;
            image.alt = "Card Image";
            image.style.width = "100%";
            image.style.height = "auto"

            var cardBody = document.createElement("div");
            cardBody.className = "card-body";

            var cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.textContent = items[i].strMeal;

            cardBody.appendChild(cardTitle);
            card.appendChild(image);
            card.appendChild(cardBody);
            oldContent.appendChild(card);
      }
   
   
   
   }
   