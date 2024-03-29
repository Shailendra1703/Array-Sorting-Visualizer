
var checkbox = document.querySelector('input[name=theme]');

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 500)
}
checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        document.querySelector('#title').style.color = '#000'
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        document.querySelector('#title').style.color = '#fff'
    }
})
