window.onload = () => {
    mapLinks();
}

const Links = [
    {
        title: 'Week 01 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week01Readings.html'
    },
    {
        title: 'Week 02 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week02Readings.html'
    },
    {
        title: 'Week 03 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week03Readings.html'
    },
    {
        title: 'Week 04 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week04Readings.html'
    },
    {
        title: 'Week 05 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week05Readings.html'
    },
    {
        title: 'Week 07 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week07Readings.html'
    },
    {
        title: 'To Do App',
        link: 'https://robertjonez7.github.io/WDD-330/ToDo/index.html'
    },
    {
        title: 'Week 08 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week08Readings.html'
    },
    {
        title: 'Week 09 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week09Readings.html'
    },
    {
        title: 'Week 10 Readings',
        link: 'https://robertjonez7.github.io/WDD-330/Week10Readings.html'
    },
]

const mapLinks = () => {
    document.getElementById('container').innerHTML = Links.map(val =>
        `<div class="box"><a href=${val.link}>${val.title}</a></div>`).join('')
}


