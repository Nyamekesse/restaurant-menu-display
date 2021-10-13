const menu = [
    {
        id: 1,
        title: "Local Shito",
        category: "Breakfast",
        price: 20.0,
        img: "./images/img_3.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident",
    },
    {
        id: 2,
        title: "Fufu & Soup",
        category: "Supper",
        price: 20.0,
        img: "./images/img_5.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationtio",
    },
    {
        id: 3,
        title: "Gari & Beans",
        category: "Lunch",
        price: 20.0,
        img: "./images/img_6.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationeo?",
    },
    {
        id: 4,
        title: "Fried Rice",
        category: "Lunch",
        price: 20.0,
        img: "./images/menu_1.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem",
    },
    {
        id: 5,
        title: "Coca cola & Bread",
        category: "Breakfast",
        price: 20.0,
        img: "./images/menu_2.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationemo?",
    },
    {
        id: 6,
        title: "Local Shito",
        category: "Breakfast",
        price: 20.0,
        img: "./images/img_3.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem",
    },
    {
        id: 7,
        title: "Biscuit",
        category: "Breakfast",
        price: 20.0,
        img: "./images/offer_1.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitatione?",
    },
    {
        id: 8,
        title: "Pancake",
        category: "Desert",
        price: 20.0,
        img: "./images/offer_2.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitatione?",
    },
    {
        id: 9,
        title: "Rice & Stew",
        category: "Breakfast",
        price: 20.0,
        img: "./images/offer_3.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitation?",
    },
    {
        id: 10,
        title: "Banku & Okro",
        category: "Supper",
        price: 20.0,
        img: "./images/pexels-leigh-patrick-298217.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem?",
    },
    {
        id: 11,
        title: "Ginger Bread",
        category: "Breakfast",
        price: 20.0,
        img: "./images/pexels-rachel-claire-5490919.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aper?",
    },
    {
        id: 12,
        title: "Jollof",
        category: "Breakfast",
        price: 20.0,
        img: "./images/post-1.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitati?",
    },
]
const displayArea = document.querySelector('.food-info');


window.addEventListener('DOMContentLoaded', ()=> {

    // LOOPING OVER THE ARRAY USING THE MAP METHOD
    let displayMenu = menu.map( item=> {
        // RETURNING A TEMPLATE WITH EACH FIXED VARIABLES FROM THE LOOPED ARRAY
        return `
            <div class="info-box">
                <div class="food-image">
                    <img src= ${item.img} alt= ${item.img}>
                </div>
                <div class="food-details">
                    <div class="name-price">
                        <h4>${item.title}</h4>
                        <p>$${item.price}</p>
                    </div>
                    <div class="description">
                        <p>${item.desc}</p>
                    </div>
                </div>
            </div>
        `
    });

    // USING THE JOIN METHOD TO GET RID OF THE COMMAS IN ORDER TO RETURN THE TEMPLATE WITHOUT ANY COMMAS
    displayMenu = displayMenu.join('');
    console.log(displayMenu);

    // INSERTING THE RETURNED HTML TEMPLATE INSIDE THE ACTUAL BODY PREFERRED
    displayArea.innerHTML = displayMenu;
});