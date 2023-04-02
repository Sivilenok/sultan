export enum ROUTE {
  HOME = "/",
  PRODUCT_CARD = "product-card",
  CATALOG = "catalog",
  BASKET = "basket",
  MAKE_ORDER = "make-order"
}

export const routes = [
  {
    to: ROUTE.HOME,
    text: "О компании",
  },
  {
    to: ROUTE.HOME,
    text: "Доставка и оплата",
  },
  {
    to: ROUTE.HOME,
    text: "Возврат",
  },
  {
    to: ROUTE.HOME,
    text: "Контакты",
  },
];


export const categories = [
  {
    to: ROUTE.HOME,
    text: "Бытовая химия",
  },
  {
    to: ROUTE.HOME,
    text: "Косметика и гигиена",
  },
  {
    to: ROUTE.HOME,
    text: "Товары для дома",
  },
  {
    to: ROUTE.HOME,
    text: "Товары для детей и мам",
  },
  {
    to: ROUTE.HOME,
    text: "Посуда",
  },
]
