

critics.forEach(function (critic, index) {
    critic.players.forEach(function (player, pIndex) {
        var hold = allTimeLength()
        var count = 0
        allTime.forEach(function (member, mIndex) {
            if (member.name === player) {
                hold = mIndex
                count++
            }
        })
        allTimeObj(count)
        calculateStats(hold, player, pIndex)
    })
    if (index > 0) {
        sortAllTime()
    }
})

var topSix = document.querySelectorAll('#all-time .cats')
var alltime = document.querySelector('#list')
var listTitle = alltime.querySelector('.titleFont')

allTimeList(0)

var fullList = document.createElement('div')
fullList.textContent = '+'
fullList.className = 'big min-max'
alltime.appendChild(fullList)

var minList = document.createElement('div')
minList.textContent = '-'
minList.className = 'big min-max'

fullList.addEventListener('click', function (e) {
    allTimeList(1)
    listTitle.textContent = 'Critics Top Players of All Time'
    alltime.removeChild(fullList)
    alltime.appendChild(minList)
})

minList.addEventListener('click', function (e) {

    for (var index = 0; index < topSix.length; index++) {
        var playDiv = topSix[index].querySelectorAll('div')
        for (var index1 = 0; index1 < playDiv.length; index1++) {

            // debugger
            if (index1 > 5) {
                topSix[index].removeChild(playDiv[index1])
            }
        }
    }
    listTitle.textContent = 'Critics Top 5 Players of All Time'
    alltime.removeChild(minList)
    alltime.appendChild(fullList)
})


sortCritics()
var criticList = document.querySelector('#critic-list')
var criticTitle = document.querySelector('.review')

critics.forEach(function (critic) {

    criticTitle.textContent = 'Critics (' + critics.length + ')'
    var profile = newElement('div', 'critic-profile', null, criticList)
    newElement('div', 'pic ' + critic.pic, null, profile)
    newElement('div', 'critic-name', critic.name, profile)
    newElement('div', 'info', critic.job, profile)
    for (var index = 0; index < 10; index++) {
        if (index > critic.players.length - 1) {
            break
        }
        newElement('div', 'goat-stats', index + 1 + '.' + '  ' + critic.players[index], profile)
        if (index == 9 && critic.players.length > 10) {
            newElement('div', 'goat-stats', '...', profile)
            newElement('div', 'goat-stats', '( ' + critic.players.length + ' )', profile)
        }
    }

    var criticFoot = newElement('div', 'foot-info', critic.date, profile)
    var criticLink = newElement('a', null, 'View Source', criticFoot)
    criticLink.id = 'web-link'
    criticLink.href = critic.url

})






