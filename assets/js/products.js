// Данные товаров
const products = [
    {
        id: 1,
        name: "Orbital Lamp",
        desc: "Подвесной дизайнерский светильник",
        price: "12900",
        image: "https://avatars.mds.yandex.net/get-mpic/15389086/2a00000198eac8027386578e4e1cfe560ed9/orig"
    },
    {
        id: 2,
        name: "Nexus Table Lamp",
        desc: "Настольная лампа с сенсорным управлением",
        price: "8900",
        image: "https://ir.ozone.ru/s3/multimedia-1-t/w1200/7017732353.jpg"
    },
    {
        id: 3,
        name: "Aura Floor Lamp",
        desc: "Высокий торшер с мягким светом",
        price: "15900",
        image: "https://avatars.mds.yandex.net/get-mpic/16441222/2a0000019744f669e451802b79a3391adc13/orig"
    },
    {
        id: 4,
        name: "Eclipse Wall Light",
        desc: "Настенный светильник минимализм",
        price: "6700",
        image: "https://dc-electro.ru/upload/iblock/cf9/alt2kghqyf3npm899j7hm7dwx2u2ew5c.jpg"
    },
    {
        id: 5,
        name: "Pulse LED Strip",
        desc: "Умная светодиодная лента",
        price: "4500",
        image: "https://image.made-in-china.com/2f0j00nzhMOYdECPbt/Hot-Sell-COB-Lights-COB-LED-Strip-RGBW-COB-LED-Strip-Light-24V-12V-High-Density-LED.webp"
    },
    {
        id: 6,
        name: "Nova Pendant",
        desc: "Потолочный подвесной светильник",
        price: "11200",
        image: "https://i.pinimg.com/originals/84/9e/0f/849e0f056ec0d9618484908307e480c7.jpg"
    },
    {
        id: 7,
        name: "Lumina Sphere",
        desc: "Сферический декоративный светильник",
        price: "7900",
        image: "https://www.centersvet.ru/media/uploads/svetilnik/wall_sphera/wall_encanto_black_background_120525.jpg"
    },
    {
        id: 8,
        name: "Horizon Desk Lamp",
        desc: "Рабочая настольная лампа",
        price: "9500",
        image: "https://avatars.mds.yandex.net/get-mpic/5253116/2a00000195f42b28b687c4b3a3ae5413418d/orig"
    }
];
// Рендер карточек
function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-price">${product.price} ₽</div>
                <button class="add-to-cart" data-id="${product.id}">В корзину</button>
            </div>
        </div>
    `).join('');
}

// Обработчик добавления в корзину
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const id = e.target.dataset.id;
        const name = products.find(p => p.id == id)?.name;
        alert(`✅ ${name} добавлен в корзину!`);
    }
});