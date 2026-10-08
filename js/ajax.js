// JavaScript Document
$(document).ready(function(){

	getcourse('js/course.json');
	getlist('js/list.json');
	getnote('js/note.json');

});

function getcourse(filename) {
	
	$.getJSON(filename, function(data){
		
		$("#course").empty();
		
		$.each(data, function(index, en){	
		
		var html = '<article>';
        html +='<div class="atitle">';
    	html +='<h2>'+en['ctitle']+'</h2>';
        html +='<h3>'+en['csubtitle']+'</h3>';
        html +='</div>';
        html +='<div class="note">';
        html +='<a href="'+en['cref']+'">課程pdf</a>';
        html +='<a href="'+en['celm']+'">範例元素</a>';
        html +='<a href="'+en['csmp']+'" target="_blank">完成內容</a>';
        html +='</div>';
        html +='<img src="'+en['cimg']+'" />';
    	html +='</article>' //最後不用分號
		
		$("#course").append(html);
		
		});
		
	});
	
	return false;
}


function getlist(filename) {
	
	$.getJSON(filename, function(data){
		
		$("#list").empty();
		
		$.each(data, function(index, en){	
		
		var listh = '<article class="card">';
        listh +='<a href="'+en['listref']+'" target="_blank">';
        listh +='<h3>'+en['listname']+en['listno']+'</h3>';
        listh +='</a>';
    	listh +='</article>' //最後不用分號

		$("#list").append(listh);
		
	});
		});
	
	return false;
}

function getnote(filename) {
	
	$.getJSON(filename, function(data){
		
		$("#note").empty();
		
		$.each(data, function(index, en){	
		
		var htmln = '<article>';
    	htmln +='<h2>'+en['ntitle']+'</h2>';
        htmln +='<h3>'+en['nsubtitle']+'</h3>';
		 htmln +='<a href="'+en['nref']+'" target="_blank">相關連結</a>';
    	htmln +='</article>' //最後不用分號
		
		$("#note").append(htmln);
		
		});
		
	});
	
	return false;
}