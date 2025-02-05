(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jHHtl":[function(require,module,exports) {
var d = globalThis.process?.argv || [];
var y = ()=>globalThis.process?.env || {};
var H = new Set(d), _ = (e)=>H.has(e), G = d.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var Z = _("--dry-run"), p = ()=>_("--verbose") || y().VERBOSE === "true", q = p();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), S = 0, c = (...e)=>p() && u(`\u{1F7E1} ${S++}`, ...e);
var n = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 57698,
    "entryFilePath": "C:\\Users\\shirisi\\Desktop\\newstripeintegration\\extension\\booking-availability\\contents\\findavailability.js",
    "bundleId": "f2a17f90389322c9",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 57697
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function I(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function C() {
    return n.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let w = a.codeframe || a.stack;
            m("[plasmo/parcel-runtime]: " + a.message + `
` + w + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var s = "__plasmo-loading__";
function $() {
    let e = globalThis.window?.trustedTypes;
    if (typeof e > "u") return;
    let t = document.querySelector('meta[name="trusted-types"]')?.content?.split(" "), o = t ? t[t?.length - 1] : void 0;
    return typeof e < "u" ? e.createPolicy(o || `trusted-html-${s}`, {
        createHTML: (a)=>a
    }) : void 0;
}
var T = $();
function g() {
    return document.getElementById(s);
}
function f() {
    return !g();
}
function F() {
    let e = document.createElement("div");
    e.id = s;
    let t = `
  <style>
    #${s} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${s}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${s} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${s} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${s} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${s} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function N(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = F();
        e = N(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var W = `${E}${module.id}__`, i, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    i?.disconnect(), i = l?.runtime.connect({
        name: W
    }), i.onDisconnect.addListener(()=>{
        h();
    }), i.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function j() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
j();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === n.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? i.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"bpLuV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
console.log("up and running the content to show time slots");
window.onload = function() {
    if (window.location.href.includes("https://fp.trafikverket.se/Boka/#/search/")) // Add your code to handle the section here
    checkAvailability();
};
// // Function to save selected value to local storage
// function saveSelectedValue(value) {
//   chrome.storage.local.set({ [LOCAL_STORAGE_KEY]: value })
// }
// // Function to retrieve and apply saved value on page load
// function applySavedSelection() {
//   const LOCAL_STORAGE_KEY = "selectedOption"
//   chrome.storage.local.get(LOCAL_STORAGE_KEY, (result) => {
//     const savedValue = result[LOCAL_STORAGE_KEY]
//     if (savedValue) {
//       selectElement.value = savedValue
//       selectElement.dispatchEvent(new Event("change")) // Triggers a re-render
//     }
//   })
// }
// In content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    if (request.action === "startAutomation") {
        // Set stopAutomation to false in local storage
        chrome.storage.local.set({
            startAutomation: true
        }, ()=>{
            console.log("stopAutomation set to false");
            location.reload(true);
            // Call the function to start automation after setting stopAutomation to false
            // findtimeslots()
            // Send a response indicating the action was successful
            sendResponse({
                success: true
            });
        });
        // Return true to keep the message channel open for asynchronous response
        return true;
    }
    if (request.action === "stopAutomation") {
        // Call the function to start automation when the message is received
        chrome.storage.local.set({
            startAutomation: false
        }, ()=>{
            console.log("stopAutomation status saved as true");
            sendResponse({
                success: true
            });
        });
        // Return true to indicate that we will send a response asynchronously
        return true;
    }
});
let attempts = 0 // Track the number of attempts
;
const maxAttempts = 10 // Maximum attempts before reloading
;
const checkAvailability = async ()=>{
    // First, retrieve the stored value and set it to the input field
    const startAutomation = await new Promise((resolve)=>{
        chrome.storage.local.get([
            "startAutomation"
        ], (data)=>resolve(data.startAutomation));
    });
    console.log("startAutomation>>>>>>>>>>>>>>", startAutomation);
    // If startAutomation is false, exit the function
    if (!startAutomation) {
        console.log("Automation is turned off. Stopping execution.");
        return;
    }
    // Wait for all necessary elements to be available
    let formElement, formGroup, secDiv, thirdDiv, selectElement, dropdownMenu, thirdSelect;
    while(!formElement || !formGroup || !secDiv || !thirdDiv || !selectElement || !dropdownMenu || !thirdSelect){
        formElement = document.querySelector('form[role="form"]:last-of-type');
        if (formElement) {
            formGroup = formElement.querySelector("div.form-group");
            if (formGroup) {
                const formGroupDivs = formGroup.querySelectorAll("div");
                secDiv = formGroupDivs[1];
                thirdDiv = formGroupDivs[2];
                if (secDiv && thirdDiv) {
                    selectElement = secDiv.querySelector("select");
                    dropdownMenu = thirdDiv.querySelector("ul.dropdown-menu");
                    thirdSelect = thirdDiv.querySelector('div[class*="dropdown"] > input');
                }
            }
        }
        if (!formElement || !formGroup || !secDiv || !thirdDiv || !selectElement || !dropdownMenu || !thirdSelect) await new Promise((resolve)=>setTimeout(resolve, 500)); // Delay before retrying
    }
    // const formElement = document.querySelector('form[role="form"]:last-of-type')
    // const formGroup = formElement.querySelector("div.form-group")
    // const formGroupDivs = formGroup.querySelectorAll("div")
    // const secDiv = formGroupDivs[1]
    // const thirdDiv = formGroupDivs[2]
    // const selectElement = secDiv.querySelector("select")
    console.log("selectElement>>>>>>>>>>>>", selectElement);
    // Find the dropdown menu
    // const dropdownMenu = thirdDiv.querySelector('ul.dropdown-menu');
    console.log("Dropdown menu found:", dropdownMenu);
    // const thirdSelect = thirdDiv.querySelector('div[class*="dropdown"] > input')
    console.log("thirdSelect>>>>>>", thirdSelect);
    const result = await new Promise((resolve)=>{
        chrome.storage.local.get([
            "inputValue",
            "multiSelectValues"
        ], (data)=>resolve({
                inputValue: data.inputValue || "",
                multiSelectValues: Array.isArray(data.multiSelectValues) ? data.multiSelectValues : [] // Default to empty array if multiSelectValues is not an array
            }));
    });
    console.log("result>>>>>>>>>", result);
    if (result.inputValue && result.multiSelectValues) {
        // await new Promise((resolve) => setTimeout(resolve, 500))
        console.log("selecting options");
        // Mapping from display text to the corresponding values in the select options
        const valueMapping = {
            Kunskapsprov: "2",
            K\u00f6rprov: "9"
        };
        const selectedValues = result.multiSelectValues.map((text)=>valueMapping[text] || text // Default to text if not in mapping
        );
        console.log("Values to select:", selectedValues);
        Array.from(selectElement.options).forEach((option)=>{
            option.selected = selectedValues.includes(option.value);
        });
        selectElement.dispatchEvent(new Event("change", {
            bubbles: true
        }));
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        thirdSelect.value = "";
        // Type the value character by character with a slight delay
        for (const char of result.inputValue){
            thirdSelect.value += char;
            thirdSelect.dispatchEvent(new Event("input", {
                bubbles: true
            }));
            await new Promise((resolve)=>setTimeout(resolve, 100)) // Adjust typing speed as needed
            ;
        }
        // Focus on the element
        thirdSelect.focus();
        // // Add a delay, then trigger "Enter" key event programmatically
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        // const keyupEvent = new KeyboardEvent("keyup", {
        //   key: "Enter",
        //   code: "Enter",
        //   keyCode: 13,
        //   which: 13,
        //   bubbles: true
        // })
        // thirdSelect.dispatchEvent(keyupEvent)
        const optionToSelect = Array.from(dropdownMenu.querySelectorAll("li")).find((li)=>{
            return li.textContent.trim() === result.inputValue;
        });
        console.log("optionToSelect>>>>>>", optionToSelect);
        if (optionToSelect) {
            console.log(`Selecting option: ${result.inputValue}`);
            // Simulate a click on the found option
            optionToSelect.click();
        } else console.log(`Option "${result.inputValue}" not found in dropdown`);
        console.log("Restored input value from local storage:", result.thirdInputValue);
    }
    const sectionElement = document.querySelector("div.container-fluid > section:last-of-type");
    if (!sectionElement) {
        console.log("Section not found.");
        attempts++;
        if (attempts >= maxAttempts) {
            console.log("Max attempts reached. Reloading page...");
            window.location.reload();
        } else setTimeout(checkAvailability, 1000);
        return;
    }
    console.log("Section found:", sectionElement);
    const observer = new MutationObserver((mutationsList)=>{
        for (const mutation of mutationsList)if (mutation.type === "childList") {
            console.log("DOM changes detected, rechecking availability...");
            const secondDiv = sectionElement.querySelector("div:nth-of-type(2)");
            if (secondDiv) {
                const lastDiv = secondDiv.children[secondDiv.children.length - 1];
                const panels = lastDiv.querySelectorAll("div.panel");
                if (panels.length > 0) {
                    console.log("Availability found! Sending message.");
                    sendAvailabilityMessage();
                    observer.disconnect();
                    return;
                }
            }
        }
    });
    observer.observe(sectionElement, {
        childList: true,
        subtree: true
    });
    // Check for availability within sectionElement
    const secondDiv = sectionElement.querySelector("div:nth-of-type(2)");
    if (secondDiv) {
        const lastDiv = secondDiv.children[secondDiv.children.length - 1];
        const panels = lastDiv.querySelectorAll("div.panel");
        if (panels.length > 0) {
            console.log("Availability found! Sending message.");
            sendAvailabilityMessage();
            observer.disconnect();
            return;
        } else {
            console.log("No availability found. Attempt:", attempts + 1);
            attempts += 1;
        }
    } else {
        console.log("Required divs not found.");
        attempts += 1;
    }
    // Check if maximum attempts have been reached
    if (attempts >= maxAttempts) {
        console.log("Max attempts reached. Reloading page...");
        window.location.reload() // Reload the page
        ;
    } else // Schedule the next check after 1 second
    setTimeout(checkAvailability, 3000);
};
// Start the availability checking loop
function sendAvailabilityMessage() {
    chrome.runtime.sendMessage({
        message: "availability",
        status: "available"
    }, (response)=>{
        console.log("Message sent from content script to background:", response);
    });
} // Loop over each panel
 // panels.forEach((panel) => {
 //   // Select the div with the class 'panel-body' inside each panel
 //   const panelBody = panel.querySelector("div.panel-body > div.row > div[data-bind='foreach:occasions'] > div.row")
 //   if (panelBody) {
 //     // Do something with panelBody, for example, log or manipulate it
 //     console.log("panelBody>>>>>>>", panelBody)
 //     const panelRow = panelBody.querySelector("div:nth-of-type(1)")
 //     if (panelRow) {
 //       // Find the strong element inside panelRow
 //       const strongElement = panelRow.querySelector("strong");
 //       if (strongElement) {
 //         // Get the two font elements inside the strong element
 //         const fonts = strongElement.querySelectorAll('font');
 //         if (fonts.length >= 2) {
 //           // Extract the date from the first font element
 //           const date = fonts[0].textContent.trim();
 //           // Extract the time from the second font element
 //           const time = fonts[1].textContent.trim();
 //           // Log or use the extracted date and time
 //           console.log(`Date: ${date}, Time: ${time}`);
 //           // Do something with the extracted values if needed
 //         }
 //       }
 //     }
 //     // Example: Modify or work with the panel body content
 //     panelBody.textContent = "New Content for Panel Body"
 //   }
 // })
 // async function inputvaluestore(sectionElement) {
 // await new Promise((resolve) => {
 //   console.log("here now going to start finding")
 //   chrome.storage.local.get(["startAutomation"], (results) => {
 //     if (results.startAutomation == true) {
 //       findtimeslots(resolve)
 //     }
 //   })
 // })
 // Select the last form element with role="form"
 // const formElement = sectionElement.querySelector(
 //   'form[role="form"]:last-of-type'
 // )
 // if (formElement) {
 //   console.log("Form found:", formElement)
 //   // Select the first div element with class "form-group"
 //   const formGroup = formElement.querySelector("div.form-group")
 //   const formGroupDivs = formGroup.querySelectorAll("div")
 //   // Ensure there are at least 3 div elements
 //   if (formGroupDivs.length >= 3) {
 // const secDiv = formGroupDivs[1]
 // const thirdDiv = formGroupDivs[2]
 // console.log("secDiv>>>>>", secDiv)
 // console.log("Third div>>>>>>>>", thirdDiv)
 // const selectElement = secDiv.querySelector("select")
 // console.log("selectElement>>>>>>", selectElement)
 // applySavedSelection()
 // // Add event listener to save selected value when the user changes it
 // selectElement.addEventListener("change", (event) => {
 //   saveSelectedValue(event.target.value)
 // })
 // const thirdSelect = thirdDiv.querySelector(
 //   'div[class*="dropdown"] > input'
 // )
 // console.log("thirdSelect>>>>>>", thirdSelect)
 // First, retrieve the stored value and set it to the input field
 // const result = await new Promise((resolve) => {
 //   chrome.storage.local.get(["thirdInputValue"], (data) => resolve(data))
 // })
 // if (result.thirdInputValue) {
 //   // Focus on the element
 //   // await new Promise((resolve) => setTimeout(resolve, 5000))
 //   // Clear the input field first
 //   thirdSelect.value = ""
 //   // Type the value character by character with a slight delay
 //   for (const char of result.thirdInputValue) {
 //     thirdSelect.value += char
 //     thirdSelect.dispatchEvent(new Event("input", { bubbles: true }))
 //     await new Promise((resolve) => setTimeout(resolve, 100)) // Adjust typing speed as needed
 //   }
 //   // Focus on the element
 //   thirdSelect.focus()
 //   // Add a delay, then trigger "Enter" key event programmatically
 //   await new Promise((resolve) => setTimeout(resolve, 1000))
 //   const keyupEvent = new KeyboardEvent("keyup", {
 //     key: "Enter",
 //     code: "Enter",
 //     keyCode: 13,
 //     which: 13,
 //     bubbles: true
 //   })
 //   thirdSelect.dispatchEvent(keyupEvent)
 //   console.log(
 //     "Restored input value from local storage:",
 //     result.thirdInputValue
 //   )
 // await new Promise((resolve) => setTimeout(resolve, 10000))
 // }
 // if (thirdSelect) {
 //   thirdSelect.addEventListener("change", () => {
 //     const inputValue = thirdSelect.value
 //     console.log("Third input value stored:", inputValue)
 //     // Store the value locally using chrome.storage.local
 //     chrome.storage.local.set({ thirdInputValue: inputValue }, () => {
 //       console.log("Value stored in chrome.storage.local:", inputValue)
 //     })
 //   })
 // } else {
 //   console.log("One or more select elements not found.")
 // }
 // } else {
 //   console.log('Not enough div elements with class "form-group".')
 // }
 // } else {
 //   console.log('Form with role="form" not found.')
 // }
 // }

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"6dfwG":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["jHHtl","bpLuV"], "bpLuV", "parcelRequire847b")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5RTtDQUN6RSxTQUFTO0NBQ1QsT0FBTztDQUNQLFdBQVc7Q0FDWCwwREFBMEQ7Q0FDMUQsSUFBSTtDQUNKLFdBQVc7Q0FDWCxvRUFBb0U7Q0FDcEUsSUFBSTtDQUNKLFdBQVc7Q0FDWCxvREFBb0Q7Q0FDcEQsSUFBSTtDQUNKLElBQUk7OztBQ2hhSixRQUFRLGlCQUFpQixTQUFVLENBQUM7SUFDbEMsT0FBTyxLQUFLLEVBQUUsYUFBYSxJQUFJO1FBQUMsU0FBUztJQUFDO0FBQzVDO0FBRUEsUUFBUSxvQkFBb0IsU0FBVSxDQUFDO0lBQ3JDLE9BQU8sZUFBZSxHQUFHLGNBQWM7UUFBQyxPQUFPO0lBQUk7QUFDckQ7QUFFQSxRQUFRLFlBQVksU0FBVSxNQUFNLEVBQUUsSUFBSTtJQUN4QyxPQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztRQUN2QyxJQUFJLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixLQUFLLGVBQWUsTUFDbkU7UUFHRixPQUFPLGVBQWUsTUFBTSxLQUFLO1lBQy9CLFlBQVk7WUFDWixLQUFLO2dCQUNILE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxTQUFTLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0lBQzVDLE9BQU8sZUFBZSxNQUFNLFVBQVU7UUFDcEMsWUFBWTtRQUNaLEtBQUs7SUFDUDtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMjUuMS9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0xOTkxOTlkNzAxYmY2NDJmLmpzIiwiY29udGVudHMvZmluZGF2YWlsYWJpbGl0eS5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOS4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZD1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciB5PSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEg9bmV3IFNldChkKSxfPWU9PkguaGFzKGUpLEc9ZC5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBaPV8oXCItLWRyeS1ydW5cIikscD0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8eSgpLlZFUkJPU0U9PT1cInRydWVcIixxPXAoKTt2YXIgdT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeD0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT51KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksbT0oLi4uZSk9PnUoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxTPTAsYz0oLi4uZSk9PnAoKSYmdShgXFx1ezFGN0UxfSAke1MrK31gLC4uLmUpO3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOnRydWUsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wic2NyaXB0LXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjo1NzY5OCxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXHNoaXJpc2lcXFxcRGVza3RvcFxcXFxuZXdzdHJpcGVpbnRlZ3JhdGlvblxcXFxleHRlbnNpb25cXFxcYm9va2luZy1hdmFpbGFiaWxpdHlcXFxcY29udGVudHNcXFxcZmluZGF2YWlsYWJpbGl0eS5qc1wiLFwiYnVuZGxlSWRcIjpcImYyYTE3ZjkwMzg5MzIyYzlcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1NzY5N307bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgYSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWEuY29kZWZyYW1lfHxhLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrYS5tZXNzYWdlK2BcbmArdytgXG5cbmArYS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHM9XCJfX3BsYXNtby1sb2FkaW5nX19cIjtmdW5jdGlvbiAkKCl7bGV0IGU9Z2xvYmFsVGhpcy53aW5kb3c/LnRydXN0ZWRUeXBlcztpZih0eXBlb2YgZT5cInVcIilyZXR1cm47bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHJ1c3RlZC10eXBlc1wiXScpPy5jb250ZW50Py5zcGxpdChcIiBcIiksbz10P3RbdD8ubGVuZ3RoLTFdOnZvaWQgMDtyZXR1cm4gdHlwZW9mIGU8XCJ1XCI/ZS5jcmVhdGVQb2xpY3kob3x8YHRydXN0ZWQtaHRtbC0ke3N9YCx7Y3JlYXRlSFRNTDphPT5hfSk6dm9pZCAwfXZhciBUPSQoKTtmdW5jdGlvbiBnKCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHMpfWZ1bmN0aW9uIGYoKXtyZXR1cm4hZygpfWZ1bmN0aW9uIEYoKXtsZXQgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaWQ9cztsZXQgdD1gXG4gIDxzdHlsZT5cbiAgICAjJHtzfSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgICAgYm94LXNoYWRvdzogIzMzMyA0LjdweCA0LjdweDtcbiAgICB9XG5cbiAgICAjJHtzfTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIHtcbiAgICAgIDAlIHtcbiAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgZmlsbDogIzMzMztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMSB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC44cyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke3N9IC5zdmctZWxlbS0yIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjlzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuICAgIFxuICAgICMke3N9IC5zdmctZWxlbS0zIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAxcyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke3N9IC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgPC9zdHlsZT5cbiAgXG4gIDxzdmcgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNjQgMzU0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xMzkuMjIxIDI4Mi4yNDNDMTU0LjI1MiAyODIuMjQzIDE2Ni45MDMgMjk0Ljg0OSAxNjEuMzM4IDMwOC44MTJDMTU5LjQ4OSAzMTMuNDU0IDE1Ny4xNSAzMTcuOTEzIDE1NC4zNDcgMzIyLjEwOUMxNDYuNDY0IDMzMy45MDkgMTM1LjI2IDM0My4xMDcgMTIyLjE1MSAzNDguNTM4QzEwOS4wNDMgMzUzLjk2OSA5NC42MTgyIDM1NS4zOSA4MC43MDIyIDM1Mi42MjFDNjYuNzg2MSAzNDkuODUyIDU0LjAwMzQgMzQzLjAxOCA0My45NzA1IDMzMi45ODNDMzMuOTM3NSAzMjIuOTQ3IDI3LjEwNSAzMTAuMTYyIDI0LjMzNjkgMjk2LjI0MkMyMS41Njg5IDI4Mi4zMjMgMjIuOTg5NSAyNjcuODk1IDI4LjQxOTMgMjU0Ljc4M0MzMy44NDkxIDI0MS42NzEgNDMuMDQ0MSAyMzAuNDY0IDU0Ljg0MTYgMjIyLjU3OUM1OS4wMzUzIDIxOS43NzcgNjMuNDkwOCAyMTcuNDM4IDY4LjEyOTUgMjE1LjU4OEM4Mi4wOTE1IDIxMC4wMjEgOTQuNjk3OCAyMjIuNjcxIDk0LjY5NzggMjM3LjcwM0w5NC42OTc4IDI1NS4wMjdDOTQuNjk3OCAyNzAuMDU4IDEwNi44ODMgMjgyLjI0MyAxMjEuOTE0IDI4Mi4yNDNIMTM5LjIyMVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMVwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk0xOTIuMjYxIDE0Mi4wMjhDMTkyLjI2MSAxMjYuOTk2IDIwNC44NjcgMTE0LjM0NiAyMTguODI5IDExOS45MTNDMjIzLjQ2OCAxMjEuNzYzIDIyNy45MjMgMTI0LjEwMiAyMzIuMTE3IDEyNi45MDRDMjQzLjkxNSAxMzQuNzg5IDI1My4xMSAxNDUuOTk2IDI1OC41MzkgMTU5LjEwOEMyNjMuOTY5IDE3Mi4yMiAyNjUuMzkgMTg2LjY0OCAyNjIuNjIyIDIwMC41NjdDMjU5Ljg1NCAyMTQuNDg3IDI1My4wMjEgMjI3LjI3MiAyNDIuOTg4IDIzNy4zMDhDMjMyLjk1NSAyNDcuMzQzIDIyMC4xNzMgMjU0LjE3NyAyMDYuMjU2IDI1Ni45NDZDMTkyLjM0IDI1OS43MTUgMTc3LjkxNiAyNTguMjk0IDE2NC44MDcgMjUyLjg2M0MxNTEuNjk5IDI0Ny40MzIgMTQwLjQ5NSAyMzguMjM0IDEzMi42MTIgMjI2LjQzNEMxMjkuODA4IDIyMi4yMzggMTI3LjQ3IDIxNy43NzkgMTI1LjYyIDIxMy4xMzdDMTIwLjA1NiAxOTkuMTc0IDEzMi43MDcgMTg2LjU2OCAxNDcuNzM4IDE4Ni41NjhMMTY1LjA0NCAxODYuNTY4QzE4MC4wNzYgMTg2LjU2OCAxOTIuMjYxIDE3NC4zODMgMTkyLjI2MSAxNTkuMzUyTDE5Mi4yNjEgMTQyLjAyOFpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMlwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk05NS42NTIyIDE2NC4xMzVDOTUuNjUyMiAxNzkuMTY3IDgzLjIyNzkgMTkxLjcyNSA2OC44MDEzIDE4Ny41MDVDNTkuNTE0NSAxODQuNzg4IDUwLjY0MzIgMTgwLjY2MyA0Mi41MTA2IDE3NS4yMjdDMjYuNzgwNiAxNjQuNzE0IDE0LjUyMDYgMTQ5Ljc3MiA3LjI4MDg5IDEzMi4yODlDMC4wNDExODMgMTE0LjgwNyAtMS44NTMwNSA5NS41Njk3IDEuODM3NzIgNzcuMDEwNEM1LjUyODQ5IDU4LjQ1MTEgMTQuNjM4NSA0MS40MDMzIDI4LjAxNTcgMjguMDIyOEM0MS4zOTMgMTQuNjQyMyA1OC40MzY2IDUuNTMwMDYgNzYuOTkxNCAxLjgzODM5Qzk1LjU0NjEgLTEuODUzMjkgMTE0Ljc3OSAwLjA0MTQxNjIgMTMyLjI1NyA3LjI4MjlDMTQ5LjczNSAxNC41MjQ0IDE2NC42NzQgMjYuNzg3NCAxNzUuMTg0IDQyLjUyMTJDMTgwLjYyIDUwLjY1NzYgMTg0Ljc0NCA1OS41MzMyIDE4Ny40NiA2OC44MjQ1QzE5MS42NzggODMuMjUxOSAxNzkuMTE5IDk1LjY3NTkgMTY0LjA4OCA5NS42NzU5TDEyMi44NjkgOTUuNjc1OUMxMDcuODM3IDk1LjY3NTkgOTUuNjUyMiAxMDcuODYxIDk1LjY1MjIgMTIyLjg5Mkw5NS42NTIyIDE2NC4xMzVaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTNcIj48L3BhdGg+XG4gIDwvc3ZnPlxuICA8c3BhbiBjbGFzcz1cImhpZGRlblwiPkNvbnRleHQgSW52YWxpZGF0ZWQsIFByZXNzIHRvIFJlbG9hZDwvc3Bhbj5cbiAgYDtyZXR1cm4gZS5pbm5lckhUTUw9VD9ULmNyZWF0ZUhUTUwodCk6dCxlLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsZS5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCIsZS5zdHlsZS5ib3R0b209XCIxNC43cHhcIixlLnN0eWxlLnJpZ2h0PVwiMTQuN3B4XCIsZS5zdHlsZS5mb250RmFtaWx5PVwic2Fucy1zZXJpZlwiLGUuc3R5bGUuZGlzcGxheT1cImZsZXhcIixlLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIsZS5zdHlsZS5hbGlnbkl0ZW1zPVwiY2VudGVyXCIsZS5zdHlsZS5wYWRkaW5nPVwiMTQuN3B4XCIsZS5zdHlsZS5nYXA9XCIxNC43cHhcIixlLnN0eWxlLmJvcmRlclJhZGl1cz1cIjQuN3B4XCIsZS5zdHlsZS56SW5kZXg9XCIyMTQ3NDgzNjQ3XCIsZS5zdHlsZS5vcGFjaXR5PVwiMFwiLGUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwLjQ3cyBlYXNlLWluLW91dFwiLGV9ZnVuY3Rpb24gTihlKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e2RvY3VtZW50LmRvY3VtZW50RWxlbWVudD8oZigpJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKSksdCgpKTpnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PntmKCkmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCl9KX0pfXZhciBrPSgpPT57bGV0IGU7aWYoZigpKXtsZXQgdD1GKCk7ZT1OKHQpfXJldHVybntzaG93OmFzeW5jKHtyZWxvYWRCdXR0b246dD0hMX09e30pPT57YXdhaXQgZTtsZXQgbz1nKCk7by5zdHlsZS5vcGFjaXR5PVwiMVwiLHQmJihvLm9uY2xpY2s9cj0+e3Iuc3RvcFByb3BhZ2F0aW9uKCksZ2xvYmFsVGhpcy5sb2NhdGlvbi5yZWxvYWQoKX0sby5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpLG8uc3R5bGUuY3Vyc29yPVwicG9pbnRlclwiLG8uc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiKX0saGlkZTphc3luYygpPT57YXdhaXQgZTtsZXQgdD1nKCk7dC5zdHlsZS5vcGFjaXR5PVwiMFwifX19O3ZhciBXPWAke0V9JHttb2R1bGUuaWR9X19gLGksQT0hMSxNPWsoKTthc3luYyBmdW5jdGlvbiBoKCl7YyhcIlNjcmlwdCBSdW50aW1lIC0gcmVsb2FkaW5nXCIpLEE/Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKTpNLnNob3coe3JlbG9hZEJ1dHRvbjohMH0pfWZ1bmN0aW9uIFIoKXtpPy5kaXNjb25uZWN0KCksaT1sPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6V30pLGkub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57aCgpfSksaS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZT0+e2UuX19wbGFzbW9fY3NfcmVsb2FkX18mJmgoKSxlLl9fcGxhc21vX2NzX2FjdGl2ZV90YWJfXyYmKEE9ITApfSl9ZnVuY3Rpb24gaigpe2lmKGw/LnJ1bnRpbWUpdHJ5e1IoKSxzZXRJbnRlcnZhbChSLDI0ZTMpfWNhdGNoe3JldHVybn19aigpO1AoYXN5bmMgZT0+e2MoXCJTY3JpcHQgcnVudGltZSAtIG9uIHVwZGF0ZWQgYXNzZXRzXCIpLGUuZmlsdGVyKG89Pm8uZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShvPT5MKG1vZHVsZS5idW5kbGUsby5pZCkpJiYoTS5zaG93KCksbD8ucnVudGltZT9pLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19jaGFuZ2VkX186ITB9KTpzZXRUaW1lb3V0KCgpPT57aCgpfSw0NzAwKSl9KTtcbiIsImV4cG9ydCB7fVxyXG5jb25zb2xlLmxvZyhcInVwIGFuZCBydW5uaW5nIHRoZSBjb250ZW50IHRvIHNob3cgdGltZSBzbG90c1wiKVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcImh0dHBzOi8vZnAudHJhZmlrdmVya2V0LnNlL0Jva2EvIy9zZWFyY2gvXCIpXHJcbiAgKSB7XHJcbiAgICAgICAgLy8gQWRkIHlvdXIgY29kZSB0byBoYW5kbGUgdGhlIHNlY3Rpb24gaGVyZVxyXG4gICAgICAgIGNoZWNrQXZhaWxhYmlsaXR5KClcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuLy8gLy8gRnVuY3Rpb24gdG8gc2F2ZSBzZWxlY3RlZCB2YWx1ZSB0byBsb2NhbCBzdG9yYWdlXHJcbi8vIGZ1bmN0aW9uIHNhdmVTZWxlY3RlZFZhbHVlKHZhbHVlKSB7XHJcbi8vICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW0xPQ0FMX1NUT1JBR0VfS0VZXTogdmFsdWUgfSlcclxuLy8gfVxyXG5cclxuLy8gLy8gRnVuY3Rpb24gdG8gcmV0cmlldmUgYW5kIGFwcGx5IHNhdmVkIHZhbHVlIG9uIHBhZ2UgbG9hZFxyXG4vLyBmdW5jdGlvbiBhcHBseVNhdmVkU2VsZWN0aW9uKCkge1xyXG4vLyAgIGNvbnN0IExPQ0FMX1NUT1JBR0VfS0VZID0gXCJzZWxlY3RlZE9wdGlvblwiXHJcblxyXG4vLyAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChMT0NBTF9TVE9SQUdFX0tFWSwgKHJlc3VsdCkgPT4ge1xyXG4vLyAgICAgY29uc3Qgc2F2ZWRWYWx1ZSA9IHJlc3VsdFtMT0NBTF9TVE9SQUdFX0tFWV1cclxuLy8gICAgIGlmIChzYXZlZFZhbHVlKSB7XHJcbi8vICAgICAgIHNlbGVjdEVsZW1lbnQudmFsdWUgPSBzYXZlZFZhbHVlXHJcbi8vICAgICAgIHNlbGVjdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpIC8vIFRyaWdnZXJzIGEgcmUtcmVuZGVyXHJcbi8vICAgICB9XHJcbi8vICAgfSlcclxuLy8gfVxyXG5cclxuXHJcbi8vIEluIGNvbnRlbnQgc2NyaXB0XHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcclxuICBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwic3RhcnRBdXRvbWF0aW9uXCIpIHtcclxuICAgIC8vIFNldCBzdG9wQXV0b21hdGlvbiB0byBmYWxzZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzdGFydEF1dG9tYXRpb246IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN0b3BBdXRvbWF0aW9uIHNldCB0byBmYWxzZVwiKVxyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSlcclxuICAgICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gc3RhcnQgYXV0b21hdGlvbiBhZnRlciBzZXR0aW5nIHN0b3BBdXRvbWF0aW9uIHRvIGZhbHNlXHJcbiAgICAgIC8vIGZpbmR0aW1lc2xvdHMoKVxyXG5cclxuICAgICAgLy8gU2VuZCBhIHJlc3BvbnNlIGluZGljYXRpbmcgdGhlIGFjdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFJldHVybiB0cnVlIHRvIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luY2hyb25vdXMgcmVzcG9uc2VcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJzdG9wQXV0b21hdGlvblwiKSB7XHJcbiAgICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBzdGFydCBhdXRvbWF0aW9uIHdoZW4gdGhlIG1lc3NhZ2UgaXMgcmVjZWl2ZWRcclxuXHJcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzdGFydEF1dG9tYXRpb246IGZhbHNlIH0sICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJzdG9wQXV0b21hdGlvbiBzdGF0dXMgc2F2ZWQgYXMgdHJ1ZVwiKVxyXG4gICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pXHJcbiAgICB9KVxyXG4gICAgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB3ZSB3aWxsIHNlbmQgYSByZXNwb25zZSBhc3luY2hyb25vdXNseVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn0pXHJcblxyXG5cclxuICBsZXQgYXR0ZW1wdHMgPSAwIC8vIFRyYWNrIHRoZSBudW1iZXIgb2YgYXR0ZW1wdHNcclxuICBjb25zdCBtYXhBdHRlbXB0cyA9IDEwIC8vIE1heGltdW0gYXR0ZW1wdHMgYmVmb3JlIHJlbG9hZGluZ1xyXG5cclxuICBjb25zdCBjaGVja0F2YWlsYWJpbGl0eSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIEZpcnN0LCByZXRyaWV2ZSB0aGUgc3RvcmVkIHZhbHVlIGFuZCBzZXQgaXQgdG8gdGhlIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBzdGFydEF1dG9tYXRpb24gPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wic3RhcnRBdXRvbWF0aW9uXCJdLCAoZGF0YSkgPT5cclxuICAgICAgICByZXNvbHZlKGRhdGEuc3RhcnRBdXRvbWF0aW9uKVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coXCJzdGFydEF1dG9tYXRpb24+Pj4+Pj4+Pj4+Pj4+PlwiLCBzdGFydEF1dG9tYXRpb24pXHJcbiAgICAvLyBJZiBzdGFydEF1dG9tYXRpb24gaXMgZmFsc2UsIGV4aXQgdGhlIGZ1bmN0aW9uXHJcbiAgICBpZiAoIXN0YXJ0QXV0b21hdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkF1dG9tYXRpb24gaXMgdHVybmVkIG9mZi4gU3RvcHBpbmcgZXhlY3V0aW9uLlwiKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIFxyXG4gICAgIC8vIFdhaXQgZm9yIGFsbCBuZWNlc3NhcnkgZWxlbWVudHMgdG8gYmUgYXZhaWxhYmxlXHJcbiAgICBsZXQgZm9ybUVsZW1lbnQsIGZvcm1Hcm91cCwgc2VjRGl2LCB0aGlyZERpdiwgc2VsZWN0RWxlbWVudCwgZHJvcGRvd25NZW51LCB0aGlyZFNlbGVjdDtcclxuXHJcbiAgICB3aGlsZSAoIWZvcm1FbGVtZW50IHx8ICFmb3JtR3JvdXAgfHwgIXNlY0RpdiB8fCAhdGhpcmREaXYgfHwgIXNlbGVjdEVsZW1lbnQgfHwgIWRyb3Bkb3duTWVudSB8fCAhdGhpcmRTZWxlY3QpIHtcclxuICAgICAgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW3JvbGU9XCJmb3JtXCJdOmxhc3Qtb2YtdHlwZScpO1xyXG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICBmb3JtR3JvdXAgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmZvcm0tZ3JvdXBcIik7XHJcbiAgICAgICAgaWYgKGZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgY29uc3QgZm9ybUdyb3VwRGl2cyA9IGZvcm1Hcm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgc2VjRGl2ID0gZm9ybUdyb3VwRGl2c1sxXTtcclxuICAgICAgICAgIHRoaXJkRGl2ID0gZm9ybUdyb3VwRGl2c1syXTtcclxuICAgICAgICAgIGlmIChzZWNEaXYgJiYgdGhpcmREaXYpIHtcclxuICAgICAgICAgICAgc2VsZWN0RWxlbWVudCA9IHNlY0Rpdi5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO1xyXG4gICAgICAgICAgICBkcm9wZG93bk1lbnUgPSB0aGlyZERpdi5xdWVyeVNlbGVjdG9yKCd1bC5kcm9wZG93bi1tZW51Jyk7XHJcbiAgICAgICAgICAgIHRoaXJkU2VsZWN0ID0gdGhpcmREaXYucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cImRyb3Bkb3duXCJdID4gaW5wdXQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBpZiAoIWZvcm1FbGVtZW50IHx8ICFmb3JtR3JvdXAgfHwgIXNlY0RpdiB8fCAhdGhpcmREaXYgfHwgIXNlbGVjdEVsZW1lbnQgfHwgIWRyb3Bkb3duTWVudSB8fCAhdGhpcmRTZWxlY3QpIHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDApKTsgLy8gRGVsYXkgYmVmb3JlIHJldHJ5aW5nXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bcm9sZT1cImZvcm1cIl06bGFzdC1vZi10eXBlJylcclxuXHJcbiAgICAvLyBjb25zdCBmb3JtR3JvdXAgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmZvcm0tZ3JvdXBcIilcclxuICAgIC8vIGNvbnN0IGZvcm1Hcm91cERpdnMgPSBmb3JtR3JvdXAucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKVxyXG4gICAgLy8gY29uc3Qgc2VjRGl2ID0gZm9ybUdyb3VwRGl2c1sxXVxyXG4gICAgLy8gY29uc3QgdGhpcmREaXYgPSBmb3JtR3JvdXBEaXZzWzJdXHJcbiAgICAvLyBjb25zdCBzZWxlY3RFbGVtZW50ID0gc2VjRGl2LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIilcclxuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0RWxlbWVudD4+Pj4+Pj4+Pj4+PlwiLCBzZWxlY3RFbGVtZW50KVxyXG4gICAgLy8gRmluZCB0aGUgZHJvcGRvd24gbWVudVxyXG4gICAgLy8gY29uc3QgZHJvcGRvd25NZW51ID0gdGhpcmREaXYucXVlcnlTZWxlY3RvcigndWwuZHJvcGRvd24tbWVudScpO1xyXG4gICAgY29uc29sZS5sb2coXCJEcm9wZG93biBtZW51IGZvdW5kOlwiLCBkcm9wZG93bk1lbnUpO1xyXG4gICAgLy8gY29uc3QgdGhpcmRTZWxlY3QgPSB0aGlyZERpdi5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwiZHJvcGRvd25cIl0gPiBpbnB1dCcpXHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXJkU2VsZWN0Pj4+Pj4+XCIsIHRoaXJkU2VsZWN0KVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImlucHV0VmFsdWVcIiwgXCJtdWx0aVNlbGVjdFZhbHVlc1wiXSwgKGRhdGEpID0+XHJcbiAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICBpbnB1dFZhbHVlOiBkYXRhLmlucHV0VmFsdWUgfHwgXCJcIixcclxuICAgICAgICAgIG11bHRpU2VsZWN0VmFsdWVzOiBBcnJheS5pc0FycmF5KGRhdGEubXVsdGlTZWxlY3RWYWx1ZXMpXHJcbiAgICAgICAgICAgID8gZGF0YS5tdWx0aVNlbGVjdFZhbHVlc1xyXG4gICAgICAgICAgICA6IFtdIC8vIERlZmF1bHQgdG8gZW1wdHkgYXJyYXkgaWYgbXVsdGlTZWxlY3RWYWx1ZXMgaXMgbm90IGFuIGFycmF5XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0Pj4+Pj4+Pj4+XCIsIHJlc3VsdClcclxuICAgIGlmIChyZXN1bHQuaW5wdXRWYWx1ZSAmJiByZXN1bHQubXVsdGlTZWxlY3RWYWx1ZXMpIHtcclxuICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSlcclxuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpbmcgb3B0aW9uc1wiKVxyXG4gICAgICAvLyBNYXBwaW5nIGZyb20gZGlzcGxheSB0ZXh0IHRvIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcyBpbiB0aGUgc2VsZWN0IG9wdGlvbnNcclxuICAgICAgY29uc3QgdmFsdWVNYXBwaW5nID0ge1xyXG4gICAgICAgIEt1bnNrYXBzcHJvdjogXCIyXCIsXHJcbiAgICAgICAgS8O2cnByb3Y6IFwiOVwiXHJcbiAgICAgICAgLy8gQWRkIGFueSBvdGhlciBvcHRpb25zIGhlcmUgaWYgbmVlZGVkXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gcmVzdWx0Lm11bHRpU2VsZWN0VmFsdWVzLm1hcChcclxuICAgICAgICAodGV4dCkgPT4gdmFsdWVNYXBwaW5nW3RleHRdIHx8IHRleHQgLy8gRGVmYXVsdCB0byB0ZXh0IGlmIG5vdCBpbiBtYXBwaW5nXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVmFsdWVzIHRvIHNlbGVjdDpcIiwgc2VsZWN0ZWRWYWx1ZXMpXHJcbiAgICAgIEFycmF5LmZyb20oc2VsZWN0RWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpXHJcbiAgICAgIH0pXHJcbiAgICAgIHNlbGVjdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSlcclxuXHJcbiAgICAgIHRoaXJkU2VsZWN0LnZhbHVlID0gXCJcIlxyXG5cclxuICAgICAgLy8gVHlwZSB0aGUgdmFsdWUgY2hhcmFjdGVyIGJ5IGNoYXJhY3RlciB3aXRoIGEgc2xpZ2h0IGRlbGF5XHJcbiAgICAgIGZvciAoY29uc3QgY2hhciBvZiByZXN1bHQuaW5wdXRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXJkU2VsZWN0LnZhbHVlICs9IGNoYXJcclxuICAgICAgICB0aGlyZFNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHsgYnViYmxlczogdHJ1ZSB9KSlcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDApKSAvLyBBZGp1c3QgdHlwaW5nIHNwZWVkIGFzIG5lZWRlZFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGb2N1cyBvbiB0aGUgZWxlbWVudFxyXG4gICAgICB0aGlyZFNlbGVjdC5mb2N1cygpXHJcblxyXG4gICAgICAvLyAvLyBBZGQgYSBkZWxheSwgdGhlbiB0cmlnZ2VyIFwiRW50ZXJcIiBrZXkgZXZlbnQgcHJvZ3JhbW1hdGljYWxseVxyXG4gICAgICAvLyBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcclxuICAgICAgLy8gY29uc3Qga2V5dXBFdmVudCA9IG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIiwge1xyXG4gICAgICAvLyAgIGtleTogXCJFbnRlclwiLFxyXG4gICAgICAvLyAgIGNvZGU6IFwiRW50ZXJcIixcclxuICAgICAgLy8gICBrZXlDb2RlOiAxMyxcclxuICAgICAgLy8gICB3aGljaDogMTMsXHJcbiAgICAgIC8vICAgYnViYmxlczogdHJ1ZVxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyB0aGlyZFNlbGVjdC5kaXNwYXRjaEV2ZW50KGtleXVwRXZlbnQpXHJcblxyXG4gICAgICBjb25zdCBvcHRpb25Ub1NlbGVjdCA9IEFycmF5LmZyb20oZHJvcGRvd25NZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKSkuZmluZCgobGkpID0+IHtcclxuICAgICAgICByZXR1cm4gbGkudGV4dENvbnRlbnQudHJpbSgpID09PSByZXN1bHQuaW5wdXRWYWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib3B0aW9uVG9TZWxlY3Q+Pj4+Pj5cIiwgb3B0aW9uVG9TZWxlY3QpXHJcbiAgICAgIGlmIChvcHRpb25Ub1NlbGVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3Rpbmcgb3B0aW9uOiAke3Jlc3VsdC5pbnB1dFZhbHVlfWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpbXVsYXRlIGEgY2xpY2sgb24gdGhlIGZvdW5kIG9wdGlvblxyXG4gICAgICAgIG9wdGlvblRvU2VsZWN0LmNsaWNrKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE9wdGlvbiBcIiR7cmVzdWx0LmlucHV0VmFsdWV9XCIgbm90IGZvdW5kIGluIGRyb3Bkb3duYCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgXCJSZXN0b3JlZCBpbnB1dCB2YWx1ZSBmcm9tIGxvY2FsIHN0b3JhZ2U6XCIsXHJcbiAgICAgICAgcmVzdWx0LnRoaXJkSW5wdXRWYWx1ZVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcImRpdi5jb250YWluZXItZmx1aWQgPiBzZWN0aW9uOmxhc3Qtb2YtdHlwZVwiXHJcbiAgICApXHJcblxyXG4gICAgaWYgKCFzZWN0aW9uRWxlbWVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlY3Rpb24gbm90IGZvdW5kLlwiKVxyXG4gICAgICBhdHRlbXB0cysrXHJcbiAgICAgIGlmIChhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWF4IGF0dGVtcHRzIHJlYWNoZWQuIFJlbG9hZGluZyBwYWdlLi4uXCIpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VGltZW91dChjaGVja0F2YWlsYWJpbGl0eSwgMTAwMClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlNlY3Rpb24gZm91bmQ6XCIsIHNlY3Rpb25FbGVtZW50KVxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zTGlzdCkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gXCJjaGlsZExpc3RcIikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJET00gY2hhbmdlcyBkZXRlY3RlZCwgcmVjaGVja2luZyBhdmFpbGFiaWxpdHkuLi5cIilcclxuXHJcbiAgICAgICAgICBjb25zdCBzZWNvbmREaXYgPSBzZWN0aW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Om50aC1vZi10eXBlKDIpXCIpXHJcbiAgICAgICAgICBpZiAoc2Vjb25kRGl2KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3REaXYgPSBzZWNvbmREaXYuY2hpbGRyZW5bc2Vjb25kRGl2LmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGNvbnN0IHBhbmVscyA9IGxhc3REaXYucXVlcnlTZWxlY3RvckFsbChcImRpdi5wYW5lbFwiKVxyXG5cclxuICAgICAgICAgICAgaWYgKHBhbmVscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdmFpbGFiaWxpdHkgZm91bmQhIFNlbmRpbmcgbWVzc2FnZS5cIilcclxuICAgICAgICAgICAgICBzZW5kQXZhaWxhYmlsaXR5TWVzc2FnZSgpXHJcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uRWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcclxuICAgIC8vIENoZWNrIGZvciBhdmFpbGFiaWxpdHkgd2l0aGluIHNlY3Rpb25FbGVtZW50XHJcbiAgICBjb25zdCBzZWNvbmREaXYgPSBzZWN0aW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Om50aC1vZi10eXBlKDIpXCIpXHJcblxyXG4gICAgaWYgKHNlY29uZERpdikge1xyXG4gICAgICBjb25zdCBsYXN0RGl2ID0gc2Vjb25kRGl2LmNoaWxkcmVuW3NlY29uZERpdi5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG4gICAgICBjb25zdCBwYW5lbHMgPSBsYXN0RGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYucGFuZWxcIilcclxuXHJcbiAgICAgIGlmIChwYW5lbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXZhaWxhYmlsaXR5IGZvdW5kISBTZW5kaW5nIG1lc3NhZ2UuXCIpXHJcbiAgICAgICAgc2VuZEF2YWlsYWJpbGl0eU1lc3NhZ2UoKVxyXG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXZhaWxhYmlsaXR5IGZvdW5kLiBBdHRlbXB0OlwiLCBhdHRlbXB0cyArIDEpXHJcbiAgICAgICAgYXR0ZW1wdHMgKz0gMVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlcXVpcmVkIGRpdnMgbm90IGZvdW5kLlwiKVxyXG4gICAgICBhdHRlbXB0cyArPSAxXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgbWF4aW11bSBhdHRlbXB0cyBoYXZlIGJlZW4gcmVhY2hlZFxyXG4gICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTWF4IGF0dGVtcHRzIHJlYWNoZWQuIFJlbG9hZGluZyBwYWdlLi4uXCIpXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSAvLyBSZWxvYWQgdGhlIHBhZ2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNjaGVkdWxlIHRoZSBuZXh0IGNoZWNrIGFmdGVyIDEgc2Vjb25kXHJcbiAgICAgIHNldFRpbWVvdXQoY2hlY2tBdmFpbGFiaWxpdHksIDMwMDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTdGFydCB0aGUgYXZhaWxhYmlsaXR5IGNoZWNraW5nIGxvb3BcclxuIFxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbmRBdmFpbGFiaWxpdHlNZXNzYWdlKCkge1xyXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxyXG4gICAgeyBtZXNzYWdlOiBcImF2YWlsYWJpbGl0eVwiLCBzdGF0dXM6IFwiYXZhaWxhYmxlXCIgfSxcclxuICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2Ugc2VudCBmcm9tIGNvbnRlbnQgc2NyaXB0IHRvIGJhY2tncm91bmQ6XCIsIHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gIClcclxufVxyXG5cclxuLy8gTG9vcCBvdmVyIGVhY2ggcGFuZWxcclxuLy8gcGFuZWxzLmZvckVhY2goKHBhbmVsKSA9PiB7XHJcbi8vICAgLy8gU2VsZWN0IHRoZSBkaXYgd2l0aCB0aGUgY2xhc3MgJ3BhbmVsLWJvZHknIGluc2lkZSBlYWNoIHBhbmVsXHJcbi8vICAgY29uc3QgcGFuZWxCb2R5ID0gcGFuZWwucXVlcnlTZWxlY3RvcihcImRpdi5wYW5lbC1ib2R5ID4gZGl2LnJvdyA+IGRpdltkYXRhLWJpbmQ9J2ZvcmVhY2g6b2NjYXNpb25zJ10gPiBkaXYucm93XCIpXHJcblxyXG4vLyAgIGlmIChwYW5lbEJvZHkpIHtcclxuLy8gICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHBhbmVsQm9keSwgZm9yIGV4YW1wbGUsIGxvZyBvciBtYW5pcHVsYXRlIGl0XHJcbi8vICAgICBjb25zb2xlLmxvZyhcInBhbmVsQm9keT4+Pj4+Pj5cIiwgcGFuZWxCb2R5KVxyXG4vLyAgICAgY29uc3QgcGFuZWxSb3cgPSBwYW5lbEJvZHkucXVlcnlTZWxlY3RvcihcImRpdjpudGgtb2YtdHlwZSgxKVwiKVxyXG5cclxuLy8gICAgIGlmIChwYW5lbFJvdykge1xyXG4vLyAgICAgICAvLyBGaW5kIHRoZSBzdHJvbmcgZWxlbWVudCBpbnNpZGUgcGFuZWxSb3dcclxuLy8gICAgICAgY29uc3Qgc3Ryb25nRWxlbWVudCA9IHBhbmVsUm93LnF1ZXJ5U2VsZWN0b3IoXCJzdHJvbmdcIik7XHJcblxyXG4vLyAgICAgICBpZiAoc3Ryb25nRWxlbWVudCkge1xyXG4vLyAgICAgICAgIC8vIEdldCB0aGUgdHdvIGZvbnQgZWxlbWVudHMgaW5zaWRlIHRoZSBzdHJvbmcgZWxlbWVudFxyXG4vLyAgICAgICAgIGNvbnN0IGZvbnRzID0gc3Ryb25nRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb250Jyk7XHJcblxyXG4vLyAgICAgICAgIGlmIChmb250cy5sZW5ndGggPj0gMikge1xyXG4vLyAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgZGF0ZSBmcm9tIHRoZSBmaXJzdCBmb250IGVsZW1lbnRcclxuLy8gICAgICAgICAgIGNvbnN0IGRhdGUgPSBmb250c1swXS50ZXh0Q29udGVudC50cmltKCk7XHJcbi8vICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSB0aW1lIGZyb20gdGhlIHNlY29uZCBmb250IGVsZW1lbnRcclxuLy8gICAgICAgICAgIGNvbnN0IHRpbWUgPSBmb250c1sxXS50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG4vLyAgICAgICAgICAgLy8gTG9nIG9yIHVzZSB0aGUgZXh0cmFjdGVkIGRhdGUgYW5kIHRpbWVcclxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGBEYXRlOiAke2RhdGV9LCBUaW1lOiAke3RpbWV9YCk7XHJcblxyXG4vLyAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIGV4dHJhY3RlZCB2YWx1ZXMgaWYgbmVlZGVkXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gRXhhbXBsZTogTW9kaWZ5IG9yIHdvcmsgd2l0aCB0aGUgcGFuZWwgYm9keSBjb250ZW50XHJcbi8vICAgICBwYW5lbEJvZHkudGV4dENvbnRlbnQgPSBcIk5ldyBDb250ZW50IGZvciBQYW5lbCBCb2R5XCJcclxuLy8gICB9XHJcbi8vIH0pXHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBpbnB1dHZhbHVlc3RvcmUoc2VjdGlvbkVsZW1lbnQpIHtcclxuXHJcbi8vIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coXCJoZXJlIG5vdyBnb2luZyB0byBzdGFydCBmaW5kaW5nXCIpXHJcbi8vICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcInN0YXJ0QXV0b21hdGlvblwiXSwgKHJlc3VsdHMpID0+IHtcclxuLy8gICAgIGlmIChyZXN1bHRzLnN0YXJ0QXV0b21hdGlvbiA9PSB0cnVlKSB7XHJcbi8vICAgICAgIGZpbmR0aW1lc2xvdHMocmVzb2x2ZSlcclxuLy8gICAgIH1cclxuLy8gICB9KVxyXG4vLyB9KVxyXG5cclxuLy8gU2VsZWN0IHRoZSBsYXN0IGZvcm0gZWxlbWVudCB3aXRoIHJvbGU9XCJmb3JtXCJcclxuLy8gY29uc3QgZm9ybUVsZW1lbnQgPSBzZWN0aW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4vLyAgICdmb3JtW3JvbGU9XCJmb3JtXCJdOmxhc3Qtb2YtdHlwZSdcclxuLy8gKVxyXG5cclxuLy8gaWYgKGZvcm1FbGVtZW50KSB7XHJcbi8vICAgY29uc29sZS5sb2coXCJGb3JtIGZvdW5kOlwiLCBmb3JtRWxlbWVudClcclxuXHJcbi8vICAgLy8gU2VsZWN0IHRoZSBmaXJzdCBkaXYgZWxlbWVudCB3aXRoIGNsYXNzIFwiZm9ybS1ncm91cFwiXHJcbi8vICAgY29uc3QgZm9ybUdyb3VwID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtLWdyb3VwXCIpXHJcbi8vICAgY29uc3QgZm9ybUdyb3VwRGl2cyA9IGZvcm1Hcm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpXHJcblxyXG4vLyAgIC8vIEVuc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMyBkaXYgZWxlbWVudHNcclxuLy8gICBpZiAoZm9ybUdyb3VwRGl2cy5sZW5ndGggPj0gMykge1xyXG4vLyBjb25zdCBzZWNEaXYgPSBmb3JtR3JvdXBEaXZzWzFdXHJcbi8vIGNvbnN0IHRoaXJkRGl2ID0gZm9ybUdyb3VwRGl2c1syXVxyXG5cclxuLy8gY29uc29sZS5sb2coXCJzZWNEaXY+Pj4+PlwiLCBzZWNEaXYpXHJcbi8vIGNvbnNvbGUubG9nKFwiVGhpcmQgZGl2Pj4+Pj4+Pj5cIiwgdGhpcmREaXYpXHJcblxyXG4vLyBjb25zdCBzZWxlY3RFbGVtZW50ID0gc2VjRGl2LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIilcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwic2VsZWN0RWxlbWVudD4+Pj4+PlwiLCBzZWxlY3RFbGVtZW50KVxyXG4vLyBhcHBseVNhdmVkU2VsZWN0aW9uKClcclxuLy8gLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNhdmUgc2VsZWN0ZWQgdmFsdWUgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIGl0XHJcbi8vIHNlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuLy8gICBzYXZlU2VsZWN0ZWRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpXHJcbi8vIH0pXHJcblxyXG4vLyBjb25zdCB0aGlyZFNlbGVjdCA9IHRoaXJkRGl2LnF1ZXJ5U2VsZWN0b3IoXHJcbi8vICAgJ2RpdltjbGFzcyo9XCJkcm9wZG93blwiXSA+IGlucHV0J1xyXG4vLyApXHJcbi8vIGNvbnNvbGUubG9nKFwidGhpcmRTZWxlY3Q+Pj4+Pj5cIiwgdGhpcmRTZWxlY3QpXHJcblxyXG4vLyBGaXJzdCwgcmV0cmlldmUgdGhlIHN0b3JlZCB2YWx1ZSBhbmQgc2V0IGl0IHRvIHRoZSBpbnB1dCBmaWVsZFxyXG4vLyBjb25zdCByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4vLyAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJ0aGlyZElucHV0VmFsdWVcIl0sIChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxyXG4vLyB9KVxyXG5cclxuLy8gaWYgKHJlc3VsdC50aGlyZElucHV0VmFsdWUpIHtcclxuLy8gICAvLyBGb2N1cyBvbiB0aGUgZWxlbWVudFxyXG5cclxuLy8gICAvLyBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDAwKSlcclxuXHJcbi8vICAgLy8gQ2xlYXIgdGhlIGlucHV0IGZpZWxkIGZpcnN0XHJcbi8vICAgdGhpcmRTZWxlY3QudmFsdWUgPSBcIlwiXHJcblxyXG4vLyAgIC8vIFR5cGUgdGhlIHZhbHVlIGNoYXJhY3RlciBieSBjaGFyYWN0ZXIgd2l0aCBhIHNsaWdodCBkZWxheVxyXG4vLyAgIGZvciAoY29uc3QgY2hhciBvZiByZXN1bHQudGhpcmRJbnB1dFZhbHVlKSB7XHJcbi8vICAgICB0aGlyZFNlbGVjdC52YWx1ZSArPSBjaGFyXHJcbi8vICAgICB0aGlyZFNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHsgYnViYmxlczogdHJ1ZSB9KSlcclxuLy8gICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpIC8vIEFkanVzdCB0eXBpbmcgc3BlZWQgYXMgbmVlZGVkXHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBGb2N1cyBvbiB0aGUgZWxlbWVudFxyXG4vLyAgIHRoaXJkU2VsZWN0LmZvY3VzKClcclxuXHJcbi8vICAgLy8gQWRkIGEgZGVsYXksIHRoZW4gdHJpZ2dlciBcIkVudGVyXCIga2V5IGV2ZW50IHByb2dyYW1tYXRpY2FsbHlcclxuLy8gICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcclxuLy8gICBjb25zdCBrZXl1cEV2ZW50ID0gbmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLCB7XHJcbi8vICAgICBrZXk6IFwiRW50ZXJcIixcclxuLy8gICAgIGNvZGU6IFwiRW50ZXJcIixcclxuLy8gICAgIGtleUNvZGU6IDEzLFxyXG4vLyAgICAgd2hpY2g6IDEzLFxyXG4vLyAgICAgYnViYmxlczogdHJ1ZVxyXG4vLyAgIH0pXHJcbi8vICAgdGhpcmRTZWxlY3QuZGlzcGF0Y2hFdmVudChrZXl1cEV2ZW50KVxyXG5cclxuLy8gICBjb25zb2xlLmxvZyhcclxuLy8gICAgIFwiUmVzdG9yZWQgaW5wdXQgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlOlwiLFxyXG4vLyAgICAgcmVzdWx0LnRoaXJkSW5wdXRWYWx1ZVxyXG4vLyAgIClcclxuXHJcbi8vIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDAwKSlcclxuXHJcbi8vIH1cclxuXHJcbi8vIGlmICh0aGlyZFNlbGVjdCkge1xyXG4vLyAgIHRoaXJkU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXJkU2VsZWN0LnZhbHVlXHJcbi8vICAgICBjb25zb2xlLmxvZyhcIlRoaXJkIGlucHV0IHZhbHVlIHN0b3JlZDpcIiwgaW5wdXRWYWx1ZSlcclxuXHJcbi8vICAgICAvLyBTdG9yZSB0aGUgdmFsdWUgbG9jYWxseSB1c2luZyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxyXG4vLyAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgdGhpcmRJbnB1dFZhbHVlOiBpbnB1dFZhbHVlIH0sICgpID0+IHtcclxuLy8gICAgICAgY29uc29sZS5sb2coXCJWYWx1ZSBzdG9yZWQgaW4gY2hyb21lLnN0b3JhZ2UubG9jYWw6XCIsIGlucHV0VmFsdWUpXHJcbi8vICAgICB9KVxyXG4vLyAgIH0pXHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgY29uc29sZS5sb2coXCJPbmUgb3IgbW9yZSBzZWxlY3QgZWxlbWVudHMgbm90IGZvdW5kLlwiKVxyXG4vLyB9XHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgY29uc29sZS5sb2coJ05vdCBlbm91Z2ggZGl2IGVsZW1lbnRzIHdpdGggY2xhc3MgXCJmb3JtLWdyb3VwXCIuJylcclxuLy8gfVxyXG4vLyB9IGVsc2Uge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdGb3JtIHdpdGggcm9sZT1cImZvcm1cIiBub3QgZm91bmQuJylcclxuLy8gfVxyXG4vLyB9XHJcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJmaW5kYXZhaWxhYmlsaXR5LjM4OTMyMmM5LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);