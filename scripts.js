window.onload = () => {
    mapLinks();
}

const Links = [
    {
        title: 'Week 04 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week04Readings.html'
    },
    {
        title: 'Week 05 Readings',
        link: 'https://robertjonez7.github.io/WDD-300/Week05Readings.html'
    }
]

const mapLinks = () => {
    document.getElementById('container').innerHTML = Links.map(val =>
        `<div class="box"><a href=${val.link}>${val.title}</a></div>`).join('')
}



