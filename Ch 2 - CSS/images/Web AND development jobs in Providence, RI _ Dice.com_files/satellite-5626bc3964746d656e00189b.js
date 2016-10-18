_satellite.pushAsyncScript(function(event, target, $variables){
    //search results hoover

  //getCookie function
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
      }
      return "";
  }

  //get page of search results
  var curtpage = parseInt($('.pagination-large').find('[title*="Current"]').attr('title').substring(16));
  curtpage = Number(curtpage);

  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }


  //if on page 1 of search results set a random search id and store in session cookie
  if (getParameterByName('searchid') != '' ) {
  	var searchrdm2 = getParameterByName('searchid');
  	document.cookie="searchid=" + searchrdm2 + "; path=/";
    var searchrdm = searchrdm2;
  } else {
  	if (curtpage == 1) {
  		var rndm = Math.random() + "";
  	  	var searchrdm = Math.round(rndm * 10000000000000);
  	  	document.cookie="searchid=" + searchrdm + "; path=/";
  	  	var href = window.location.href;
  		if (href.indexOf("?") >= 0) {
  			history.replaceState({}, '', href + '&searchid=' + searchrdm);
  		} else {
  			history.replaceState({}, '', href + '?searchid=' + searchrdm);
  		}
    	} else {
  		var href = window.location.href;
  		if (href.indexOf("?") >= 0) {
  			history.replaceState({}, '', href + '&searchid=' + getCookie("searchid"));
        var searchrdm = getCookie("searchid");
  		} else {
  			history.replaceState({}, '', href + '?searchid=' + getCookie("searchid"));
        var searchrdm = getCookie("searchid");
      }
    	}
  }

  //get current location search string
  var locstring = $('input#location').attr('value');
  if (locstring === ""){
    locstring = 'empty';
  };

  //get the number of results returned
  var norslts = $('.pull-left.posiCount.sort').find('span:nth-child(2)').html();

  //get current sort by selection
  var crtsrtby = $('#sortby').find('span').html();

  //loop through all filter items, find which ones are checked and feed into deliminated list prop omniture can parse
  var fselt = "";
  var cnt = 1;
  var positions = document.getElementsByClassName('fchk');
   for (var i=0;i<positions.length;i++){
     if ( positions[i].checked ) {
     var namet = positions[i].getAttribute("chkval");
     var namety = positions[i].getAttribute("chktyp");
     var name2 = namet.split("+").join(" ");
     name2 = namety + ":" + name2;
       if (cnt>1) {
         name2 = "|" + name2;
       }
     fselt = fselt + name2;
     cnt++;
     }
    }

  //get current search string
  var srchstring = $('input#job').attr('value');


  //loop through each search result & trigger snowplow function
  $('div#search-results-control').find('div[class*="serp-result-content"]').each(function (){
  	//get current search result position
  	var curpstn = $(this).find('a[id*="position"]').attr('id');
  	curpstn = parseInt(curpstn.replace("position","")) + 1;
  	//get current search result destination url make array
  	var dtnurl = $(this).find('a[id*="position"]').attr('href');
  	var sdtnurl = $(this).find('a[id*="position"]').attr('href');
  	dtnurl = dtnurl.split("/");
  	var hhlt = $(this).attr('class');
  	if (hhlt.indexOf("bold") > -1){
  		var hhightlighted = 'Y';
  	  }
  	  else {
  		var hhightlighted = 'N';
  	  }
  	    if ($(this).find('a[id*="position"]').attr('href').indexOf("jobs") > -1)
  	    {
  console.log(srchstring);
  	  	  window.snowplow('trackUnstructEvent', {
  	  		  schema: 'iglu:com.dice/search_results/jsonschema/1-0-0', //insert schema location here
  	  	      data: {
  	  	        searchid: Number(searchrdm),
  	  	        resultspage: Number(curtpage),
  	  			    searchterm: srchstring,
  	  	        searchlocation: locstring,
  	  			    sort: crtsrtby,
  	  			    results: Number(norslts),
  	  	        position: curpstn,
  	  	        filters: fselt,
  	  	        highlighted: hhightlighted,
  	  			    groupid: dtnurl[6],
  	  			    positionid: dtnurl[7].slice(0,dtnurl[7].indexOf("?")),
  	  			    destination_url: sdtnurl
  	  	      }
  	  	  });
  	    }
  	  	else
  	  	{
          console.log(srchstring);
          window.snowplow('trackUnstructEvent', {
            schema: 'iglu:com.dice/search_results/jsonschema/1-0-0', //insert schema location here
              data: {
                    searchid: Number(searchrdm),
                    resultspage: Number(curtpage),
                    searchterm: srchstring,
                    searchlocation: locstring,
                    sort: crtsrtby,
                    results: Number(norslts),
                    position: curpstn,
                    filters: fselt,
                    highlighted: hhightlighted,
                    groupid: dtnurl[5],
                    positionid: dtnurl[6].slice(0,dtnurl[6].indexOf("?")),
                    destination_url: sdtnurl
              }
          });
  	    }

  });

});
