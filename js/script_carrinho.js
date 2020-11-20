var storage = window.localStorage;

 $(document).ready(function(){
 	carregaCarrinho();
 });

 function carregaCarrinho(){
 	storage.setItem("carrinho");
 	console.log(localStorage);
 }