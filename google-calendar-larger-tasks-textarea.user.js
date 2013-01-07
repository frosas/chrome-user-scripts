// ==UserScript==
// @name Google Calendar Larger Tasks Textarea
// @version 0.1
// @match http*://www.google.com/calendar/render?*
// ==/UserScript==
 
setInterval(function() {
    var iframe = document.querySelector('.bubble iframe')
    if (! iframe) return
    iframe.contentDocument.querySelector('textarea.ec').style.height = '200px'
}, 1000)
