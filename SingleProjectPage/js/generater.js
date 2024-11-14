// Array of product objects
const products = [
    {
        title: "紫羅蘭花卉蛋糕",
        description: "紫色花卉點綴，搭配細膩的奶油，讓這款蛋糕充滿優雅與芬芳。入口即化的口感，適合享受午後時光的美好甜點。",
        price: "$200",
        image: "/images/Cake/FlowerCake/FlowerCake_3.png",
        link: "./2.html"
    },
    {
        title: "紅玫瑰花卉蛋糕",
        description: "紅玫瑰的華麗裝飾，結合濃郁巧克力，完美表現愛與浪漫。層層疊疊的蛋糕體，帶來奢華的享受，適合特別的慶祝時刻。",
        price: "$220",
        image: "/images/Cake/FlowerCake/FlowerCake_2.png",
        link: "./3.html"
    },
    {
        title: "白蘭花卉蛋糕",
        description: "純白花卉設計象徵純潔與高雅，入口即化的口感令人回味。細緻的奶油與柔軟的蛋糕體，完美融合，帶來無與倫比的味覺享受。",
        price: "$220",
        image: "/images/Cake/FlowerCake/FlowerCake_1.png",
        link: "./4.html"
    },
    {
        title: "美樂蒂與庫洛米曲奇",
        description: "這款曲奇融合了美樂蒂與庫洛米的可愛造型，香甜酥脆，帶來童趣與美味的雙重享受，每一口都讓人愛不釋手。",
        price: "$120",
        image: "/images/Cookies/Cookies_2.png",
        link: "../Single/cookies/1.html"
    }
];

// Function to generate product cards
function generateProductCards() {
    const cardGroup = document.getElementById('card-group');

    products.forEach(product => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'card';

        // Create anchor element
        const anchor = document.createElement('a');
        anchor.href = product.link;

        // Create image element
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.className = 'card-image';

        // Create content div
        const content = document.createElement('div');
        content.className = 'card-content';

        // Create title element
        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = product.title;

        // Create text element
        const text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = product.description;

        // Create price element
        const price = document.createElement('h3');
        price.className = 'card-price';
        price.textContent = product.price;

        // Append elements to content
        content.appendChild(title);
        content.appendChild(text);
        content.appendChild(price);

        // Append image and content to anchor
        anchor.appendChild(img);
        anchor.appendChild(content);

        // Append anchor to card
        card.appendChild(anchor);

        // Append card to card group
        cardGroup.appendChild(card);
    });
}

// Call the function to generate cards on page load
document.addEventListener('DOMContentLoaded', generateProductCards);