(function() {
    var old = document.getElementById('my-filter-script');
    if (old) old.remove(); // Remove old broken versions

    var script = document.createElement('script');
    script.id = 'my-filter-script';
    
    // Added ?t=TIMESTAMP to force the browser to grab the NEWEST version
    script.src = 'https://cdn.jsdelivr.net/gh/anirban66622/Filter.jsss@main/filter.js?t=' + new Date().getTime();
    
    script.onload = function() {
        console.log('✅ Latest script fetched and loaded!');
    };
    
    document.body.appendChild(script);
})();
