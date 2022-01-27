const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"gray"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"purple"
    },
    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "backGround":"green"
    },
    {
        "titel":"herfst",
        "image":"img/autumn.jpg",
        "backGround":"chocolate"
    },
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "backGround":"white"
    }
];

// let seizoen = {
//     "titel":"lente",
//     "image": "img/spring.jpg"
// };



function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}