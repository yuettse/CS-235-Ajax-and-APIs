
var a = function() {
	




}




for (i = 2; i <= 152; i++) {
	var a = $.get("http://pokeapi.co/api/v1/sprite/" + i, function(data){
		data.name = data.name.replace("_auto", "");
		document.getElementById('left').innerHTML += '<div><strong>' + data.name + '<img src=http://pokeapi.co' + data.image + '></div>';
			
	});
	
	
	
}
	
