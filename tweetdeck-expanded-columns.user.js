// ==UserScript==
// @name TweetDeck Expanded Columns
// @version 0.1
// @match https://web.tweetdeck.com/
// ==/UserScript==
 
// TODO Update widths when columns are added or removed
 
var onColumnsAvailable = function(callback) {
    var columns = document.querySelectorAll('.column')
    if (columns.length) {
        callback(columns)
    } else {
        setTimeout(function() { onColumnsAvailable(callback) }, 500)
    }
}
    
onColumnsAvailable(function(columns) {
    var columnMarginWidth = .5
    var columnMarginsWidth = columnMarginWidth * (1 + columns.length)
    var columnWidth = (100 - columnMarginsWidth) / columns.length
    var style = document.createElement('style')
    style.innerHTML = [
        '.app-columns { padding: 0 }',
        '.app-columns .column { width: ' + columnWidth + '%; margin: ' + columnMarginWidth + '%; margin-right: 0; min-width: 250px; box-sizing: border-box }'
    ].join('\n')
    document.head.appendChild(style)
})
