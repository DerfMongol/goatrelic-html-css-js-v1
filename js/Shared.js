var sports = []
    sports[0] = {
        name: 'nba',
        players: [
            'Michael Jordan',
            'Kareem Abdul-Jabaar',
            'Lebron James',
            'Magic Johnson',
            'Wilt Chamberlain'
        ],
        files: [
            'jordan.html',
            'kareem.html',
            'lebron.html',
            'magic.html',
            'wilt.html'
        ]
    }
    sports[1] = {
        name: 'nhl',
        players: [
            'Gordie Howe',
            'Wayne Gretzky',
            'Mario Lemieux',
            'Bobby Orr',
            'Maurice Richard'
        ],
        files: [
            'gordie.html',
            'gretzky.html',
            'mario.html',
            'orr.html',
            'rocket.html',
            'russel.html'
        ]
    }

    sports[2] = {
        name: 'pga',
        players: [
            'Jack Nicklaus',
            'Tiger Woods'
        ],
        files: [
            'jack.html',
            'tiger.html'
        ]
    }


var backdrop = document.querySelector('.backdrop');
// console.dir(backdrop);
// backdrop.style.display = 'block';
var selectPlanButton = document.querySelectorAll('.plan button');
// console.dir(selectPlanButton);
var modal = document.querySelector('.modal');
var selectNegativeButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var mobilePlayers = document.querySelector('.mobile-players')
var mainItems = document.querySelector('.main-items')

sports.forEach(function (sport, index) {
    var mainItem = newElement('li', 'main-item dropdown', null, mainItems)
    var title = newElement('a', 'dropbtn', sport.name.toUpperCase(), mainItem)

    var originHref = location.origin + '/' + sports[index].name
    title.href = originHref + '/index.html'

    var dropContent = newElement('div', 'dropdown-content', null, mainItem)
    var home = newElement('a', 'home-drop', null, dropContent)
    home.href = originHref + '/index.html'
    var und = newElement('u', null, 'Home', home)

    sport.players.forEach(function(player, index1) {
        var nextFile = newElement('a', null, player, dropContent)
        nextFile.href = originHref + '/players/' + sport.files[index1]
    })

})


for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; //This will overwrite the class
        modal.classList.add('open');
        backdrop.classList.add('open');

    });
}
if (selectNegativeButton) {
    selectNegativeButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    mobilePlayers.classList.remove('open');
    closeModal();
});

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    mobilePlayers.classList.add('open');
})

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

var mobileItems = document.querySelector('.mobile-nav__items')
sports.forEach(function (sport, index) {

    var mobileItem = newElement('li', 'mobile-nav__item', null, mobileItems)
    var sportName = newElement('a', null, sport.name.toUpperCase(), mobileItem)
    sportName.addEventListener('click', function (e) {
        // debugger
        var deleteLinks = mobilePlayers.querySelectorAll('a')
        var mobileItem = mobileItems.querySelectorAll('a')
        

        for (var i = 0; i < deleteLinks.length; i++) {
            mobilePlayers.removeChild(deleteLinks[i])
           
        }
        
        for (var i = 0; i < mobileItem.length; i++) {
            mobileItem[i].id = null
        }
        e.target.id = 'mobile-click'
        sports.forEach(function (sport, index) {
            
          
            if (e.target.textContent === sport.name.toUpperCase()) {
    
                var originHref = location.origin + '/' + sports[index].name
                var home = newElement('a', 'home-drop', 'Home', mobilePlayers)
                home.href = originHref + '/index.html'
                sport.players.forEach(function (player, index1) {
                    var nextFile = newElement('a', 'mobile-player', player, mobilePlayers)
                    nextFile.href = originHref + '/players/' + sport.files[index1]
                })
            }
        })
        
    })
    // debugger
    if (location.pathname.includes(sport.name)) {
        sportName.id= 'mobile-click'
        var originHref = location.origin + '/' + sports[index].name
        var home = newElement('a', 'home-drop', 'Home', mobilePlayers)
        home.href = originHref + '/index.html'
        sport.players.forEach(function (player, index1) {
            var nextFile = newElement('a', 'mobile-player', player, mobilePlayers)
            nextFile.href = originHref + '/players/' + sport.files[index1]
        })
    }

})




var goat = document.querySelector('.goat')
goat.addEventListener('click', function(e) {
    window.location.href = location.origin + '/home.html'
})

