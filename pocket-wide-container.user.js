// ==UserScript==
// @name Pocket Wide Container
// @match https://getpocket.com/a/queue/
// @version 1.3
// ==/UserScript==
 
var style = document.createElement('style')
style.innerHTML = [
    '.wrapper { width: auto }',
    '.item { width: 18.3% !important }',
    '#page #content .wrapper.tag_sidebar_holder { background-image: none }'
].join('\n')
document.head.appendChild(style)
