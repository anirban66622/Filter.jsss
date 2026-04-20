
(function() {
    console.log("🚀 ArbPay Filter Initializing...");

    // 1. Clean up any previous versions to avoid errors
    const existing = document.getElementById("arbpay-filter-box");
    if (existing) existing.remove();

    // 2. Create the UI Box (Forced Visible)
    const panel = document.createElement("div");
    panel.id = "arbpay-filter-box";
    panel.style.cssText = `
        position: fixed !important;
        bottom: 30px !important;
        right: 20px !important;
        background: #ffffff !important;
        padding: 18px !important;
        border-radius: 15px !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3) !important;
        z-index: 2147483647 !important;
        width: 230px !important;
        display: block !important;
        border: 3px solid #3b82f6 !important;
        font-family: sans-serif !important;
        color: #000 !important;
    `;

    panel.innerHTML = `
        <div style="font-weight:bold; font-size:16px; margin-bottom:12px; border-bottom:1px solid #eee; padding-bottom:8px;">ArbPay Amount Filter</div>
        <div style="margin-bottom:8px; font-size:12px; color:#666;">Filter by exact ₹ amount:</div>
        <input type="number" id="filter-amt" placeholder="e.g. 100" style="width:100%; margin-bottom:12px; padding:10px; border:1px solid #ddd; border-radius:8px; outline:none; font-size:14px; box-sizing:border-box;">
        <button id="btn-start" style="width:100%; padding:12px; background:#22c55e; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer; margin-bottom:8px;">START FILTER</button>
        <button id="btn-stop" style="width:100%; padding:12px; background:#ef4444; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer; display:none;">STOP</button>
    `;

    document.documentElement.appendChild(panel);

    // 3. Filtering Logic
    let activeInterval = null;

    const startBtn = panel.querySelector('#btn-start');
    const stopBtn = panel.querySelector('#btn-stop');
    const inputField = panel.querySelector('#filter-amt');

    startBtn.onclick = function() {
        const targetAmount = inputField.value.trim();
        if (!targetAmount) { alert("Please enter an amount!"); return; }

        startBtn.style.display = "none";
        stopBtn.style.display = "block";
        inputField.disabled = true;

        activeInterval = setInterval(() => {
            // Find all elements containing the currency symbol ₹
            document.querySelectorAll('div, span, p, b').forEach(el => {
                if (el.innerText.includes('₹')) {
                    // Extract just the number
                    const foundPrice = el.innerText.replace(/[^0-9]/g, '');
                    
                    // Look for the closest container card/row to hide (targeted for arbpay.me layout)
                    const container = el.closest('div[class*="item"], div[class*="row"], .x-row, .van-cell');
                    
                    if (container) {
                        if (foundPrice === targetAmount) {
                            container.style.display = "";
                        } else {
                            container.style.display = "none";
                        }
                    }
                }
            });
        }, 600);
        console.log("🔍 Filtering for: ₹" + targetAmount);
    };

    stopBtn.onclick = function() {
        clearInterval(activeInterval);
        startBtn.style.display = "block";
        stopBtn.style.display = "none";
        inputField.disabled = false;

        // Show all hidden elements again
        document.querySelectorAll('div, span, p, b').forEach(el => {
            const container = el.closest('div[class*="item"], div[class*="row"], .x-row, .van-cell');
            if (container) container.style.display = "";
        });
        console.log("🛑 Filter Stopped.");
    };

    console.log("✅ UI Box Injected Successfully!");
})();
