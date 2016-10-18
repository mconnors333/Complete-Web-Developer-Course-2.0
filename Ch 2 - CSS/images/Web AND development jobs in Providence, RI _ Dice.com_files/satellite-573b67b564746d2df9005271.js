_satellite.pushAsyncScript(function(event, target, $variables){
  var s=s_gi('diceprod');
s.trackingServer='sstats.dice.com';
s.linkTrackVars='eVar53,eVar54,prop37,prop38,events';
s.eVar53 = _satellite.getVar('Job Search 2014 - Search Term');
s.eVar54 = _satellite.getVar('Job Search 2014 - Search Location');
s.prop37 = _satellite.getVar('Job Search 2014 - Search Term');
s.prop38 = _satellite.getVar('Job Search 2014 - Search Location');
s.events= "event20";
s.tl(this,'o','search results info');

});
