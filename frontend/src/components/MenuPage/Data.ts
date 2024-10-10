import { MenuItem } from "./Type";
import Burger from "../../assets/burger.svg"
export const Dishdata: MenuItem[] = [
    // Breakfast
    {
        image: "breakfast1.jpg",
        price: 8.99,
        title: "Classic Pancakes",
        description: "Fluffy pancakes served with maple syrup and butter.",
        tags: ["breakfast", "dessert"],
    },
    {
        image: "breakfast2.jpg",
        price: 9.99,
        title: "Avocado Toast",
        description: "Sliced avocado on toasted whole grain bread, garnished with cherry tomatoes and a drizzle of olive oil.",
        tags: ["breakfast"]
    },
    {
        image: "breakfast3.jpg",
        price: 7.49,
        title: "Eggs Benedict",
        description: "Poached eggs and Canadian bacon on English muffins, topped with hollandaise sauce.",
        tags: ["breakfast"]
    },
    // Main Dishes
    {
        image: "maindish1.jpg",
        price: 14.99,
        title: "Grilled Salmon",
        description: "Fresh salmon fillet grilled to perfection, served with steamed vegetables and lemon butter sauce.",
        tags: ["main-dish"]
    },
    {
        image: "maindish2.jpg",
        price: 12.99,
        title: "Chicken Alfredo Pasta",
        description: "Tender chicken breast pieces tossed with fettuccine pasta in a creamy Alfredo sauce.",
        tags: ["main-dish"]
    },
    {
        image: Burger,
        price: 11.49,
        title: "Cheese Burger",
        description: "Juicy Cheese patty topped with lettuce, tomato, onion, and your choice of cheese, served with fries.",
        tags: ["main-dish"]
    },
    // Drinks
    {
        image: "drink1.jpg",
        price: 4.99,
        title: "Berry Smoothie",
        description: "A refreshing blend of mixed berries, yogurt, and honey.",
        tags: ["drink"]
    },
    {
        image: "drink2.jpg",
        price: 3.49,
        title: "Iced Caramel Macchiato",
        description: "Espresso poured over ice with milk and sweet caramel syrup.",
        tags: ["drink"]
    },
    {
        image: "drink3.jpg",
        price: 2.99,
        title: "Mint Lemonade",
        description: "Freshly squeezed lemon juice mixed with mint syrup and sparkling water.",
        tags: ["drink"]
    },
    // Desserts
    {
        image: "dessert1.jpg",
        price: 6.99,
        title: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
        tags: ["dessert","breakfast"]
    },
    {
        image: "dessert2.jpg",
        price: 5.49,
        title: "Fruit Tart",
        description: "Buttery tart crust filled with pastry cream and topped with fresh seasonal fruits.",
        tags: ["dessert"]
    },
    {
        image: "dessert3.jpg",
        price: 4.99,
        title: "New York Cheesecake",
        description: "Creamy cheesecake on a graham cracker crust, topped with raspberry sauce.",
        tags: ["dessert"]
    }
];


