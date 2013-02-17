// ==UserScript==
// @name YouTube Numbers Format
// @version 0.1
// @match http://www.youtube.com/watch?*
// ==/UserScript==
 
var formatNumbers = function(string) {
    return string.replace(/[0-9]+/, function(matched) {
        return formatNumber(matched)
    })
}

var formatNumber = function(input) {
    var output = ''
    while (input.length) {
        if (output.length) output = '.' + output
        output = input.substr(-3) + output
        input = input.substring(0, input.length - 3)
    }
    return output
}

;['.watch-view-count', '.likes-count', '.dislikes-count'].forEach(function(selector) {
    var el = document.querySelector(selector)
    el.innerText = formatNumbers(el.innerText)
})

