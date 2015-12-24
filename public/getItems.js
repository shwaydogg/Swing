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

function getItems(url){ 
  $.get( url, function(data){ 
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
//getItems('http://localhost:3000/v1/item/zdRzKfx6LB9ZPB93w-MWoaop6N35YLKYRYP");

function allSwing(url, jQ){ 
  $.get( url, function(data){ 
    if(!data.length)console.warn('No Items Received From Remote Server.');
    var i = 0;
    $(document).ready(function(){
      data.forEach( function(parentItem){
        var elems = $(jQ[i]), 
            j = 0;
        if(!elems.length) console.warn('No elements matched: "' + jQ[i] + '". ');

        parentItem.forEach( function(item){
          if(elems[j]){
            elems[j].innerHTML = item.content;
            j++;
          }
        });
        i++;
      });
    });
  }).fail(function() { 
    console.warn('HTTP Get Request Failed');
  });
};

function pureSwing(url){ 
  return $.get( url, function(data){ 
    if(!data.length)
      console.warn('No Items Received From Remote Server.');
      return(data);
  }).fail(function() { 
    console.warn('HTTP Get Request Failed');
  });
};

function directSet(url, cb){ 
  return $.get( url, function(data){ 
    if(!data.length)
      console.warn('No Items Received From Remote Server.');
      cb(data);
  }).fail(function() { 
    console.warn('HTTP Get Request Failed');
  });
};
