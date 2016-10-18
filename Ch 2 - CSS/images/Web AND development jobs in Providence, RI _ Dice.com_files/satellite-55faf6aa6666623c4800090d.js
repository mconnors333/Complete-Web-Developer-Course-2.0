;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//d2ncax2u2awrpe.cloudfront.net/2.5.2/sp.js","snowplow"));

window.snowplow('newTracker', 'co', 'events.dice.com', {
	  appId: 'dice_com',
	  platform: 'web',
	  cookieDomain: '.dice.com',
	  cookieName: 'spdice',
	  respectDoNotTrack: false,
	  userFingerprint: true,
	  userFingerprintSeed: 6385926734,
 	  pageUnloadTimer: 500,
 	  useCookies: true,
    post: true,
    bufferSize: 1,
    maxPostBytes: 45000,
 	  contexts: {
      webPage: true,
      performanceTiming: true,
      gaCookies: true,
      geolocation: false
 	  }
	});

window.snowplow('enableActivityTracking', 30, 30); // Ping every 30 seconds after 30 seconds
window.snowplow('enableLinkClickTracking'); 
window.snowplow('setUserIdFromCookie', 'SKR_USER_NAME' );
window.snowplow('trackPageView');

