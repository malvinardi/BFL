(function() {
  var c = '#blogger-related-posts ul { padding: 0; list-style-type: none; text-align: center; } #blogger-related-posts li { float: left; margin: 0 1%; width: 18%; } #blogger-related-posts a { display: block; } #blogger-related-posts span { display: block; margin: 0 auto .5em; width: 72px; height: 72px; } #blogger-related-posts ul:after { content: ""; display: block; clear: both; }';
  var s = document.createElement('style');
  s.type = 'text/css';
  if (s.styleSheet) {
    s.styleSheet.cssText = c;
  } else {
    s.appendChild(document.createTextNode(c));
  }
  document.getElementsByTagName('head')[0].appendChild(s);
  var t = document.createElement('script');
  t.type = 'text/javascript';
  t.src = '//cdn.rawgit.com/salmanarshad2000/blogger-related-posts-widget/v1.0.3/related-posts.min.js';
  document.getElementsByTagName('head')[0].appendChild(t);
})();
