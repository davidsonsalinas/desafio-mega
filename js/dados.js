
$(document).ready(function(){
	$.get("json/genres.json", function(data) {

		$('ul#ul-genre').append('<li class="nav-item"><a href="#homeSubmenu0" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link active">' + data[0].genre + '</a></li>');
		$('ul#ul-genre').append('<ul class="heroi collapse list-unstyled" id="homeSubmenu0"><li><a href="#">' + data[1].genre + '</a></li>');
		$('ul#ul-genre').append('<ul class="espiao collapse list-unstyled" id="homeSubmenu0"><li><a href="#">' + data[2].genre + '</a></li>');
	
		$('ul#ul-genre').append('<li class="nav-item"><a href="#homeSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link active">' + data[3].genre + '</a></li>');
		$('ul#ul-genre').append('<ul class="romantica collapse list-unstyled" id="homeSubmenu1"><li><a href="#">' + data[4].genre + '</a></li>');
		$('ul#ul-genre').append('<ul class="comediaTerror collapse list-unstyled" id="homeSubmenu1"><li><a href="#">' + data[5].genre + '</a></li>');

		$('ul#ul-genre').append('<li class="fantasia nav-item"><a href="#homeSubmenu2" data-toggle="collapse" aria-expanded="false" class="nav-link active">' + data[6].genre + '</a></li>');
		
		$('ul#ul-genre').append('<li class="nav-item"><a href="#homeSubmenu3" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link active">' + data[7].genre + '</a></li>');
		$('ul#ul-genre').append('<ul class="sobrenatural collapse list-unstyled" id="homeSubmenu3"><li><a href="#">' + data[8].genre + '</a></li>');
		$('ul#ul-genre').append('<ul class="monstro collapse list-unstyled" id="homeSubmenu3"><li><a href="#">' + data[9].genre + '</a></li>');
		$('ul#ul-genre').append('<ul class="survival collapse list-unstyled" id="homeSubmenu3"><li><a href="#">' + data[10].genre + '</a></li>');
		
		$('ul#ul-genre').append('<li class="animacao nav-item"><a href="#homeSubmenu4" data-toggle="collapse" aria-expanded="false" class="nav-link active">' + data[11].genre + '</a></li>');

	});

	$.get( "json/titles.json", function(data) {
		$( ".heroi" ).click(function() {
			document.getElementById("datagrid").innerHTML = ""
			for (var i = 0; i < data.length; i++){
				if (data[i].index == 0 || data[i].genreIndex == 0 || data[i].index == 1) {
					$('tbody#datagrid').append('<td class="dataTitle" >' + data[i].title + '</td>');
					$('tbody#datagrid').append('<td class="dataPlot" data-toggle="tooltip" data-placement="top" title="'
                        + data[i].plot +'" >' + data[i].plot + '</td>');
					$('tbody#datagrid').append('<td class="dataYear" >' + data[i].year + '</td>');
					$('tbody#datagrid').append('<tr></tr>');
				}
			}
		  });

		$( ".espiao" ).click(function() {
			document.getElementById("datagrid").innerHTML = ""
			for (var i = 0; i < data.length; i++){
				if (data[i].index == 2 || data[i].genreIndex == 2) {
					$('tbody#datagrid').append('<td class="dataTitle" >' + data[i].title + '</td>');
					$('tbody#datagrid').append('<td class="dataPlot" data-toggle="tooltip" data-placement="top" title="'
                        + data[i].plot +'" >' + data[i].plot + '</td>');
					$('tbody#datagrid').append('<td class="dataYear" >' + data[i].year + '</td>');
					$('tbody#datagrid').append('<tr></tr>');
				}
			}
		});

		$( ".romantica" ).click(function() {
			document.getElementById("datagrid").innerHTML = ""
			for (var i = 0; i < data.length; i++){
				if (data[i].index == 4 || data[i].genreIndex == 4) {
					$('tbody#datagrid').append('<td class="dataTitle" >' + data[i].title + '</td>');
					$('tbody#datagrid').append('<td class="dataPlot" data-toggle="tooltip" data-placement="top" title="'
                        + data[i].plot +'" >' + data[i].plot + '</td>');
					$('tbody#datagrid').append('<td class="dataYear" >' + data[i].year + '</td>');
					$('tbody#datagrid').append('<tr></tr>');
				}
			}
		});

		$( ".comediaTerror" ).click(function() {
			document.getElementById("datagrid").innerHTML = ""
			for (var i = 0; i < data.length; i++){
				if (data[i].index == 5 || data[i].genreIndex == 5) {
					$('tbody#datagrid').append('<td class="dataTitle" >' + data[i].title + '</td>');
					$('tbody#datagrid').append('<td class="dataPlot" data-toggle="tooltip" data-placement="top" title="'
                        + data[i].plot +'" >' + data[i].plot + '</td>');
					$('tbody#datagrid').append('<td class="dataYear" >' + data[i].year + '</td>');
					$('tbody#datagrid').append('<tr></tr>');
				}

			}
		});

		$( ".fantasia" ).click(function() {
			document.getElementById("datagrid").innerHTML = ""
			for (var i = 0; i < data.length; i++){
				if (data[i].index == 6 || data[i].genreIndex == 6) {
					$('tbody#datagrid').append('<td class="dataTitle" >' + data[i].title + '</td>');
					$('tbody#datagrid').append('<td class="dataPlot" data-toggle="tooltip" data-placement="top" title="'
                        + data[i].plot +'" >' + data[i].plot + '</td>');
					$('tbody#datagrid').append('<td class="dataYear" >' + data[i].year + '</td>');
					$('tbody#datagrid').append('<tr></tr>');
				}
			}
		});

		$( ".sobrenatural" ).click(function() {
			document.getElementById("datagrid").innerHTML = ""
			for (var i = 0; i < data.length; i++){
				if (data[i].index == 8 || data[i].genreIndex == 8) {
					$('tbody#datagrid').append('<td class="dataTitle" >' + data[i].title + '</td>');
					$('tbody#datagrid').append('<td class="dataPlot" data-toggle="tooltip" data-placement="top" title="'
                        + data[i].plot +'" >' + data[i].plot + '</td>');
					$('tbody#datagrid').append('<td class="dataYear" >' + data[i].year + '</td>');
					$('tbody#datagrid').append('<tr></tr>');
				}
			}
		});

		$( ".monstro" ).click(function() {
			document.getElementById("datagrid").innerHTML = ""
			for (var i = 0; i < data.length; i++){
				if (data[i].index == 9 || data[i].genreIndex == 9) {
					$('tbody#datagrid').append('<td class="dataTitle" >' + data[i].title + '</td>');
					$('tbody#datagrid').append('<td class="dataPlot" data-toggle="tooltip" data-placement="top" title="'
                        + data[i].plot +'" >' + data[i].plot + '</td>');
					$('tbody#datagrid').append('<td class="dataYear" >' + data[i].year + '</td>');
					$('tbody#datagrid').append('<tr></tr>');
				}
			}
		});

		$( ".survival" ).click(function() {
			document.getElementById("datagrid").innerHTML = ""
			for (var i = 0; i < data.length; i++){
				if (data[i].index == 10 || data[i].genreIndex == 10) {
					$('tbody#datagrid').append('<td class="dataTitle" >' + data[i].title + '</td>');
					$('tbody#datagrid').append('<td class="dataPlot" data-toggle="tooltip" data-placement="top" title="'
                        + data[i].plot +'" >' + data[i].plot + '</td>');
					$('tbody#datagrid').append('<td class="dataYear" >' + data[i].year + '</td>');
					$('tbody#datagrid').append('<tr></tr>');
				}
			}
		});

		$( ".animacao" ).click('click', function() {
			document.getElementById("datagrid").innerHTML = ""
			for (var i = 0; i < data.length; i++){
				if (data[i].index == 11 || data[i].genreIndex == 11 || data[i].parentIndex == 11) {
					$('tbody#datagrid').append('<td class="dataTitle" >' + data[i].title + '</td>');
					$('tbody#datagrid').append('<td class="dataPlot" data-toggle="tooltip" data-placement="top" title="'
                        + data[i].plot +'" >' + data[i].plot + '</td>');
					$('tbody#datagrid').append('<td class="dataYear" >' + data[i].year + '</td>');
					$('tbody#datagrid').append('<tr></tr>');
				}
			}
		});
	});
});