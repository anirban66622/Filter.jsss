(function() {
    console.log("🛠️ Filter Script Initializing...");

    // 1. Create the UI Box
    const panel = document.createElement("div");
    panel.id = "custom-filter-box";
    panel.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
        z-index: 100000;
        width: 200px;
        display: block !important;
        border: 2px solid #22c55e;
    `;

    panel.innerHTML = `
        <div style="font-weight:bold; margin-bottom:10px; color: black;">Amount Filter</div>
        <input type="number" id="filter-amount" placeholder="Min Amount" style="width:100%; margin-bottom:10px; padding:5px; border:1px solid #ccc;">
        <button id="start-filter" style="width:100%; padding:8px; background:#22c55e; color:white; border:none; border-radius:5px; font-weight:bold;">Start</button>
        <button id="stop-filter" style="width:100%; padding:8px; background:#ef4444; color:white; border:none; border-radius:5px; font-weight:bold; margin-top:5px; display:none;">Stop</button>
    `;

    document.body.appendChild(panel);

    // 2. Logic to Show/Hide Rows based on Price
    let filterInterval = null;

    document.getElementById('start-filter').onclick = function() {
        const minAmount = parseFloat(document.getElementById('filter-amount').value);
        if (isNaN(minAmount)) { alert("Enter a number first!"); return; }

        this.style.display = "none";
        document.getElementById('stop-filter').style.display = "block";

        filterInterval = setInterval(() => {
            // Find all price elements on pay.me (usually starts with ₹)
            document.querySelectorAll('div, span, p').forEach(el => {
                if (el.innerText.includes('₹')) {
                    const price = parseFloat(el.innerText.replace(/[^\d.]/g, ''));
                    // Check if this is a row or card (up to 4 levels up)
                    const container = el.closest('div[class*="item"], div[class*="row"], .x-row');
                    if (container) {
                        container.style.display = (price === minAmount) ? "" : "none";
                    }
                }
            });
        }, 500);
        console.log("✅ Filtering for ₹" + minAmount);
    };

    document.getElementById('stop-filter').onclick = function() {
        clearInterval(filterInterval);
        this.style.display = "none";
        document.getElementById('start-filter').style.display = "block";
        document.querySelectorAll('div, span, p').forEach(el => {
            const container = el.closest('div[class*="item"], div[class*="row"], .x-row');
            if (container) container.style.display = "";
        });
        console.log("🛑 Filter Stopped");
    };

    console.log("✅ UI Box successfully added to the screen!");
})();
