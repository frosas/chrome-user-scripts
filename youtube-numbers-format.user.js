// ==UserScript==
// @name YouTube Numbers Format
// @version 0.2.1
// @match http://www.youtube.com/watch?*
// ==/UserScript==
 
var formatNumbers = function(string) {
    return string.replace(/\d+/, function(matched) { return formatNumber(matched) })
}

var formatNumber = function(number) {
    var formatted = ''
    for (var i = 0; i < number.length; i++) {
        if (i && i % 3 == 0) formatted = '.' + formatted
        formatted = number[number.length - 1 - i] + formatted
    }
    return formatted
}

;['.watch-view-count', '.likes-count', '.dislikes-count', '.view-count'].forEach(function(selector) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), function(element) {
        element.innerText = formatNumbers(element.innerText)
    })
})
