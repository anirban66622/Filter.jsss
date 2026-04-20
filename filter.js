// Cleaned & Forced Visible Version v3
function a0_0x1703(_0x24082f, _0x44ab98) { /* ... same as before ... */ }
function a0_0x4cfb() { /* ... same as before ... */ }

(async function () {
    const _0x5cfc00 = a0_0x1703;
    
    // 1. Wait for the page to be fully ready
    if (document.readyState === 'loading') {
        await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
    }

    // 2. Forced Bypass for Backend/Verification
    async function _0x485850() { return true; }
    async function _0x545ee6() { return; }

    // 3. Create the Panel
    const panel = document.createElement("div");
    panel.className = "amount-filter-panel";
    panel.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #fff;
        border-radius: 12px;
        padding: 14px;
        width: 220px;
        font-family: system-ui;
        box-shadow: 0 12px 28px rgba(0,0,0,.15);
        z-index: 999999;
        display: block !important; 
        border: 2px solid #3498db;
    `;

    // 4. Add UI Elements (Title and Input)
    const title = document.createElement("div");
    title.textContent = "Amount Filter";
    title.style.cssText = "font-weight:600;margin-bottom:8px;color:#2c3e50;";
    
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Enter Amount...";
    input.style.cssText = "width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;margin-bottom:8px;";

    const btn = document.createElement("button");
    btn.textContent = "Start Filter";
    btn.style.cssText = "width:100%;padding:10px;background:#22c55e;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;";

    // 5. Append to Screen
    panel.appendChild(title);
    panel.appendChild(input);
    panel.appendChild(btn);
    
    // Safety check to ensure document.body exists
    if (document.body) {
        document.body.appendChild(panel);
        console.log("✅ Filter UI injected successfully!");
    } else {
        console.error("❌ Could not find document.body");
    }
})();
