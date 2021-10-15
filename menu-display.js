const menu = [
    {
        id: 1,
        title: "Butter Bread",
        category: "breakfast",
        price: 20.0,
        img: "./images/img_3.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident",
    },
    {
        id: 2,
        title: "Fufu & Soup",
        category: "supper",
        price: 20.0,
        img: "./images/img_5.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationtio",
    },
    {
        id: 3,
        title: "Gari & Beans",
        category: "lunch",
        price: 20.0,
        img: "./images/img_6.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationeo?",
    },
    {
        id: 4,
        title: "Fried Rice",
        category: "lunch",
        price: 20.0,
        img: "./images/menu_1.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem",
    },
    {
        id: 5,
        title: "Coca cola & Bread",
        category: "dessert",
        price: 20.0,
        img: "./images/menu_2.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationemo?",
    },
    {
        id: 6,
        title: "Local Shito",
        category: "breakfast",
        price: 20.0,
        img: "./images/img_3.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem",
    },
    {
        id: 7,
        title: "Biscuit",
        category: "dessert",
        price: 20.0,
        img: "./images/offer_1.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitatione?",
    },
    {
        id: 8,
        title: "Pancake",
        category: "dessert",
        price: 20.0,
        img: "./images/offer_2.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitatione?",
    },
    {
        id: 9,
        title: "Rice & Stew",
        category: "breakfast",
        price: 20.0,
        img: "./images/offer_3.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitation?",
    },
    {
        id: 10,
        title: "Banku & Okro",
        category: "supper",
        price: 20.0,
        img: "./images/pexels-leigh-patrick-298217.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem?",
    },
    {
        id: 11,
        title: "Ginger Bread",
        category: "breakfast",
        price: 20.0,
        img: "./images/pexels-rachel-claire-5490919.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aper?",
    },
    {
        id: 12,
        title: "Jollof rice",
        category: "supper",
        price: 20.0,
        img: "./images/post-1.jpg",
        desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitationem provident ipsam perspiciatis laborum aperiam quod perferendis quae distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos exercitati?",
    }
];

const displayArea = document.querySelector('.food-info');
const navButtons = document.querySelector('.nav-btns');

window.addEventListener('DOMContentLoaded', ()=> {
    // CALLING THE DISPLAY MENU FUNCTION
    displayMenu(menu);

    // USING THE REDUCE METHOD TO FILTER THE CATEGORIES, THIS MAKES SURE THAT IT RETURNS ARRAY OF UNIQUE CATEGORIES.
    const showCat = menu.reduce((values, items)=> {
        if(!values.includes(items.category)) {
            values.push(items.category);
        }
        return values;
    },['all']);
    // CALLING THE DISPLAY BUTTON CATEGORY FUNCTION AND PASSING IN THE RETURNED ARRAY OF AVAILABLE CATEGORIES CONTAINED SHOWCAT
    displayCategoryBtn(showCat);
});

// FUNCTION TO DYNAMICALLY DISPLAY THE CATEGORY BUTTONS UPON AVAILABLE CATEGORIES
displayCategoryBtn = (availableBtn)=> {
    let collect = availableBtn.map(btn=> {
        return `<button data-id="${btn}"> ${btn} </button>`;
    });
    collect = collect.join('');
    navButtons.innerHTML = collect;

    // SELECTING ALL THE BUTTONS AFTER DYNAMICALLY ADDING THEM TO THE DOM
    const filterBtns = document.querySelectorAll('button');

    // FILTERING THE MENU USING THE BUTTONS
    filterBtns.forEach((btn)=> {
        btn.addEventListener('click', (e)=> {
            // GETTING SPECIFIC CATEGORY FROM THE BUTTON CLICKED
            let category = e.currentTarget.dataset.id;
            console.log(category);  
            // USING THE FILTER METHOD TO GRAB AND CREATE NEW ARRAY WITH CATEGORY THE SAME AS SPECIFIED 
            const menuCat = menu.filter((menuItems)=> {
                if (menuItems.category === category) {
                    return menuItems;
                };
            });
            if (category === 'all') {
                displayMenu(menu);
            }
            else{
                displayMenu(menuCat);
            }
        });
    
    });
};

// FUNCTION THAT WILL DISPLAY THE MENU LIST TO THE SCREEN
displayMenu = (menuList) => {
    // LOOPING OVER THE ARRAY USING THE MAP METHOD
    let displayMenu = menuList.map(item=> {
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

    // USING THE JOIN METHOD TO GET RID OF THE COMMAS(,) IN ORDER TO RETURN THE TEMPLATE WITHOUT ANY COMMAS
    displayMenu = displayMenu.join('');

    // INSERTING THE RETURNED HTML TEMPLATE INSIDE THE ACTUAL BODY PREFERRED
    displayArea.innerHTML = displayMenu;
}