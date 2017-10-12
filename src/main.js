// JS
	var headingElement = document.getElementById("main-heading");
	console.log(headingElement.innerHTML);

	var newHeadingText = prompt("Введите новый заголовок:");
	headingElement.innerHTML = newHeadingText;

// jQuery
	$("#main-heading").text(newHeadingText);

/* Создание новых элементов через jQuery */
	$("body").append("<p>Це буде новий параграф</p>");

// Также append можно использовать в цикле for для добавления нескольких элементов:
	for(var i =0; i < 1; i++) {
		var hobby = prompt("Назвіть одне з ваших хоббі", "");
		$("body").append("<p>" + hobby + "</p>");
	}

/* Анимация элементов средствами jQuery */
	$("h1").fadeOut(3000);

/* Цепной вызов и анимация на jQuery */
 $("h1").text("Цей текст скоро зникне").fadeOut(3000).fadeIn(2000);

 $("h2").slideUp(1000).slideDown(1000);

for(var e = 0; i < 5; i++) {
	$("small").hide(3000);
 $("small").show(2000);
}

 