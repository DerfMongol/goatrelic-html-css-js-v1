

var js = document.createElement('script')
var js2 = document.createElement('script')
var js3 = document.createElement('script')
var js4 = document.createElement('script')
var js5 = document.createElement('script')
var js6 = document.createElement('script')
var js7 = document.createElement('script') 

var team = ['nba', 'nhl', 'pga']
// var js3 = document.createElement('script')
// var js4 = document.createElement('script')

var body = document.querySelector('body')
var head = document.querySelector('head')
var originHref = location.origin + '/js/'
var originHref2 = location.origin + '/'

console.log(location.pathname)
if (location.pathname === '/index.html' || location.pathname === '/') {
    js.src = originHref + 'security.js'
    // js.async = false
    body.appendChild(js)
} else {
    js.src = originHref + 'functions.js'
    js.async = false
    js2.src = originHref + 'shared.js'
    js2.async = false
    body.appendChild(js)
    body.appendChild(js2)
}

for (var i = 0; i < team.length; i++) {
    // debugger
    if (location.pathname.includes(team[i]) && !location.pathname.includes('players')) {
        // debugger
        js3.src = originHref2 + team[i] + '/' + team[i] + '.js'
        js3.async = false
        js4.src = originHref + 'critics.js'
        js4.async = false
        js5.src = originHref + 'trophy.js'
        js5.async = false
        body.appendChild(js5)
        body.appendChild(js3)
        body.appendChild(js4)
    }
}

//Google Analytics when ready

// js6.src = "https://www.googletagmanager.com/gtag/js?id=UA-127768473-1"
// js6.async = true
// js7.text = window.dataLayer = window.dataLayer || [];
// js7.text =function gtag(){dataLayer.push(arguments);}
// js7.text = gtag('js', new Date());
// js7.text = gtag('config', 'UA-127768473-1');

// head.appendChild(js6)
// head.appendChild(js7)





