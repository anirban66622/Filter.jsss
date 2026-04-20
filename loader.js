(function() {
    // 1. Remove any old versions of the script from the page
    var old = document.getElementById('my-filter-script');
    if (old) old.remove();

    // 2. Load the fresh version from your GitHub
    var script = document.createElement('script');
    script.id = 'my-filter-script';
    
    // The '?v=' at the end forces GitHub to send the LATEST version
    script.src = 'https://cdn.jsdelivr.net/gh/anirban66622/Filter.jsss@main/filter.js?v=' + Math.random();
    
    script.onload = function() {
        console.log('🚀 MASTER VERSION LOADED SUCCESSFULLY!');
    };
    
    document.body.appendChild(script);
})();
