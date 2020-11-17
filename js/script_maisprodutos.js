var array_produtos = [['GTA VI', 'GTA.png', 'Rockstar', false], ['Silent Hills', 'SH.png', 'Konami', false], ['Half-Life 3', 'hl3.jpg', 'Valve', false]];
storage = window.localStorage;
var array_carrinho = [];


$(document).ready(function(){

	fLocalListaProdutos();
});


function fLocalListaProdutos(){


	$(".div-produtos").html("");

	for(var i = 0; i < array_produtos.length; i++){

		var conteudo = "";

		conteudo += '<div class="div-card">';
		conteudo += '<div class="div-poster">';
		conteudo += '<img src="../images/' + array_produtos[i][1] + '">';
		conteudo += '</div>';
		conteudo += '<div class="div-titulo">';
		conteudo += '<h3>' + array_produtos[i][0] + '</h3>';
		conteudo += '</div>';
		conteudo += '<div class="div-descricao">';
		conteudo += '<b>Produtora:</b> ' + array_produtos[i][2] + ' <br>';
		conteudo += '</div>';
		conteudo += '<div class="div-rodape">';

		if(array_produtos[i][3] == false)
		{
			conteudo += '<button class="button-rodape" id_produto="' + i + '" >Comprar</button>';
		}
		else
		{
			conteudo += '<button class="button-rodape button-comprado" id_produto="' + i + '">Comprado</button>';
		}

		conteudo += '</div>';
		conteudo += '</div>';

		$(".div-produtos").append(conteudo);
	}

	$(".button-rodape").click(function(){

		var id = $(this).attr("id_produto");
	
		array_produtos[id].splice(3, 1, true);

		array_carrinho.push(array_produtos[id]);

		storage.setItem("carrinho", array_carrinho);
		
		console.log(array_carrinho);


		fLocalListaProdutos();

	});

}