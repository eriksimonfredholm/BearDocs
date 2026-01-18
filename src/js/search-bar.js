const searchbar = () => {

    const escKey = document.querySelector('.esc-key')
    const overlaySearchBar = document.querySelector('.overlay-search-box')
    const allContent = document.querySelector('.all-content')
    const searchBox = document.querySelector('.search-box')
    const searchButton = document.querySelector('.search-button')

    const modalOpen = () => {
        searchBox.classList.remove('hidden')
        overlaySearchBar.classList.remove('hidden')
        allContent.classList.add('fixed')
    }

    const modalClose = () => {
        console.log('click')
        searchBox.classList.add('hidden')
        overlaySearchBar.classList.add('hidden')
        allContent.classList.remove('fixed')
    }

    const keyboardListener = (event) => {
        console.log(event)
        
        if ( event.key ) {
            if ( event.key == "k" && ( event.metaKey || event.ctrlKey )) {
                modalOpen()
            } 

            if ( event.key && event.key == 'Escape' ) {
                modalClose()
            } 
                
            else {
                return
            }
        }
    }

    // document.addEventListener('keydown', keyboardListener)
    overlaySearchBar.addEventListener('click', modalClose)
    searchButton.addEventListener('click', modalOpen)
    escKey.addEventListener('click', modalClose)
    document.addEventListener('keydown', keyboardListener)
}

searchbar()