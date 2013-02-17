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

;['.watch-view-count', '.likes-count', '.dislikes-count'].forEach(function(selector) {
    var el = document.querySelector(selector)
    el.innerText = formatNumbers(el.innerText)
})
