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
            if (node.classList.contains('link')) {
                node.addEventListener('click', function(event) { 
                    event.stopPropagation()
                    open(node.querySelector('.original_url').href)
                })
            }
        }) 
    }) 
}).observe(document, {childList: true, subtree: true})
