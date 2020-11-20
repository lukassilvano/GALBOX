$(document).ready(function() {
	$("#button-mais").click(function(){
		window.location.href = "pages/produtos.html";
		
	});
	$("#carrinho").click(function(){
		window.location.href = "pages/carrinho.html";
		
	});
  $("#login").click(function(){
    window.location.href = "pages/login.html";
    
  });
  $(".cadastro").click(function(){
    window.location.href = "pages/cadastro.html";
    
  });
	initMap();
});

      // Initialize and add the map
      function initMap() {
        // The location of Uluru
        const GALBOX = { lat: -25.453582, lng: -49.252981 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 16,
          center: GALBOX,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: GALBOX,
          map: map,
        });
      }
