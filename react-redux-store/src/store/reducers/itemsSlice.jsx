import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    itemList: [
      {
        id: 1,
        title: "Some iteme",
        discription:
          "Черная кепка BMW Motorsport с 3D-принтом BMW Motorsport спереди и вышитым логотипом Puma Cat сзади. Размер: один размер, регулируемый.",
        imageURL: "https://corp.wtcmoscow.ru/upload/iblock/2ac/111455903_m.jpg",
      },
      {
        id: 2,
        title: "Стильный рюкзак, из эко кожи, серый",
        discription:
          "Рюкзак предназначен для повседневного использования, командировок, поездок, путешествий, занятий спортом. Подходит для повседневного стиля одежды. Очень вместительный, большой рюкзак. Поместятся все необходимые вещи. Очень популярная модель рюкзак, многолетний лидер продаж, проверенная и надежная конструкция.",
        imageURL:
          "https://cdn-ru.bitrix24.ru/b19145330/iblock/dfd/dfd302a331ec3178f15943e0367477ec/131.jpg",
      },
      {
        id: 3,
        title: "Стильный рюкзак, из эко кожи, серый",
        discription:
          "Рюкзак предназначен для повседневного использования, командировок, поездок, путешествий, занятий спортом. Подходит для повседневного стиля одежды. Очень вместительный, большой рюкзак. Поместятся все необходимые вещи. Очень популярная модель рюкзак, многолетний лидер продаж, проверенная и надежная конструкция.",
        imageURL:
          "https://cdn-ru.bitrix24.ru/b19145330/iblock/dfd/dfd302a331ec3178f15943e0367477ec/131.jpg",
      },
    ],
    cartList: [],
  },
  reducers: {
    addedToCart(state, actions) {
      state.cartList.push(actions.payload);
    },
  },
});

export default itemSlice.reducer;
export const { addedToCart } = itemSlice.actions;
