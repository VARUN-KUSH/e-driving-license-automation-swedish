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
})({"gPt7H":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 57698,
    "entryFilePath": "C:\\Users\\shirisi\\Desktop\\newstripeintegration\\extension\\booking-availability\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
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
function H(e) {
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
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _background = require("../../../background");

},{"../../../background":"k375p"}],"k375p":[function(require,module,exports) {
const sendTelegramMessage = (message, botToken, chatId)=>{
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    }).then((response)=>{
        return response;
    }).catch((error)=>{
        console.error("Error fetching data:", error) // Handle any errors
        ;
        return null;
    });
    return response;
};
const getChatId = async (botToken)=>{
    const apiUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.ok && data.result.length > 0) return data.result[0].message.chat.id;
        return null;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};
//   try {
//     const response = await fetch(apiUrl)
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`)
//     }
//     const data = await response.json()
//     if (data.ok && data.result.length > 0) {
//       // Get the latest chat ID from the updates
//       const chatId = data.result[data.result.length - 1].message.chat.id
//       console.log("chatId>>>>>>", chatId)
//       await sendTelegramMessage(botToken, chatId, message)
//     } else {
//       throw new Error(
//         "No chat ID found. Send a message to the bot to initiate the conversation."
//       )
//     }
//   } catch (error) {
//     console.error("Failed to retrieve chat ID:", error)
//     return null
//   }
// }
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    if (request.action === "login") {
        // Send a fetch request to your localhost/api server
        fetch("http://localhost:3000/api/extlogging", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: request.email,
                password: request.password
            })
        }).then((response)=>response.json()).then((data)=>{
            if (data.status === 200 && data.data.user.periodEnd == true) {
                const token = data.data.token;
                //handle token edge case
                // Store the token securely using chrome.storage
                chrome.storage.local.set({
                    token
                }, function() {
                    console.log("Token saved to chrome.storage:", token);
                });
                // if (data.data.subscription != true) sendResponse({
                //     success: true,
                //     subscription: "notsubscribed"
                // });
                sendResponse({
                    success: true
                });
            } else sendResponse({
                success: false
            });
            console.log("datafromnextjsserver>>>>>>>>>", data);
        }).catch((error)=>{
            console.error("Login error:", error);
            sendResponse({
                success: false
            });
        });
        return true // Indicates that the response will be sent asynchronously
        ;
    }

    if (request.action === "verify") {
        chrome.storage.local.get("token", function(result) {
            const token = result.token;
            if (token) // Proceed with sending the token to the verify endpoint
            fetch("http://localhost:3000/api/exttokenverify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token
                })
            }).then((response)=>response.json()).then((data)=>{
                if (data.status === 200 && data.message === "Authenticated successfully") {
                    // Handle the case where the token is valid
                    if (data.subscription) {
                        const currentPeriodEnd = data.subscription
                        const isSubscriptionActive = () => {
        
                            // Current period validation
                            const now = new Date();
                            const periodEnd = new Date(currentPeriodEnd);
                            
                            return periodEnd > now;
                          };
                      
                          if (!isSubscriptionActive()) {
                            sendResponse({
                                success: true,
                                subscription: "notsubscribed"
                            });
                            return
                          }

                    } 
                    sendResponse({
                        success: true
                    });
                } else sendResponse({
                    success: false
                });
                console.log("data from Next.js server >>>>>>>>", data);
            }).catch((error)=>{
                console.error("Verification error:", error);
                sendResponse({
                    success: false
                });
            });
            else // If no token is found, send an error response
            sendResponse({
                success: false,
                message: "No token found"
            });
        });
        return true // Indicates that the response will be sent asynchronously
        ;
    }
    if (request.message === "availability") {
        console.log("Availability message received in background:", request.status);
        // const messageSent = sendTelegramMessage(
        //   "Your Booking Notifier settings have been saved successfully!"
        // )
        chrome.storage.local.get("telegramBotToken", async function(result) {
            const botToken = result.telegramBotToken;
            if (botToken) {
                console.log("Retrieved Bot Token:", botToken);
                // Use botToken as needed
                const chatId = await getChatId(botToken);
                console.log("chatId>>>>>>>>>>>", chatId);
                const messageSent = sendTelegramMessage("Your Booking Slot is Available BOOK NOW!", botToken, chatId);
                console.log("messageSent>>>>>>>>>", messageSent);
            } else console.log("Bot token is not set.");
        });
        // if (messageSent) {
        //   setSaveStatus("Settings saved and notification sent!")
        // } else {
        //   setSaveStatus(
        //     "Settings saved, but notification failed to send. Please check your bot token and chat ID."
        //   )
        // }
        // Respond to content script
        sendResponse({
            status: "Message received in background"
        });
        return true;
    }
});

},{}]},["gPt7H","8oeFb"], "8oeFb", "parcelRequire847b")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztvQkFBSztnQkFDL0IsT0FDRSxhQUFhO29CQUFFLFNBQVM7Z0JBQU07Z0JBRWhDLFFBQVEsSUFBSSxxQ0FBcUM7WUFDbkQsR0FDQyxNQUFNLENBQUM7Z0JBQ04sUUFBUSxNQUFNLHVCQUF1QjtnQkFDckMsYUFBYTtvQkFBRSxTQUFTO2dCQUFNO1lBQ2hDO2lCQUVGLCtDQUErQztZQUMvQyxhQUFhO2dCQUFFLFNBQVM7Z0JBQU8sU0FBUztZQUFpQjtRQUU3RDtRQUVBLE9BQU8sS0FBSywwREFBMEQ7O0lBQ3hFO0lBQ0EsSUFBSSxRQUFRLFlBQVksZ0JBQWdCO1FBQ3RDLFFBQVEsSUFBSSxnREFBZ0QsUUFBUTtRQUNwRSwyQ0FBMkM7UUFDM0MsbUVBQW1FO1FBQ25FLElBQUk7UUFDSixPQUFPLFFBQVEsTUFBTSxJQUFJLG9CQUFvQixlQUFnQixNQUFNO1lBQ2pFLE1BQU0sV0FBVyxPQUFPO1lBRXhCLElBQUksVUFBVTtnQkFDWixRQUFRLElBQUksd0JBQXdCO2dCQUNwQyx5QkFBeUI7Z0JBQ3pCLE1BQU0sU0FBUyxNQUFNLFVBQVU7Z0JBQy9CLFFBQVEsSUFBSSxxQkFBcUI7Z0JBQ2pDLE1BQU0sY0FBYyxvQkFDdEIsNENBQTRDLFVBQVU7Z0JBRXhELFFBQVEsSUFBSSx3QkFBd0I7WUFDbEMsT0FDRSxRQUFRLElBQUk7UUFFaEI7UUFFQSxxQkFBcUI7UUFDckIsMkRBQTJEO1FBQzNELFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsa0dBQWtHO1FBQ2xHLE1BQU07UUFDTixJQUFJO1FBR0osNEJBQTRCO1FBQzVCLGFBQWE7WUFBRSxRQUFRO1FBQWlDO1FBQ3hELE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMjUuMS9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0yYzY1Y2NmN2M0NDA1ZWZlLmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHU9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgaD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBCPW5ldyBTZXQodSksXz1lPT5CLmhhcyhlKSxHPXUuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgVT1fKFwiLS1kcnktcnVuXCIpLGc9KCk9Pl8oXCItLXZlcmJvc2VcIil8fGgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsTj1nKCk7dmFyIG09KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHk9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+bShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGY9KC4uLmUpPT5tKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksTT0wLGk9KC4uLmUpPT5nKCkmJm0oYFxcdXsxRjdFMX0gJHtNKyt9YCwuLi5lKTt2YXIgYj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6NTc2OTgsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxzaGlyaXNpXFxcXERlc2t0b3BcXFxcbmV3c3RyaXBlaW50ZWdyYXRpb25cXFxcZXh0ZW5zaW9uXFxcXGJvb2tpbmctYXZhaWxhYmlsaXR5XFxcXC5wbGFzbW9cXFxcc3RhdGljXFxcXGJhY2tncm91bmRcXFxcaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJjMzM4OTA4ZTcwNGM5MWYxXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NTc2OTd9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSChlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUg7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBjPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gUigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiB4KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gZCgpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFA9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCIsUz1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO3ZhciBPPWAke24uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke1IoKX06JHtkKCl9L2A7YXN5bmMgZnVuY3Rpb24gayhlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goTyk7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uobz0+c2V0VGltZW91dChvLGUpKX19aWYoYy5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWMucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBvPXQucmVxdWVzdC51cmw7aWYoby5zdGFydHNXaXRoKGUpKXtsZXQgcz1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChvLnNsaWNlKGUubGVuZ3RoKSkpO3MuaG9zdG5hbWU9PT1uLmhvc3QmJnMucG9ydD09PWAke24ucG9ydH1gPyhzLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKHMpLnRoZW4ocj0+bmV3IFJlc3BvbnNlKHIuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpyLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gRShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIEMoZT1kKCkpe2xldCB0PXgoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBMKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJnkoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBUKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKE51bWJlcihkKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTthd2FpdCBlKHMpfSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0fWZ1bmN0aW9uIEEoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7aWYocy50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShzLmFzc2V0cykscy50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBzLmRpYWdub3N0aWNzLmFuc2kpe2xldCBsPXIuY29kZWZyYW1lfHxyLnN0YWNrO2YoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmArbCtgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57ZihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHc9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxiZ0NoYW5nZWQ6ITEsY3NDaGFuZ2VkOiExLHBhZ2VDaGFuZ2VkOiExLHNjcmlwdFBvcnRzOm5ldyBTZXQscGFnZVBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIHAoZT0hMSl7aWYoZXx8YS5idWlsZFJlYWR5JiZhLnBhZ2VDaGFuZ2VkKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIFBhZ2VcIik7Zm9yKGxldCB0IG9mIGEucGFnZVBvcnRzKXQucG9zdE1lc3NhZ2UobnVsbCl9aWYoZXx8YS5idWlsZFJlYWR5JiYoYS5iZ0NoYW5nZWR8fGEuY3NDaGFuZ2VkKSl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBDU1wiKTtsZXQgdD1hd2FpdCBjPy50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWMucnVudGltZS5yZWxvYWQoKX19aWYoIXd8fCF3LmlzUGFyY2VsUmVxdWlyZSl7YigpO2xldCBlPUEoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PkUobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGw9PmwuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChsPT5PYmplY3QudmFsdWVzKGwpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGw9PnMuaGFzKGwpKX1wKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IGsoKSxwKCEwKX0pfVQoYXN5bmMgZT0+e3N3aXRjaChpKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxlLnR5cGUpe2Nhc2VcImJ1aWxkX3JlYWR5XCI6e2EuYnVpbGRSZWFkeXx8PSEwLHAoKTticmVha31jYXNlXCJjc19jaGFuZ2VkXCI6e2EuY3NDaGFuZ2VkfHw9ITAscCgpO2JyZWFrfX19KTtjLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2xldCB0PWUubmFtZS5zdGFydHNXaXRoKFApLG89ZS5uYW1lLnN0YXJ0c1dpdGgoUyk7aWYodHx8byl7bGV0IHM9dD9hLnBhZ2VQb3J0czphLnNjcmlwdFBvcnRzO3MuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyKXtpKFwiQkdTVyBSdW50aW1lIC0gT24gc291cmNlIGNoYW5nZWRcIixyKSxyLl9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGEuY3NDaGFuZ2VkfHw9ITApLHIuX19wbGFzbW9fcGFnZV9jaGFuZ2VkX18mJihhLnBhZ2VDaGFuZ2VkfHw9ITApLHAoKX0pfX0pO2MucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLHAoKSksITB9KTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2JhY2tncm91bmRcIiIsImNvbnN0IHNlbmRUZWxlZ3JhbU1lc3NhZ2UgPSAobWVzc2FnZSwgYm90VG9rZW4sIGNoYXRJZCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90JHtib3RUb2tlbn0vc2VuZE1lc3NhZ2VgXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBjaGF0X2lkOiBjaGF0SWQsXHJcbiAgICAgIHRleHQ6IG1lc3NhZ2VcclxuICAgIH0pXHJcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHtyZXR1cm4gcmVzcG9uc2V9KSBcclxuICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpIC8vIEhhbmRsZSBhbnkgZXJyb3JzXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0pXHJcbiAgcmV0dXJuIHJlc3BvbnNlXHJcbn1cclxuXHJcblxyXG4gIGNvbnN0IGdldENoYXRJZCA9IGFzeW5jIChib3RUb2tlbikgPT4ge1xyXG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke2JvdFRva2VufS9nZXRVcGRhdGVzYFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAoZGF0YS5vayAmJiBkYXRhLnJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0WzBdLm1lc3NhZ2UuY2hhdC5pZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybClcclxuLy8gICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9IC0gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuLy8gICAgIGlmIChkYXRhLm9rICYmIGRhdGEucmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgLy8gR2V0IHRoZSBsYXRlc3QgY2hhdCBJRCBmcm9tIHRoZSB1cGRhdGVzXHJcbi8vICAgICAgIGNvbnN0IGNoYXRJZCA9IGRhdGEucmVzdWx0W2RhdGEucmVzdWx0Lmxlbmd0aCAtIDFdLm1lc3NhZ2UuY2hhdC5pZFxyXG4vLyAgICAgICBjb25zb2xlLmxvZyhcImNoYXRJZD4+Pj4+PlwiLCBjaGF0SWQpXHJcbi8vICAgICAgIGF3YWl0IHNlbmRUZWxlZ3JhbU1lc3NhZ2UoYm90VG9rZW4sIGNoYXRJZCwgbWVzc2FnZSlcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuLy8gICAgICAgICBcIk5vIGNoYXQgSUQgZm91bmQuIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBib3QgdG8gaW5pdGlhdGUgdGhlIGNvbnZlcnNhdGlvbi5cIlxyXG4vLyAgICAgICApXHJcbi8vICAgICB9XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcmV0cmlldmUgY2hhdCBJRDpcIiwgZXJyb3IpXHJcbi8vICAgICByZXR1cm4gbnVsbFxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJsb2dpblwiKSB7XHJcbiAgICAvLyBTZW5kIGEgZmV0Y2ggcmVxdWVzdCB0byB5b3VyIGxvY2FsaG9zdC9hcGkgc2VydmVyXHJcbiAgICBmZXRjaChcImh0dHBzOi8vdHJhZmlrLWFzaGVuLnZlcmNlbC5hcHAvYXBpL2F1dGgvbG9naW5cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVtYWlsOiByZXF1ZXN0LmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiByZXF1ZXN0LnBhc3N3b3JkXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBkYXRhLnN0YXR1cyA9PT0gMjAwICYmXHJcbiAgICAgICAgICBkYXRhLm1lc3NhZ2UgPT0gXCJVc2VyIGF1dGhlbnRpY2F0ZWQgc3VjY2Vzc2Z1bGx5XCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuID0gZGF0YS5kYXRhLnRva2VuXHJcbiAgICAgICAgICAvL2hhbmRsZSB0b2tlbiBlZGdlIGNhc2VcclxuXHJcbiAgICAgICAgICAvLyBTdG9yZSB0aGUgdG9rZW4gc2VjdXJlbHkgdXNpbmcgY2hyb21lLnN0b3JhZ2VcclxuICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHRva2VuIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUb2tlbiBzYXZlZCB0byBjaHJvbWUuc3RvcmFnZTpcIiwgdG9rZW4pXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGlmIChkYXRhLmRhdGEuc3Vic2NyaXB0aW9uICE9IHRydWUpIHtcclxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSwgc3Vic2NyaXB0aW9uOiBcIm5vdHN1YnNjcmliZWRcIiB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFmcm9tbmV4dGpzc2VydmVyPj4+Pj4+Pj4+XCIsIGRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9naW4gZXJyb3I6XCIsIGVycm9yKVxyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHRydWUgLy8gSW5kaWNhdGVzIHRoYXQgdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudCBhc3luY2hyb25vdXNseVxyXG4gIH1cclxuICBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwidmVyaWZ5XCIpIHtcclxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInRva2VuXCIsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgY29uc3QgdG9rZW4gPSByZXN1bHQudG9rZW5cclxuXHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIC8vIFByb2NlZWQgd2l0aCBzZW5kaW5nIHRoZSB0b2tlbiB0byB0aGUgdmVyaWZ5IGVuZHBvaW50XHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGgvdmVyaWZ5XCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0b2tlbiAvLyBTZW5kIHRoZSB0b2tlbiBpbiB0aGUgcmVxdWVzdCBib2R5XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBkYXRhLnN0YXR1cyA9PT0gMjAwICYmXHJcbiAgICAgICAgICAgICAgZGF0YS5tZXNzYWdlID09PSBcIkF1dGhlbnRpY2F0ZWQgc3VjY2Vzc2Z1bGx5XCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSB0b2tlbiBpcyB2YWxpZFxyXG4gICAgICAgICAgICAgIGlmIChkYXRhLnN1YnNjcmlwdGlvbiAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSwgc3Vic2NyaXB0aW9uOiBcIm5vdHN1YnNjcmliZWRcIiB9KVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gTmV4dC5qcyBzZXJ2ZXIgPj4+Pj4+Pj5cIiwgZGF0YSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJWZXJpZmljYXRpb24gZXJyb3I6XCIsIGVycm9yKVxyXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiBubyB0b2tlbiBpcyBmb3VuZCwgc2VuZCBhbiBlcnJvciByZXNwb25zZVxyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5vIHRva2VuIGZvdW5kXCIgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdHJ1ZSAvLyBJbmRpY2F0ZXMgdGhhdCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50IGFzeW5jaHJvbm91c2x5XHJcbiAgfVxyXG4gIGlmIChyZXF1ZXN0Lm1lc3NhZ2UgPT09IFwiYXZhaWxhYmlsaXR5XCIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQXZhaWxhYmlsaXR5IG1lc3NhZ2UgcmVjZWl2ZWQgaW4gYmFja2dyb3VuZDpcIiwgcmVxdWVzdC5zdGF0dXMpXHJcbiAgICAvLyBjb25zdCBtZXNzYWdlU2VudCA9IHNlbmRUZWxlZ3JhbU1lc3NhZ2UoXHJcbiAgICAvLyAgIFwiWW91ciBCb29raW5nIE5vdGlmaWVyIHNldHRpbmdzIGhhdmUgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkhXCJcclxuICAgIC8vIClcclxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInRlbGVncmFtQm90VG9rZW5cIiwgYXN5bmMgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBjb25zdCBib3RUb2tlbiA9IHJlc3VsdC50ZWxlZ3JhbUJvdFRva2VuXHJcblxyXG4gICAgICBpZiAoYm90VG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJpZXZlZCBCb3QgVG9rZW46XCIsIGJvdFRva2VuKVxyXG4gICAgICAgIC8vIFVzZSBib3RUb2tlbiBhcyBuZWVkZWRcclxuICAgICAgICBjb25zdCBjaGF0SWQgPSBhd2FpdCBnZXRDaGF0SWQoYm90VG9rZW4pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGF0SWQ+Pj4+Pj4+Pj4+PlwiLCBjaGF0SWQpXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZVNlbnQgPSBzZW5kVGVsZWdyYW1NZXNzYWdlKFxyXG4gICAgICBcIllvdXIgQm9va2luZyBTbG90IGlzIEF2YWlsYWJsZSBCT09LIE5PVyFcIiwgYm90VG9rZW4sIGNoYXRJZFxyXG4gICAgKVxyXG4gICAgY29uc29sZS5sb2coXCJtZXNzYWdlU2VudD4+Pj4+Pj4+PlwiLCBtZXNzYWdlU2VudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJvdCB0b2tlbiBpcyBub3Qgc2V0LlwiKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGlmIChtZXNzYWdlU2VudCkge1xyXG4gICAgLy8gICBzZXRTYXZlU3RhdHVzKFwiU2V0dGluZ3Mgc2F2ZWQgYW5kIG5vdGlmaWNhdGlvbiBzZW50IVwiKVxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgc2V0U2F2ZVN0YXR1cyhcclxuICAgIC8vICAgICBcIlNldHRpbmdzIHNhdmVkLCBidXQgbm90aWZpY2F0aW9uIGZhaWxlZCB0byBzZW5kLiBQbGVhc2UgY2hlY2sgeW91ciBib3QgdG9rZW4gYW5kIGNoYXQgSUQuXCJcclxuICAgIC8vICAgKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIFxyXG4gICAgLy8gUmVzcG9uZCB0byBjb250ZW50IHNjcmlwdFxyXG4gICAgc2VuZFJlc3BvbnNlKHsgc3RhdHVzOiBcIk1lc3NhZ2UgcmVjZWl2ZWQgaW4gYmFja2dyb3VuZFwiIH0pXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufSlcclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);