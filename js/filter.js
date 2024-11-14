const categoryFilter = document.getElementById('category-filter');
const subcategoryFilter = document.getElementById('subcategory-filter');

// Subcategories based on categories
const subcategories = {
    蛋糕: ['4寸蛋糕', '5寸蛋糕', '6寸蛋糕', '自訂尺寸'],
    件裝甜點: ['曲奇', '紙杯蛋糕','冬甩','法式千層酥'],
    派對蛋糕系列: ['公仔造型蛋糕', '旋轉蛋糕','燃燒蛋糕','慶祝蛋糕','鮮花蛋糕','散水餅'],
};

function updateSubcategories() {
    const selectedCategory = categoryFilter.value;

    // Clear previous options
    subcategoryFilter.innerHTML = '<option value="all">選擇甜點類別:</option>';

    if (selectedCategory !== 'all') {
        subcategories[selectedCategory].forEach(subcat => {
            const option = document.createElement('option');
            option.value = subcat;
            option.textContent = `${subcat}`;
            subcategoryFilter.appendChild(option);
        });
    }
    
    // Reset the product filter
    filterProducts();
}

function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedSubcategory = subcategoryFilter.value;

    const tiles = document.querySelectorAll('.card-group .card');

    tiles.forEach(tile => {
        const matchesCategory = selectedCategory === 'all' || tile.classList.contains(selectedCategory);
        const matchesSubcategory = selectedSubcategory === 'all' || tile.classList.contains(selectedSubcategory);

        if (matchesCategory && matchesSubcategory) {
            tile.style.display = 'block'; // Show item
        } else {
            tile.style.display = 'none'; // Hide item
        }
    });
}

categoryFilter.addEventListener('change', () => {
    updateSubcategories();
});

subcategoryFilter.addEventListener('change', filterProducts);