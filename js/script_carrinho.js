var storage = window.localStorage;

 $(document).ready(function(){
 	carregaCarrinho();
 });

 function carregaCarrinho(){
 	storage.getItem("carrinho");
 	console.log(localStorage);
 }