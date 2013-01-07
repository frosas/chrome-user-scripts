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
    var columnWidth = (100 - columnMarginWidth * (1 + columns.length)) / columns.length
    var style = document.createElement('style')
    style.innerHTML = [
        '#columns { padding: 0 }',
        '#columns .column { width: ' + columnWidth + '%; margin: ' + columnMarginWidth + '%; margin-left: 0; min-width: 250px }',
        '#columns .column:first-child { margin-left: ' + columnMarginWidth + '% }'
    ].join('\n')
    document.head.appendChild(style)
})
