let tabsTitle = document.querySelectorAll('.feature-menu-item')
    // console.log(tabsTitle)
tabsTitle.forEach(element => {
    element.addEventListener('click', function() {
        // let curTab = document.querySelector('.feature-slide-box[data-content="' + this.dataset.id + '"]')
        // console.log(curTab)
        let curTab1 = document.querySelectorAll('.feature-slide-box[data-content="' + this.dataset.id + '"]')
        curTab1.forEach(e => {
            if (e.classList.contains('open')) {
                e.classList.remove('open')
            } else {
                e.classList.add('open')
            }
        })

        if (document.querySelector('.feature-menu-item.active') !== null) {
            document.querySelector('.feature-menu-item.active').classList.remove('active')
            document.querySelector('.feature-slide-box.open').classList.remove('open')

        }
        // let item = document.querySelectorAll('.feature-slide-box.open')
        // item.forEach(el => {
        //         if (el.classList.contains('open')) {
        //             el.classList.remove('open')
        //         }
        //     })
        // .classList.remove('active')
        // item.classList.add('active')

        this.classList.add('active')
            // curTab1.classList.add('open')
    })
})