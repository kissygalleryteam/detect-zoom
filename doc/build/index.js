/*
combined files : 

kg/detect-zoom/2.0.0/index

*/
/**
 * @author yiminghe<yiminghe@gmail.com>
 * @module detect-zoom
 **/
KISSY.add('kg/detect-zoom/2.0.0/index',function (S) {
	
	var UA=S.UA;
	
	function devicePixelRatio() {
      return window.devicePixelRatio || 1;
  };
  
  function mediaQueryBinarySearch(property, unit, a, b, maxIter, epsilon) {
        var matchMedia;
        var head, style, div;
        if (window.matchMedia) {
            matchMedia = window.matchMedia;
        } else {
            head = document.getElementsByTagName('head')[0];
            style = document.createElement('style');
            head.appendChild(style);

            div = document.createElement('div');
            div.className = 'mediaQueryBinarySearch';
            div.style.display = 'none';
            document.body.appendChild(div);

            matchMedia = function (query) {
                style.sheet.insertRule('@media ' + query + '{.mediaQueryBinarySearch ' + '{text-decoration: underline} }', 0);
                var matched = getComputedStyle(div, null).textDecoration == 'underline';
                style.sheet.deleteRule(0);
                return {matches: matched};
            };
        }
        var ratio = binarySearch(a, b, maxIter);
        if (div) {
            head.removeChild(style);
            document.body.removeChild(div);
        }
        return ratio;

        function binarySearch(a, b, maxIter) {
            var mid = (a + b) / 2;
            if (maxIter <= 0 || b - a < epsilon) {
                return mid;
            }
            var query = "(" + property + ":" + mid + unit + ")";
            if (matchMedia(query).matches) {
                return binarySearch(mid, b, maxIter - 1);
            } else {
                return binarySearch(a, mid, maxIter - 1);
            }
        }
    };
  
  // ie
  if(screen.deviceXDPI){
		return function () {
      var zoom = Math.round((screen.deviceXDPI / screen.logicalXDPI) * 100) / 100;
      return {
          zoom: zoom,
          devicePxPerCssPx: zoom * devicePixelRatio()
      };
    }; 
  } else if( UA.webkit && UA.mobile ){
  	return	function () {
        var deviceWidth = (Math.abs(window.orientation) == 90) ? screen.height : screen.width;
        var zoom = deviceWidth / window.innerWidth;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };	
  } else if(UA.webkit || UA.opera){
  	return function(){
  		// chrome 27
  		var zoom=window.outerWidth/window.innerWidth;

      return{
          zoom: zoom,
          devicePxPerCssPx: zoom * devicePixelRatio()
      };
  	};		
  } else if(UA.firefox && window.devicePixelRatio){
  		return function(){
  			return {
            zoom: devicePixelRatio(),
            devicePxPerCssPx: devicePixelRatio()
        };
  		};
  } else if(UA.firefox){
  	return function(){
  		var zoom = mediaQueryBinarySearch('min--moz-device-pixel-ratio', '', 0, 10, 20, 0.0001);
      zoom = Math.round(zoom * 100) / 100;
      return {
      	zoom: zoom,
        devicePxPerCssPx: zoom
      };
  	};
  } else {
  	return null;
  }
	
});




