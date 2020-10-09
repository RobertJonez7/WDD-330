window.onload = () => {
    mapLinks();
}

const Links = [
    {
        title: 'Week 04 Readings',
        link: '/Readings/Week04Readings.html'
    },
]

const mapLinks = () => {
    document.getElementById('container').innerHTML = Links.map(val =>
        `<div class="box"><a href=${val.link}>${val.title}</a></div>`)
}

