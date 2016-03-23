$(function(){


  
$.getJSON('classes.json').done( function(jsData){ 
console.log('hello');
    for (i = 0; i < jsData.classes.length; i++)
 
    insertCls(jsData.classes[i]);   

}).fail(function(){console.log('wtf')});
//IT KEEPS HANGING UP HERE

function insertCls(clsdata){ 
    var jsondat='';
    var i;
    jsondat+= '<h2>'+clsdata.name+'<h2>';
    jsondat+= '<img src='+clsdata.image+'>';
    jsondat+='<br><button type="button" class="#sumbtn">Summary</button><button type="button" class="#deetbtn">Details</button><div  class="#summary">'+clsdata.summary+'</div><br></br><div class="deets"></div>';
    jsondat+='<p>Details</p><div class="deets"><p>'+clsdata.description+ '</p></div>';
    
    
    
    


$('#Main').append(jsondat);    
}

/*$('#sumbtn').on('click',function()

$(this).children('#summ').toggle();
    
)
$('#deetbtn').on('click', function()
$(this).children('#deets').toggle();
)
 

}); */
 




}
)