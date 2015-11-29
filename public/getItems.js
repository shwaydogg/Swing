function getFlowContent(domId, flowId){ 
  $.get('http://localhost:3000/v1/item/' + flowId, function(data){ 
    //Warn if no content:
    if(!data.content)console.warn('No Flow Value Received');
    //Edit DOM:
    document.getElementById(domId).innerHTML = data.content;  
  }).fail(function() { 
    console.warn('HTTP Get Request Failed');
  });
};
getFlowContent("MWoaop6N35YLKYRYP", "MWoaop6N35YLKYRYP");
