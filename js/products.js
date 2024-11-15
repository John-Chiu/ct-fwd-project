const products = [
  {
    id: 1,
    englishName: 'BurnAwayCake',
    chineseName: '藍莓花卉蛋糕',
    desc: '這款蛋糕以藍莓裝飾，清新宜人的色調，帶來自然的甜美。鬆軟的蛋糕體與細膩的奶油完美結合，每一口都充滿愉悅與滿足。',
    price: 480,
    imagePath: '/images/Cake/FlowerCake/FlowerCake_7.png',
    filePath: '/SingleProjectPage/Cake/1.html'
  },
  {
    id: 2,
    englishName: 'FlowerCake',
    chineseName: '紫羅蘭花卉蛋糕',
    desc: '紫色花卉點綴，搭配細膩的奶油，讓這款蛋糕充滿優雅與芬芳。入口即化的口感，適合享受午後時光的美好甜點。',
    price: 650,
    imagePath: '/images/Cake/FlowerCake/FlowerCake_3.png',
    filePath: '/SingleProjectPage/Cake/2.html'
  },
  {
    id: 3,
    englishName: 'RotatingCake',
    chineseName: '紅玫瑰花卉蛋糕',
    desc: '紅玫瑰的華麗裝飾，結合濃郁巧克力，完美表現愛與浪漫。層層疊疊的蛋糕體，帶來奢華的享受，適合特別的慶祝時刻。',
    price: 980,
    imagePath: '/images/Cake/FlowerCake/FlowerCake_2.png',
    filePath: '/SingleProjectPage/Cake/3.html'
  },
  {
    id: 4,
    englishName: 'FondantCake',
    chineseName: '白蘭花卉蛋糕',
    desc: '純白花卉設計象徵純潔與高雅，入口即化的口感令人回味。細緻的奶油與柔軟的蛋糕體，完美融合，帶來無與倫比的味覺享受。',
    price: 650,
    imagePath: '/images/Cake/FlowerCake/FlowerCake_1.png',
    filePath: '/SingleProjectPage/Cake/4.html'
  },
  {
    id: 5,
    englishName: '',
    chineseName: '燃燒蛋糕',
    desc: '這款蛋糕以獨特的燃燒效果呈現，讓您的派對瞬間變得火熱，是展現激情的完美甜點。',
    price: 300,
    imagePath: '/images/BurnAwayCake/BurnAwayCake_2.png',
    filePath: '/SingleProjectPage/Celebrating/BurnCake/1.html'
  },
  {
    id: 6,
    englishName: '',
    chineseName: '公仔造型蛋糕',
    desc: '這款蛋糕以精緻的公仔造型呈現，獨特的設計讓每個慶祝活動更加精彩，是小朋友生日派對的最佳選擇。',
    price: 250,
    imagePath: '/images/Cake/FondantCake/FondantCake_7.png',
    filePath: '/SingleProjectPage/Celebrating/DollCake/1.html'
  },
  {
    id: 7,
    englishName: '',
    chineseName: '散水餅',
    desc: '傳統的散水餅，象徵祝福與分享，口感香甜，適合用於傳統節慶或特別的家庭聚會。',
    price: 120,
    imagePath: '/images/Cookies/Cookies_8.png',
    filePath: '/SingleProjectPage/Celebrating/EndCookies/1.html'
  },
  {
    id: 8,
    englishName: '',
    chineseName: '鮮花蛋糕',
    desc: '專為各種慶祝活動設計的蛋糕，外觀華麗，口感豐富，為您的特別時刻增添甜蜜與喜悅。',
    price: 270,
    imagePath: '/images/CelebratingCake/Wedding/CelebratingCake_Wedding_2.png',
    filePath: '/SingleProjectPage/Celebrating/FlowerCake/1.html'
  },
  {
    id: 9,
    englishName: '',
    chineseName: '慶祝蛋糕',
    desc: '專為各種慶祝活動設計的蛋糕，外觀華麗，口感豐富，為您的特別時刻增添甜蜜與喜悅。',
    price: 250,
    imagePath: '/images/CelebratingCake/Birthday/CelebratingCake_3.png',
    filePath: '/SingleProjectPage/Celebrating/PartyCake/1.html'
  },
  {
    id: 10,
    englishName: '',
    chineseName: '旋轉蛋糕',
    desc: '旋轉蛋糕帶來視覺上的驚豔效果，搭配美味的多層口感，讓您的慶祝時刻充滿驚喜與歡樂。',
    price: 250,
    imagePath: '/images/RotatingCake/RotatingCake_2.png',
    filePath: '/SingleProjectPage/Celebrating/RotateCake/1.html'
  },
  {
    id: 11,
    englishName: '',
    chineseName: '藍色甜甜圈',
    desc: '這款甜甜圈以鮮豔的藍色糖霜覆蓋，外觀吸引，口感鬆軟，帶來清新的甜味，是視覺與味覺的雙重享受。',
    price: 100,
    imagePath: '/images/DounghNut/DounghNut_1.png',
    filePath: '/SingleProjectPage/Single/Big-o/1.html'
  },
  {
    id: 12,
    englishName: '',
    chineseName: '美樂蒂與庫洛米曲奇',
    desc: '這款曲奇融合了美樂蒂與庫洛米的可愛造型，香甜酥脆，帶來童趣與美味的雙重享受，每一口都讓人愛不釋手。',
    price: 120,
    imagePath: '/images/Cookies/Cookies_2.png',
    filePath: '/SingleProjectPage/Single/cookies/1.html'
  },
  {
    id: 13,
    englishName: '',
    chineseName: '美樂蒂與庫洛米杯子蛋糕',
    desc: '這款杯子蛋糕以美樂蒂與庫洛米的可愛造型為特色，色彩繽紛，口感柔軟，讓每一口都充滿歡樂與甜美。',
    price: 75,
    imagePath: '/images/Cupcake/Cupcake_set_4.png',
    filePath: '/SingleProjectPage/Single/cupcake/1.html'
  },
  {
    id: 14,
    englishName: '',
    chineseName: '水果千層酥',
    desc: '層層酥脆的千層酥夾著新鮮水果與濃郁奶油，每一口都是豐富的口感與清新的果香，完美融合。',
    price: 125,
    imagePath: '/images/MilleFeuille/MilleFeuille_1.png',
    filePath: '/SingleProjectPage/Single/MilleFeuille/1.html'
  },
];
export default products;
