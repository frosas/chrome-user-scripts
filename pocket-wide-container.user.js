// ==UserScript==
// @name Pocket Wide Container
// @match http*://getpocket.com/a/queue/
// @version 1.4.1
// @updateURL https://raw.github.com/frosas/chrome-user-scripts/master/pocket-wide-container.user.js
// ==/UserScript==
 
var style = document.createElement('style')
style.innerHTML = [
    '.wrapper { width: auto }',
    '.item { width: 18.3% !important }',
    '#page #content .wrapper.tag_sidebar_holder { background-image: none }'
].join('\n')
document.head.appendChild(style)
