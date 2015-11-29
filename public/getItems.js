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

//example:
//getFlowContent('http://localhost:3000', "MWoaop6N35YLKYRYP", "MWoaop6N35YLKYRYP");
