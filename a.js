

function c(){
	
	
	alert($);
	
	
	
	
}

function d(){
	
	$.ajax({
		url:'./data/data.json',
		dataType:'json',
		success:function(data){
			
			alert(JSON.stringify(data));
		}
	});
	
	
}
