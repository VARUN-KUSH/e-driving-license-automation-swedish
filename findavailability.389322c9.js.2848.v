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
})({"5nljq":[function(require,module,exports) {
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
    "port": 57744,
    "entryFilePath": "C:\\Users\\shirisi\\Desktop\\newstripeintegration\\extension\\booking-availability\\contents\\findavailability.js",
    "bundleId": "f2a17f90389322c9",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 57743
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
    if (window.location.href.includes("https://fp.trafikverket.se/boka/#/search/")) {
        const findsection = setInterval(()=>{
            const sectionElement = document.querySelector('div.container-fluid > section[class*="section-secondary"]');
            if (sectionElement) {
                clearInterval(findsection);
                console.log("Section found:", sectionElement);
                // Add your code to handle the section here
                findtimeslots();
            } else console.log("Section not found.");
        }, 300);
    }
};
// Function to save selected value to local storage
function saveSelectedValue(value) {
    chrome.storage.local.set({
        [LOCAL_STORAGE_KEY]: value
    });
}
// Function to retrieve and apply saved value on page load
function applySavedSelection() {
    const LOCAL_STORAGE_KEY1 = "selectedOption";
    chrome.storage.local.get(LOCAL_STORAGE_KEY1, (result)=>{
        const savedValue = result[LOCAL_STORAGE_KEY1];
        if (savedValue) {
            selectElement.value = savedValue;
            selectElement.dispatchEvent(new Event("change")) // Triggers a re-render
            ;
        }
    });
}
// In content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    if (request.action === "startAutomation") {
        // Set stopAutomation to false in local storage
        chrome.storage.local.set({
            startAutomation: true
        }, ()=>{
            console.log("stopAutomation set to false");
            windows.location.reload();
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
function findtimeslots() {
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
        if (startAutomation === "false") {
            console.log("Automation is turned off. Stopping execution.");
            return;
        }
        const formElement = document.querySelector('form[role="form"]:last-of-type');
        const formGroup = formElement.querySelector("div.form-group");
        const formGroupDivs = formGroup.querySelectorAll("div");
        const secDiv = formGroupDivs[1];
        const thirdDiv = formGroupDivs[2];
        const selectElement1 = secDiv.querySelector("select");
        console.log("selectElement>>>>>>>>>>>>", selectElement1);
        // Find the dropdown menu
        const dropdownMenu = thirdDiv.querySelector("ul.dropdown-menu");
        console.log("Dropdown menu found:", dropdownMenu);
        const thirdSelect = thirdDiv.querySelector('div[class*="dropdown"] > input');
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
            Array.from(selectElement1.options).forEach((option)=>{
                option.selected = selectedValues.includes(option.value);
            });
            selectElement1.dispatchEvent(new Event("change", {
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
        setTimeout(checkAvailability, 1000);
    };
    // Start the availability checking loop
    checkAvailability();
}
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

},{}]},["5nljq","bpLuV"], "bpLuV", "parcelRequire847b")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUEsUUFBUSxZQUFZLFNBQVUsTUFBTSxFQUFFLElBQUk7SUFDeEMsT0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7UUFDdkMsSUFBSSxRQUFRLGFBQWEsUUFBUSxnQkFBZ0IsS0FBSyxlQUFlLE1BQ25FO1FBR0YsT0FBTyxlQUFlLE1BQU0sS0FBSztZQUMvQixZQUFZO1lBQ1osS0FBSztnQkFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFJO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVBLFFBQVEsU0FBUyxTQUFVLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRztJQUM1QyxPQUFPLGVBQWUsTUFBTSxVQUFVO1FBQ3BDLFlBQVk7UUFDWixLQUFLO0lBQ1A7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjEvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtOGY1ZDJjMzYzOTk1OGQ5My5qcyIsImNvbnRlbnRzL2ZpbmRhdmFpbGFiaWxpdHkuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGQ9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgeT0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBIPW5ldyBTZXQoZCksXz1lPT5ILmhhcyhlKSxHPWQuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgWj1fKFwiLS1kcnktcnVuXCIpLHA9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIscT1wKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHg9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUz0wLGM9KC4uLmUpPT5wKCkmJnUoYFxcdXsxRjdFMX0gJHtTKyt9YCwuLi5lKTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6NTc3NDQsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxzaGlyaXNpXFxcXERlc2t0b3BcXFxcbmV3c3RyaXBlaW50ZWdyYXRpb25cXFxcZXh0ZW5zaW9uXFxcXGJvb2tpbmctYXZhaWxhYmlsaXR5XFxcXGNvbnRlbnRzXFxcXGZpbmRhdmFpbGFiaWxpdHkuanNcIixcImJ1bmRsZUlkXCI6XCJmMmExN2Y5MDM4OTMyMmM5XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NTc3NDN9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSShlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUk7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gYigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIEMoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBFPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7ZnVuY3Rpb24gTChlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIE8oZT1DKCkpe2xldCB0PWIoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBCKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJngoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBQKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChPKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IGEgb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgdz1hLmNvZGVmcmFtZXx8YS5zdGFjazttKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2EubWVzc2FnZStgXG5gK3crYFxuXG5gK2EuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixCKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e20oYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBzPVwiX19wbGFzbW8tbG9hZGluZ19fXCI7ZnVuY3Rpb24gJCgpe2xldCBlPWdsb2JhbFRoaXMud2luZG93Py50cnVzdGVkVHlwZXM7aWYodHlwZW9mIGU+XCJ1XCIpcmV0dXJuO2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInRydXN0ZWQtdHlwZXNcIl0nKT8uY29udGVudD8uc3BsaXQoXCIgXCIpLG89dD90W3Q/Lmxlbmd0aC0xXTp2b2lkIDA7cmV0dXJuIHR5cGVvZiBlPFwidVwiP2UuY3JlYXRlUG9saWN5KG98fGB0cnVzdGVkLWh0bWwtJHtzfWAse2NyZWF0ZUhUTUw6YT0+YX0pOnZvaWQgMH12YXIgVD0kKCk7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiBGKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPXM7bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7c30ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7c306aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtzfSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9RigpO2U9Tih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgVz1gJHtFfSR7bW9kdWxlLmlkfV9fYCxpLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7aT8uZGlzY29ubmVjdCgpLGk9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOld9KSxpLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGkub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIGooKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fWooKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/aS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJleHBvcnQge31cclxuY29uc29sZS5sb2coXCJ1cCBhbmQgcnVubmluZyB0aGUgY29udGVudCB0byBzaG93IHRpbWUgc2xvdHNcIilcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKFxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJodHRwczovL2ZwLnRyYWZpa3ZlcmtldC5zZS9ib2thLyMvc2VhcmNoL1wiKVxyXG4gICkge1xyXG4gICAgY29uc3QgZmluZHNlY3Rpb24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnZGl2LmNvbnRhaW5lci1mbHVpZCA+IHNlY3Rpb25bY2xhc3MqPVwic2VjdGlvbi1zZWNvbmRhcnlcIl0nXHJcbiAgICAgIClcclxuICAgICAgaWYgKHNlY3Rpb25FbGVtZW50KSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChmaW5kc2VjdGlvbilcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlY3Rpb24gZm91bmQ6XCIsIHNlY3Rpb25FbGVtZW50KVxyXG4gICAgICAgIC8vIEFkZCB5b3VyIGNvZGUgdG8gaGFuZGxlIHRoZSBzZWN0aW9uIGhlcmVcclxuICAgICAgICBmaW5kdGltZXNsb3RzKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlY3Rpb24gbm90IGZvdW5kLlwiKVxyXG4gICAgICB9XHJcbiAgICB9LCAzMDApXHJcbiAgfVxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzYXZlIHNlbGVjdGVkIHZhbHVlIHRvIGxvY2FsIHN0b3JhZ2VcclxuZnVuY3Rpb24gc2F2ZVNlbGVjdGVkVmFsdWUodmFsdWUpIHtcclxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbTE9DQUxfU1RPUkFHRV9LRVldOiB2YWx1ZSB9KVxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byByZXRyaWV2ZSBhbmQgYXBwbHkgc2F2ZWQgdmFsdWUgb24gcGFnZSBsb2FkXHJcbmZ1bmN0aW9uIGFwcGx5U2F2ZWRTZWxlY3Rpb24oKSB7XHJcbiAgY29uc3QgTE9DQUxfU1RPUkFHRV9LRVkgPSBcInNlbGVjdGVkT3B0aW9uXCJcclxuXHJcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KExPQ0FMX1NUT1JBR0VfS0VZLCAocmVzdWx0KSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZFZhbHVlID0gcmVzdWx0W0xPQ0FMX1NUT1JBR0VfS0VZXVxyXG4gICAgaWYgKHNhdmVkVmFsdWUpIHtcclxuICAgICAgc2VsZWN0RWxlbWVudC52YWx1ZSA9IHNhdmVkVmFsdWVcclxuICAgICAgc2VsZWN0RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSkgLy8gVHJpZ2dlcnMgYSByZS1yZW5kZXJcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuLy8gSW4gY29udGVudCBzY3JpcHRcclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJzdGFydEF1dG9tYXRpb25cIikge1xyXG4gICAgLy8gU2V0IHN0b3BBdXRvbWF0aW9uIHRvIGZhbHNlIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHN0YXJ0QXV0b21hdGlvbjogdHJ1ZSB9LCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RvcEF1dG9tYXRpb24gc2V0IHRvIGZhbHNlXCIpXHJcbiAgICAgIHdpbmRvd3MubG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gc3RhcnQgYXV0b21hdGlvbiBhZnRlciBzZXR0aW5nIHN0b3BBdXRvbWF0aW9uIHRvIGZhbHNlXHJcbiAgICAgIC8vIGZpbmR0aW1lc2xvdHMoKVxyXG5cclxuICAgICAgLy8gU2VuZCBhIHJlc3BvbnNlIGluZGljYXRpbmcgdGhlIGFjdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFJldHVybiB0cnVlIHRvIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luY2hyb25vdXMgcmVzcG9uc2VcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJzdG9wQXV0b21hdGlvblwiKSB7XHJcbiAgICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBzdGFydCBhdXRvbWF0aW9uIHdoZW4gdGhlIG1lc3NhZ2UgaXMgcmVjZWl2ZWRcclxuXHJcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzdGFydEF1dG9tYXRpb246IGZhbHNlIH0sICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJzdG9wQXV0b21hdGlvbiBzdGF0dXMgc2F2ZWQgYXMgdHJ1ZVwiKVxyXG4gICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pXHJcbiAgICB9KVxyXG4gICAgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB3ZSB3aWxsIHNlbmQgYSByZXNwb25zZSBhc3luY2hyb25vdXNseVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBmaW5kdGltZXNsb3RzKCkge1xyXG4gIGxldCBhdHRlbXB0cyA9IDAgLy8gVHJhY2sgdGhlIG51bWJlciBvZiBhdHRlbXB0c1xyXG4gIGNvbnN0IG1heEF0dGVtcHRzID0gMTAgLy8gTWF4aW11bSBhdHRlbXB0cyBiZWZvcmUgcmVsb2FkaW5nXHJcblxyXG4gIGNvbnN0IGNoZWNrQXZhaWxhYmlsaXR5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gRmlyc3QsIHJldHJpZXZlIHRoZSBzdG9yZWQgdmFsdWUgYW5kIHNldCBpdCB0byB0aGUgaW5wdXQgZmllbGRcclxuICAgIGNvbnN0IHN0YXJ0QXV0b21hdGlvbiA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJzdGFydEF1dG9tYXRpb25cIl0sIChkYXRhKSA9PlxyXG4gICAgICAgIHJlc29sdmUoZGF0YS5zdGFydEF1dG9tYXRpb24pXHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0QXV0b21hdGlvbj4+Pj4+Pj4+Pj4+Pj4+XCIsIHN0YXJ0QXV0b21hdGlvbilcclxuICAgIC8vIElmIHN0YXJ0QXV0b21hdGlvbiBpcyBmYWxzZSwgZXhpdCB0aGUgZnVuY3Rpb25cclxuICAgIGlmIChzdGFydEF1dG9tYXRpb24gPT09IFwiZmFsc2VcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkF1dG9tYXRpb24gaXMgdHVybmVkIG9mZi4gU3RvcHBpbmcgZXhlY3V0aW9uLlwiKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtyb2xlPVwiZm9ybVwiXTpsYXN0LW9mLXR5cGUnKVxyXG5cclxuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZm9ybS1ncm91cFwiKVxyXG4gICAgY29uc3QgZm9ybUdyb3VwRGl2cyA9IGZvcm1Hcm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpXHJcbiAgICBjb25zdCBzZWNEaXYgPSBmb3JtR3JvdXBEaXZzWzFdXHJcbiAgICBjb25zdCB0aGlyZERpdiA9IGZvcm1Hcm91cERpdnNbMl1cclxuICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBzZWNEaXYucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKVxyXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RFbGVtZW50Pj4+Pj4+Pj4+Pj4+XCIsIHNlbGVjdEVsZW1lbnQpXHJcbiAgICAvLyBGaW5kIHRoZSBkcm9wZG93biBtZW51XHJcbiAgICBjb25zdCBkcm9wZG93bk1lbnUgPSB0aGlyZERpdi5xdWVyeVNlbGVjdG9yKCd1bC5kcm9wZG93bi1tZW51Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRyb3Bkb3duIG1lbnUgZm91bmQ6XCIsIGRyb3Bkb3duTWVudSk7XHJcbiAgICBjb25zdCB0aGlyZFNlbGVjdCA9IHRoaXJkRGl2LnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJkcm9wZG93blwiXSA+IGlucHV0JylcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcmRTZWxlY3Q+Pj4+Pj5cIiwgdGhpcmRTZWxlY3QpXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wiaW5wdXRWYWx1ZVwiLCBcIm11bHRpU2VsZWN0VmFsdWVzXCJdLCAoZGF0YSkgPT5cclxuICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgIGlucHV0VmFsdWU6IGRhdGEuaW5wdXRWYWx1ZSB8fCBcIlwiLFxyXG4gICAgICAgICAgbXVsdGlTZWxlY3RWYWx1ZXM6IEFycmF5LmlzQXJyYXkoZGF0YS5tdWx0aVNlbGVjdFZhbHVlcylcclxuICAgICAgICAgICAgPyBkYXRhLm11bHRpU2VsZWN0VmFsdWVzXHJcbiAgICAgICAgICAgIDogW10gLy8gRGVmYXVsdCB0byBlbXB0eSBhcnJheSBpZiBtdWx0aVNlbGVjdFZhbHVlcyBpcyBub3QgYW4gYXJyYXlcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHQ+Pj4+Pj4+Pj5cIiwgcmVzdWx0KVxyXG4gICAgaWYgKHJlc3VsdC5pbnB1dFZhbHVlICYmIHJlc3VsdC5tdWx0aVNlbGVjdFZhbHVlcykge1xyXG4gICAgICAvLyBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDApKVxyXG4gICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGluZyBvcHRpb25zXCIpXHJcbiAgICAgIC8vIE1hcHBpbmcgZnJvbSBkaXNwbGF5IHRleHQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzIGluIHRoZSBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgICBjb25zdCB2YWx1ZU1hcHBpbmcgPSB7XHJcbiAgICAgICAgS3Vuc2thcHNwcm92OiBcIjJcIixcclxuICAgICAgICBLw7ZycHJvdjogXCI5XCJcclxuICAgICAgICAvLyBBZGQgYW55IG90aGVyIG9wdGlvbnMgaGVyZSBpZiBuZWVkZWRcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSByZXN1bHQubXVsdGlTZWxlY3RWYWx1ZXMubWFwKFxyXG4gICAgICAgICh0ZXh0KSA9PiB2YWx1ZU1hcHBpbmdbdGV4dF0gfHwgdGV4dCAvLyBEZWZhdWx0IHRvIHRleHQgaWYgbm90IGluIG1hcHBpbmdcclxuICAgICAgKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJWYWx1ZXMgdG8gc2VsZWN0OlwiLCBzZWxlY3RlZFZhbHVlcylcclxuICAgICAgQXJyYXkuZnJvbShzZWxlY3RFbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSlcclxuICAgICAgfSlcclxuICAgICAgc2VsZWN0RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKVxyXG5cclxuICAgICAgdGhpcmRTZWxlY3QudmFsdWUgPSBcIlwiXHJcblxyXG4gICAgICAvLyBUeXBlIHRoZSB2YWx1ZSBjaGFyYWN0ZXIgYnkgY2hhcmFjdGVyIHdpdGggYSBzbGlnaHQgZGVsYXlcclxuICAgICAgZm9yIChjb25zdCBjaGFyIG9mIHJlc3VsdC5pbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcmRTZWxlY3QudmFsdWUgKz0gY2hhclxyXG4gICAgICAgIHRoaXJkU2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpIC8vIEFkanVzdCB0eXBpbmcgc3BlZWQgYXMgbmVlZGVkXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvY3VzIG9uIHRoZSBlbGVtZW50XHJcbiAgICAgIHRoaXJkU2VsZWN0LmZvY3VzKClcclxuXHJcbiAgICAgIC8vIC8vIEFkZCBhIGRlbGF5LCB0aGVuIHRyaWdnZXIgXCJFbnRlclwiIGtleSBldmVudCBwcm9ncmFtbWF0aWNhbGx5XHJcbiAgICAgIC8vIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxyXG4gICAgICAvLyBjb25zdCBrZXl1cEV2ZW50ID0gbmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLCB7XHJcbiAgICAgIC8vICAga2V5OiBcIkVudGVyXCIsXHJcbiAgICAgIC8vICAgY29kZTogXCJFbnRlclwiLFxyXG4gICAgICAvLyAgIGtleUNvZGU6IDEzLFxyXG4gICAgICAvLyAgIHdoaWNoOiAxMyxcclxuICAgICAgLy8gICBidWJibGVzOiB0cnVlXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC8vIHRoaXJkU2VsZWN0LmRpc3BhdGNoRXZlbnQoa2V5dXBFdmVudClcclxuXHJcbiAgICAgIGNvbnN0IG9wdGlvblRvU2VsZWN0ID0gQXJyYXkuZnJvbShkcm9wZG93bk1lbnUucXVlcnlTZWxlY3RvckFsbChcImxpXCIpKS5maW5kKChsaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsaS50ZXh0Q29udGVudC50cmltKCkgPT09IHJlc3VsdC5pbnB1dFZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJvcHRpb25Ub1NlbGVjdD4+Pj4+PlwiLCBvcHRpb25Ub1NlbGVjdClcclxuICAgICAgaWYgKG9wdGlvblRvU2VsZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNlbGVjdGluZyBvcHRpb246ICR7cmVzdWx0LmlucHV0VmFsdWV9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgYSBjbGljayBvbiB0aGUgZm91bmQgb3B0aW9uXHJcbiAgICAgICAgb3B0aW9uVG9TZWxlY3QuY2xpY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgT3B0aW9uIFwiJHtyZXN1bHQuaW5wdXRWYWx1ZX1cIiBub3QgZm91bmQgaW4gZHJvcGRvd25gKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBcIlJlc3RvcmVkIGlucHV0IHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZTpcIixcclxuICAgICAgICByZXN1bHQudGhpcmRJbnB1dFZhbHVlXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiZGl2LmNvbnRhaW5lci1mbHVpZCA+IHNlY3Rpb246bGFzdC1vZi10eXBlXCJcclxuICAgIClcclxuXHJcbiAgICBpZiAoIXNlY3Rpb25FbGVtZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VjdGlvbiBub3QgZm91bmQuXCIpXHJcbiAgICAgIGF0dGVtcHRzKytcclxuICAgICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXggYXR0ZW1wdHMgcmVhY2hlZC4gUmVsb2FkaW5nIHBhZ2UuLi5cIilcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGNoZWNrQXZhaWxhYmlsaXR5LCAxMDAwKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiU2VjdGlvbiBmb3VuZDpcIiwgc2VjdGlvbkVsZW1lbnQpXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xyXG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRPTSBjaGFuZ2VzIGRldGVjdGVkLCByZWNoZWNraW5nIGF2YWlsYWJpbGl0eS4uLlwiKVxyXG5cclxuICAgICAgICAgIGNvbnN0IHNlY29uZERpdiA9IHNlY3Rpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXY6bnRoLW9mLXR5cGUoMilcIilcclxuICAgICAgICAgIGlmIChzZWNvbmREaXYpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdERpdiA9IHNlY29uZERpdi5jaGlsZHJlbltzZWNvbmREaXYuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgY29uc3QgcGFuZWxzID0gbGFzdERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LnBhbmVsXCIpXHJcblxyXG4gICAgICAgICAgICBpZiAocGFuZWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF2YWlsYWJpbGl0eSBmb3VuZCEgU2VuZGluZyBtZXNzYWdlLlwiKVxyXG4gICAgICAgICAgICAgIHNlbmRBdmFpbGFiaWxpdHlNZXNzYWdlKClcclxuICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb25FbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KVxyXG4gICAgLy8gQ2hlY2sgZm9yIGF2YWlsYWJpbGl0eSB3aXRoaW4gc2VjdGlvbkVsZW1lbnRcclxuICAgIGNvbnN0IHNlY29uZERpdiA9IHNlY3Rpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXY6bnRoLW9mLXR5cGUoMilcIilcclxuXHJcbiAgICBpZiAoc2Vjb25kRGl2KSB7XHJcbiAgICAgIGNvbnN0IGxhc3REaXYgPSBzZWNvbmREaXYuY2hpbGRyZW5bc2Vjb25kRGl2LmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcbiAgICAgIGNvbnN0IHBhbmVscyA9IGxhc3REaXYucXVlcnlTZWxlY3RvckFsbChcImRpdi5wYW5lbFwiKVxyXG5cclxuICAgICAgaWYgKHBhbmVscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBdmFpbGFiaWxpdHkgZm91bmQhIFNlbmRpbmcgbWVzc2FnZS5cIilcclxuICAgICAgICBzZW5kQXZhaWxhYmlsaXR5TWVzc2FnZSgpXHJcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBhdmFpbGFiaWxpdHkgZm91bmQuIEF0dGVtcHQ6XCIsIGF0dGVtcHRzICsgMSlcclxuICAgICAgICBhdHRlbXB0cyArPSAxXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWlyZWQgZGl2cyBub3QgZm91bmQuXCIpXHJcbiAgICAgIGF0dGVtcHRzICs9IDFcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBtYXhpbXVtIGF0dGVtcHRzIGhhdmUgYmVlbiByZWFjaGVkXHJcbiAgICBpZiAoYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJNYXggYXR0ZW1wdHMgcmVhY2hlZC4gUmVsb2FkaW5nIHBhZ2UuLi5cIilcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpIC8vIFJlbG9hZCB0aGUgcGFnZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU2NoZWR1bGUgdGhlIG5leHQgY2hlY2sgYWZ0ZXIgMSBzZWNvbmRcclxuICAgICAgc2V0VGltZW91dChjaGVja0F2YWlsYWJpbGl0eSwgMTAwMClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFN0YXJ0IHRoZSBhdmFpbGFiaWxpdHkgY2hlY2tpbmcgbG9vcFxyXG4gIGNoZWNrQXZhaWxhYmlsaXR5KClcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZEF2YWlsYWJpbGl0eU1lc3NhZ2UoKSB7XHJcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXHJcbiAgICB7IG1lc3NhZ2U6IFwiYXZhaWxhYmlsaXR5XCIsIHN0YXR1czogXCJhdmFpbGFibGVcIiB9LFxyXG4gICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBzZW50IGZyb20gY29udGVudCBzY3JpcHQgdG8gYmFja2dyb3VuZDpcIiwgcmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgKVxyXG59XHJcblxyXG4vLyBMb29wIG92ZXIgZWFjaCBwYW5lbFxyXG4vLyBwYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcclxuLy8gICAvLyBTZWxlY3QgdGhlIGRpdiB3aXRoIHRoZSBjbGFzcyAncGFuZWwtYm9keScgaW5zaWRlIGVhY2ggcGFuZWxcclxuLy8gICBjb25zdCBwYW5lbEJvZHkgPSBwYW5lbC5xdWVyeVNlbGVjdG9yKFwiZGl2LnBhbmVsLWJvZHkgPiBkaXYucm93ID4gZGl2W2RhdGEtYmluZD0nZm9yZWFjaDpvY2Nhc2lvbnMnXSA+IGRpdi5yb3dcIilcclxuXHJcbi8vICAgaWYgKHBhbmVsQm9keSkge1xyXG4vLyAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcGFuZWxCb2R5LCBmb3IgZXhhbXBsZSwgbG9nIG9yIG1hbmlwdWxhdGUgaXRcclxuLy8gICAgIGNvbnNvbGUubG9nKFwicGFuZWxCb2R5Pj4+Pj4+PlwiLCBwYW5lbEJvZHkpXHJcbi8vICAgICBjb25zdCBwYW5lbFJvdyA9IHBhbmVsQm9keS5xdWVyeVNlbGVjdG9yKFwiZGl2Om50aC1vZi10eXBlKDEpXCIpXHJcblxyXG4vLyAgICAgaWYgKHBhbmVsUm93KSB7XHJcbi8vICAgICAgIC8vIEZpbmQgdGhlIHN0cm9uZyBlbGVtZW50IGluc2lkZSBwYW5lbFJvd1xyXG4vLyAgICAgICBjb25zdCBzdHJvbmdFbGVtZW50ID0gcGFuZWxSb3cucXVlcnlTZWxlY3RvcihcInN0cm9uZ1wiKTtcclxuXHJcbi8vICAgICAgIGlmIChzdHJvbmdFbGVtZW50KSB7XHJcbi8vICAgICAgICAgLy8gR2V0IHRoZSB0d28gZm9udCBlbGVtZW50cyBpbnNpZGUgdGhlIHN0cm9uZyBlbGVtZW50XHJcbi8vICAgICAgICAgY29uc3QgZm9udHMgPSBzdHJvbmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZvbnQnKTtcclxuXHJcbi8vICAgICAgICAgaWYgKGZvbnRzLmxlbmd0aCA+PSAyKSB7XHJcbi8vICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSBkYXRlIGZyb20gdGhlIGZpcnN0IGZvbnQgZWxlbWVudFxyXG4vLyAgICAgICAgICAgY29uc3QgZGF0ZSA9IGZvbnRzWzBdLnRleHRDb250ZW50LnRyaW0oKTtcclxuLy8gICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHRpbWUgZnJvbSB0aGUgc2Vjb25kIGZvbnQgZWxlbWVudFxyXG4vLyAgICAgICAgICAgY29uc3QgdGltZSA9IGZvbnRzWzFdLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcbi8vICAgICAgICAgICAvLyBMb2cgb3IgdXNlIHRoZSBleHRyYWN0ZWQgZGF0ZSBhbmQgdGltZVxyXG4vLyAgICAgICAgICAgY29uc29sZS5sb2coYERhdGU6ICR7ZGF0ZX0sIFRpbWU6ICR7dGltZX1gKTtcclxuXHJcbi8vICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgZXh0cmFjdGVkIHZhbHVlcyBpZiBuZWVkZWRcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyBFeGFtcGxlOiBNb2RpZnkgb3Igd29yayB3aXRoIHRoZSBwYW5lbCBib2R5IGNvbnRlbnRcclxuLy8gICAgIHBhbmVsQm9keS50ZXh0Q29udGVudCA9IFwiTmV3IENvbnRlbnQgZm9yIFBhbmVsIEJvZHlcIlxyXG4vLyAgIH1cclxuLy8gfSlcclxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImZpbmRhdmFpbGFiaWxpdHkuMzg5MzIyYzkuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);