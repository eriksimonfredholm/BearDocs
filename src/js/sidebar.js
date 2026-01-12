const sidebar = () => {

    const sidebar = document.querySelector('.sidebar')
    const overlay = document.querySelector('.overlay')
    const sidebarButton = document.querySelector('.sidebar-button')

    const openCloseSidebar = () => {
        console.log('click')
        sidebar.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
    }

    // const closeSidebar = () => {
    //     sidebar.classList.add("hidden")
    //     overlay.classList.add("hidden")
    // }

    // sidebarButton.addEventListener('click', closeSidebar())
    sidebarButton.addEventListener('click', openCloseSidebar)

}



sidebar()