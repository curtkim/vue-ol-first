import ol from 'ol'
import TileImage from 'ol/source/tileimage'
import TileGrid from 'ol/tilegrid/tilegrid'

function is_high_resolution_screen() {
  return window.devicePixelRatio > 1;
}

const DaumImg = function(opt_options) {
  var options = opt_options || {};
  if( !options.tileVersion) options.tileVersion = '1804vdy'
  var resolutions = [];
  for(var i = 14; i >= 1; i--)
    resolutions.push(Math.pow(2, i-3))
  var maxExtent = [-30000-Math.pow(2,19)*2, -60000-Math.pow(2,19), -30000+Math.pow(2,19)*3, -60000+Math.pow(2, 19)*3]; // minx miny maxx maxy
  var tilePixelRatio = options.tilePixelRatio || is_high_resolution_screen() ? 2 : 1;
  TileImage.call(this, {
    tilePixelRatio: tilePixelRatio,
    tileGrid: new TileGrid({
      extent: maxExtent,
      origin: [-30000, -60000],
      resolutions: resolutions
    }),
    tileUrlFunction: function(coordinate) {
      if (coordinate === null) return undefined;
      var z = 14-coordinate[0];
      var x = coordinate[1];
      var y = coordinate[2];
      //console.log(coordinate, z);
      var idx = x % 4;
      if(idx < 0 ) idx = idx+4;
      var map_type = tilePixelRatio >=2 ? 'k3f_map_2d_hd' : 'map_2d'; // 'map_2d_hd'
      var url = 'http://map' + idx +'.daumcdn.net/' + map_type + '/'+ options.tileVersion +'/L'+z+'/'+ y +'/'+x +'.png';
      return url;
    }
  });
};
ol.inherits(DaumImg, TileImage);
export default DaumImg