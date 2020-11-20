var storage = window.localStorage;

 $(document).ready(function(){
 	carregaCarrinho();

 	 $(".cadastro").click(function(){
    window.location.href = "../pages/cadastro.html";
    
  });
 });

 function carregaCarrinho(){
 	storage.setItem("carrinho");
 	console.log(localStorage);
 }