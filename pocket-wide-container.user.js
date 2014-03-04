// ==UserScript==
// @name Pocket Wide Container
// @match *://getpocket.com/a/queue/
// @version 1.4.1
// ==/UserScript==
 
var style = document.createElement('style')
style.innerHTML = [
    '.wrapper { width: auto }',
    '.item { width: 18.3% !important }',
    '#page #content .wrapper.tag_sidebar_holder { background-image: none }'
].join('\n')
document.head.appendChild(style)

// Always open the external link
new MutationObserver(function(mutations) { 
    mutations.forEach(function(mutation) { 
        ;[].forEach.call(mutation.addedNodes || [], function(node) {
            ;[].forEach.call(node.parentNode.querySelectorAll('.original_url'), function(a) {
                var item = (function(node) { while (!node.classList.contains('item')) node = node.parentNode; return node })(a)
                item.querySelector('.link').href = a.href
            })
        }) 
    }) 
}).observe(document, {childList: true, subtree: true})
