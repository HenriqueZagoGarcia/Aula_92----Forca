player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;

function send() 
{
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("palavra em letras minúsculas = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("word").value = "";
}

/* Criar uma variável question_turn para quem faz a pergunta */
question_turn = "player1";
/* Criar uma variável answer_turn para quem faz a pergunta */
answer_turn = "player2";
function check() /* Nomear a função check */
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase(); /* Converter a palavra em caixa baixa com o toLowerCase */
	console.log("resposta em letras minúsculas - " + answer);
	if(answer == word)	/* Se a resposta for == a palavra então ... */
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score + 1; /* Incrementar 1 ponto para o jogador 1 */
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else /* Explicação: Se não */
		{
			player2_score = player2_score + 1; /* Incrementar 1 ponto para o jogador 2 */
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}

	/* Explicação: Condição para troca de turno */
	if(question_turn == "player1") /* Se o turno da pergunta foi do jogador 1 então ... */
	{
		question_turn = "player2" /* o turno da pergunta agora é do Jogador2 */
		document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player2_name ;
	}
	else /* Explicação: Se não */
	{
		question_turn = "player1" /* o turno da pergunta agora é do Jogador 1 */
		document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player1_name ;
	}

	if(answer_turn == "player1") /* Se o turno da resposta foi do jogador 1 então ... */
	{
		answer_turn = "player2" /* o turno da resposta agora é do Jogador 2 */
		document.getElementById("player_answer").innerHTML = "Turno de Respostas - " + player2_name ;
	}
	else /* Explicação: Se não */
	{
		answer_turn = "player1" /* o turno da resposta agora é do Jogador 1 */
		document.getElementById("player_answer").innerHTML = "Turno de Respostas - " + player1_name ;
	}

    document.getElementById("output").innerHTML = ""; /* Atualize com o id= output */

	/* Quando o botão Checar for pressionado, a seção em que a palavra
pergunta está, a input box e o botão Checar, que estão presentes,
serão removidos. Para isso, atualizaremos o elemento HTML
id=”output” com um valor vazio, isso resultará na remoção da
palavra pergunta, da input box e do botão Check. */
}