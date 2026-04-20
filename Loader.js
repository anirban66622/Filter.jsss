fetch('https://api.github.com/repos/anirban66622/Filter.jsss/commits/main')
.then(r => r.json())
.then(d => {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/anirban66622/Filter.jsss@' + d.sha + '/filter.js';
  s.async = true;
  document.body.appendChild(s);
});
