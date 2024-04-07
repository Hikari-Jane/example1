/*商品スライド↓*/
const slide = document.querySelector('#slide');
const slide2 = document.querySelector('#slide2');

const slides = ["images/sample1.jpg", "images/sample2.jpg", "images/sample3.jpg"];
const slides2 = ["images/sample4.jpg", "images/sample5.jpg", "images/sample6.jpg"];

let i = -1;
changeSlide();
function changeSlide() {
    i++;
    if (i == slides.length) i = 0;
    slide.src = slides[i];
    setTimeout("changeSlide()", 4000);
};

let l = -1;
changeSlide2();
function changeSlide2() {
    l++;
    if (l == slides2.length) l = 0;
    slide2.src = slides2[l];
    setTimeout("changeSlide2()", 4000);
};
/*商品スライド↑*/

/*新商品↓*/
const newItem = document.querySelector('#new_item');

const item1 = {
    img:'item1.jpg',
    name:'商品名1',
    price:'値段',
    category:'カテゴリー',
};
const item2 = {
    img:'item2.jpg',
    name:'商品名2',
    price:'値段',
    category:'カテゴリー',
};
const item3 = {
    img:'item1.jpg',
    name:'商品名3',
    price:'値段',
    category:'カテゴリー',
};
const item4 = {
    img:'item2.jpg',
    name:'商品名4',
    price:'値段',
    category:'カテゴリー',
};
const item5 = {
    img:'item1.jpg',
    name:'商品名5',
    price:'値段',
    category:'カテゴリー',
};
const item6 = {
    img:'item2.jpg',
    name:'商品名6',
    price:'値段',
    category:'カテゴリー',
};
const item7 = {
    img:'item1.jpg',
    name:'商品名7',
    price:'値段',
    category:'カテゴリー',
};
const item8 = {
    img:'item2.jpg',
    name:'商品名8',
    price:'値段',
    category:'カテゴリー',
};

const newItemList = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
]

for (let i=0; i<newItemList.length; i++) {
    const {img, name, price, category} = newItemList[i];
    const content = `<div class="items"><img class="item" src="images/${img}" alt="${name}"><p>${name}</p><p>${price}</p><p>${category}</p></div>`;
    
    newItem.insertAdjacentHTML('beforeend', content);
};

/*新商品↑*/

/*ランキング↓*/
const ranking = document.querySelector('#ranking');

const item9 = {
    img2:'item3.jpg',
    name2:'商品名9',
    price2:'値段',
    category2:'カテゴリー',
}

const item10 = {
    img2:'item4.jpg',
    name2:'商品名10',
    price2:'値段',
    category2:'カテゴリー',
}

const item11 ={
    img2:'item3.jpg',
    name2:'商品名11',
    price2:'値段',
    category2:'カテゴリー',
}

const item12 ={
    img2:'item4.jpg',
    name2:'商品名12',
    price2:'値段',
    category2:'カテゴリー',
}

const item13 ={
    img2:'item3.jpg',
    name2:'商品名13',
    price2:'値段',
    category2:'カテゴリー',
}

const item14 ={
    img2:'item4.jpg',
    name2:'商品名14',
    price2:'値段',
    category2:'カテゴリー',
}

const item15 ={
    img2:'item3.jpg',
    name2:'商品名15',
    price2:'値段',
    category2:'カテゴリー',
}

const item16 ={
    img2:'item4.jpg',
    name2:'商品名16',
    price2:'値段',
    category2:'カテゴリー',
}

const rankingList = [
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
    item15,
    item16,
]

for (let l=0; l<rankingList.length; l++) {
    const {img2, name2, price2, category2} = rankingList[l];
    const content2 = `<div><img class="item" src="images/${img2}" alt="${name2}"><p>${name2}</p><p>${price2}</p><p>${category2}</p></div>`;
    
    ranking.insertAdjacentHTML('beforeend', content2);
}

/*ランキング↑*/

/*おすすめ↓*/
const recommend = document.querySelector('#recommend');

const item17 = {
    img3:'item5.jpg',
    name3:'商品名17',
    price3:'値段',
    category3:'カテゴリー',
}
const item18 = {
    img3:'item6.jpg',
    name3:'商品名18',
    price3:'値段',
    category3:'カテゴリー',
}
const item19 = {
    img3:'item5.jpg',
    name3:'商品名19',
    price3:'値段',
    category3:'カテゴリー',
}
const item20 = {
    img3:'item6.jpg',
    name3:'商品名20',
    price3:'値段',
    category3:'カテゴリー',
}
const item21 = {
    img3:'item5.jpg',
    name3:'商品名21',
    price3:'値段',
    category3:'カテゴリー',
}
const item22 = {
    img3:'item6.jpg',
    name3:'商品名22',
    price3:'値段',
    category3:'カテゴリー',
}
const item23 = {
    img3:'item5.jpg',
    name3:'商品名23',
    price3:'値段',
    category3:'カテゴリー',
}
const item24 = {
    img3:'item6.jpg',
    name3:'商品名24',
    price3:'値段',
    category3:'カテゴリー',
}

const recommendList = [
    item17,
    item18,
    item19,
    item20,
    item21,
    item22,
    item23,
    item24,
]

for (let m=0; m<recommendList.length; m++) {
    const {img3, name3, price3, category3} = recommendList[m];
    const content3 = `<div><img class="item" src="images/${img3}" alt="${name3}"><p>${name3}</p><p>${price3}</p><p>${category3}</p></div>`;
    
    recommend.insertAdjacentHTML('beforeend', content3);
}
/*おすすめ↑*/

/*サイドメニュー↓*/
const menuBtn = document.querySelector('#menu_btn');
const menuPanel = document.querySelector('#menu');
const closeBtn = document.querySelector('#close_btn');

menuBtn.addEventListener('click', () => {
    menuPanel.animate(
        {translate: ['-200px 0', 0],}, 
        {duration: 2000,
         easing: 'ease',
         fill: 'forwards',
        });
    menuBtn.animate(
        {visibility: 'hidden'},
        {duration: 500,
         fill: 'forwards',
        });
});

closeBtn.addEventListener('click', () => {
    menuPanel.animate(
        {translate: [0, '-200px 0'],}, 
        {duration: 2000,
         easing: 'ease',
         fill: 'forwards',
        });
    menuBtn.animate(
        {visibility: 'visible'},
        {duration: 500,
         fill: 'forwards',
        });
});
/*サイドメニュー↑*/

/*検索ボックス↓*/
const searchBox = document.querySelector('#search_box');
const searchBtn = document.querySelector('#search');

document.addEventListener('click', (e) => {
    if (!e.target.closest('#search')) {
        console.log('外側クリック');
        searchBox.classList.add('toggle');
    }
    else {
        console.log('内側クリック');
        searchBox.classList.remove('toggle');
    }
});
/*検索ボックス↑*/