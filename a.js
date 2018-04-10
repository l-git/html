

function c(){
	
	
	alert($);
	
	
	
	
}

function d(){
	
	$.ajax({
		url:'./data/data.json',
		dataType:'json',
		success:function(data){
			
			var list=data.list;
			for(var i=0;i<list.length;i++){
				var d=list[i];
				$('.list').append('<li id="'+d.id+'">'+d.name+'</li>');
			}
			
		}
	});
	
	
}



$(function(){
	$.ajax({
		url:'./data/data.json',
		dataType:'json',
		success:function(data){
			
			var list=data.list;
			for(var i=0;i<list.length;i++){
				var d=list[i];
				$('.list').append('<li id="'+d.id+'">'+d.name+'</li>');
			}
			
		}
	});
})

