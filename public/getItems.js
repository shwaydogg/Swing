function getFlowContent(rootURL, domId, flowId){ 
  $.get(rootURL + '/v1/item/' + flowId, function(data){ 
    //Warn if no content:
    if(!data.content)console.warn('No Flow Value Received');
    //Edit DOM:
    document.getElementById(domId).innerHTML = data.content;  
  }).fail(function() { 
    console.warn('HTTP Get Request Failed');
  });
};

function getItems(rootURL, items){ 
  $.get(rootURL + '/v1/items/' + items , function(data){ 
    //Warn if no content:
    if(!data.length)console.warn('No Flow Value Received');
    //Edit DOM:
    
    data.forEach( function(item){
      document.getElementById(item._id).innerHTML = item.content;  
    });
  }).fail(function() { 
    console.warn('HTTP Get Request Failed');
  });
};

//examples:
//getFlowContent('http://localhost:3000', "MWoaop6N35YLKYRYP", "MWoaop6N35YLKYRYP");
//getItems('http://localhost:3000', "zdRzKfx6LB9ZPB93w-MWoaop6N35YLKYRYP");
