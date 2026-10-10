export type Dish = {
  name: string;
  description: string;
  category: string;
  price: string;
  image: string;
};

export const signatureDishes: Dish[] = [
  {
    name: "ÀDÙN Jollof",
    description:
      "Smoky Nigerian jollof rice finished with roasted peppers and delicate herbs.",
    category: "Signature",
    price: "₦8,500",
    image: "/images/dishes/dish-01.jpg",
  },
  {
    name: "Charred Suya",
    description:
      "Tender grilled beef, warm suya spice, onions, and a refined pepper relish.",
    category: "From the Grill",
    price: "₦12,500",
    image: "/images/dishes/dish-02.jpg",
  },
  {
    name: "Coconut Prawns",
    description:
      "Succulent prawns with coconut, citrus, and a subtle Nigerian pepper warmth.",
    category: "Sea & Shore",
    price: "₦14,000",
    image: "/images/dishes/dish-03.jpg",
  },
];

export const additionalDishes: Dish[] = [
  {
    name: "Ofada Rice & Ayamase",
    description:
      "Earthy ofada rice served with a rich, slow-cooked Ayamase sauce, green peppers, assorted meats and boiled egg.",
    category: "Signature",
    price: "₦11,500",
    image: "/images/dishes/dish-04.jpg",
  },
  {
    name: "Grilled Chicken & Suya",
    description:
      "Charcoal-grilled chicken with tender suya-spiced beef cuts, red onions and our signature yaji pepper relish.",
    category: "From the Grill",
    price: "₦13,000",
    image: "/images/dishes/dish-05.jpg",
  },
  {
    name: "Puff-Puff",
    description:
      "Golden Nigerian sweet dough bites, cloud-soft inside, crisp outside, with a warm hint of vanilla.",
    category: "Small Chops",
    price: "₦4,500",
    image: "/images/dishes/dish-06.jpg",
  },
];

export const fullMenu: Dish[] = [
  ...signatureDishes,
  ...additionalDishes,
];