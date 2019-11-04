var allTimeLength = function () {
    if (allTime[0].name === '') {
        return allTime.length - 1
    } else {
        return allTime.length
    }
}

var allTimeObj = function (count) {
    if (count === 0 && allTime[0].name != '') {
        allTime.push({
            name: '',
            rank: 0,
            lists: 0,
            avg: 0,
            relic: 0
        })
    }
}

var sortAllTime = function () {
    allTime.sort(function (a, b) {
        if (a.relic > b.relic) {
            return -1
        }
        if (b.relic > a.relic) {
            return 1
        }
        else {
            return 0
        }
    })
}

var calculateStats = function (hold, player, pIndex) {
    allTime[hold].name = player
    allTime[hold].rank += (pIndex + 1)
    allTime[hold].lists++
    allTime[hold].avg = allTime[hold].rank / allTime[hold].lists
    allTime[hold].relic = ((allTime[hold].lists / critics.length) * 100) / allTime[hold].avg
}

var newElement = function (type, classname, text, father) {
    var element = document.createElement(type)
    element.className = classname
    element.textContent = text
    father.appendChild(element)
    return element
}

var maxList = 0
var allTimeList = function (foo) {
    
    for (var index = 0; index < topSix.length; index++) {
        allTime.forEach(function (player, index1) {
            var bar = true
            // debugger
            if (foo === 1) {
                bar = index1 > 4
            } else {
                bar = index1 < 5
            }
            if (bar) {
                
                var topElement = document.createElement('div')
                topElement.className = 'player-list'
                if (index === 0) {
                    var x = 1
                    if (index1 > 0) {
                        while (player.avg === allTime[index1 - x].avg) {
                            x++
                        }
                    } else {
                        // debugger
                        maxList = player.lists
                    }
                    if (x !== 1) {
                        topElement.textContent = (index1 - x + 2) + '.'
                    } else {
                        topElement.textContent = (index1 + 1) + '.'
                    }

                }
                if (index === 1) {
                    topElement.textContent = player.name
                }
                if (index === 2) {
                    topElement.textContent = (player.lists / maxList * 100).toFixed(2) + '%'
                }
                if (index === 3) {
                    topElement.textContent = player.avg.toFixed(2)
                }
                topSix[index].appendChild(topElement)
            }
        })
    }
}

var sortCritics = function () {
    critics.sort(function (a, b) {
        if (a.players.length > b.players.length) {
            return -1
        }
        if (b.players.length > a.players.length) {
            return 1
        }
        else {
            return 0
        }
    })
}





