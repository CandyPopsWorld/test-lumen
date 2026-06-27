// Ideas data
const ideas = [
    {
        id: 1,
        title: "Тёплый минимализм",
        desc: "Как мягкий свет создаёт уют в современной квартире",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        link: "#"
    },
    {
        id: 2,
        title: "Ночной офис",
        desc: "Рабочая атмосфера с акцентным освещением",
        image: "https://i.pinimg.com/originals/e8/0c/26/e80c263ce3ff7104dac6b2538ede382b.jpg?nii=t",
        link: "#"
    },
    {
        id: 3,
        title: "Скандинавский уголок",
        desc: "Светлые тона + функциональные лампы",
        image: "https://basket-26.wbbasket.ru/vol4851/part485117/485117625/images/big/1.webp",
        link: "#"
    },
    {
        id: 4,
        title: "Космическая спальня",
        desc: "Тёмная гамма и мягкая подсветка",
        image: "https://avatars.mds.yandex.net/i?id=4a092f2e5425ef47c705757f620ec847c4da6aa7-4593263-images-thumbs&n=13",
        link: "#"
    },
    {
        id: 5,
        title: "Гостиная с акцентом",
        desc: "Как один светильник меняет всё пространство",
        image: "https://cdn.basicdecor.ru/files/media/app_pictures/fd2/272531/original/gostinaya-foto-11.jpg",
        link: "#"
    }
];

// Render ideas
function renderIdeas() {
    const container = document.getElementById('ideas-grid');
    if (!container) return;

    container.innerHTML = ideas.map(idea => `
        <div class="idea-card">
            <div class="idea-image">
                <img src="${idea.image}" alt="${idea.title}">
            </div>
            <div class="idea-content">
                <h3 class="idea-title">${idea.title}</h3>
                <p class="idea-desc">${idea.desc}</p>
                <a href="${idea.link}" class="idea-link">
                    Смотреть пример →
                </a>
            </div>
        </div>
    `).join('');
}

// Auto load when script is included
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderIdeas);
} else {
    renderIdeas();
}