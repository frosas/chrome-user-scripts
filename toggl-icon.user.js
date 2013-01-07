// ==UserScript==
// @name Toggl Icon
// @version 0.2.3
// @description Shows whether tracking is running in the page icon
// @match https://www.toggl.com/track?*
// ==/UserScript==
 
var onElementAttributesChange = function(element, callback) {
    new WebKitMutationObserver(callback).observe(element, {attributes: true})
}
var onElementAvailable = function(selector, callback) {
    var intervalId = setInterval(function() {
        console.log(document.querySelector(selector))
        if (! document.querySelector(selector)) return
        clearInterval(intervalId)
        callback()
    }, 1000)
}
    
var Tracking = function() {
    var el = document.getElementById('running-task-form')
    return {
        isRunning: function() { return el.style.display != 'none' },
        onChange: function(callback) { onElementAttributesChange(el, callback) }
    }
}
    
var Icon = function(tracking) {
    var el = document.querySelector('link[rel~=icon]') 
    if (! el) {
        el = document.createElement('link')
        el.setAttribute('rel', 'icon')
        el.setAttribute('type', 'image/png')
        document.head.appendChild(el)
    }
    
    var update = function() {
        el.setAttribute('href', tracking.isRunning() ? 
            'http://cdn.dustball.com/clock_stop.png' : 
            'http://cdn.dustball.com/clock_play.png')
    }
        
    tracking.onChange(update)
    update()
}

onElementAvailable('#running-task-form', function() {
    new Icon(new Tracking)
})
