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