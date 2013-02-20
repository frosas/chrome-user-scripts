// ==UserScript==
// @name YouTube Numbers Format
// @version 0.2
// @match http://www.youtube.com/watch?*
// ==/UserScript==
 
var formatNumbers = function(string) {
    return string.replace(/[0-9]+/, function(matched) {
        return formatNumber(matched)
    })
}

var formatNumber = function(number) {
    return number.split('').reverse().groupByLength(3).reverse().join('.')
}

Array.prototype.groupByLength = function(length) {
    var grouped = []
    this.forEach(function(value, index) {
        if (index % length === 0) grouped.push('')
        grouped[grouped.length - 1] = value + grouped[grouped.length - 1]
    })
    return grouped
}

;['.watch-view-count', '.likes-count', '.dislikes-count', '.view-count'].forEach(function(selector) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), function(element) {
        element.innerText = formatNumbers(element.innerText)
    })
})
