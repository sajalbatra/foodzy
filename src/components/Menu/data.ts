import breakfast from "../../assets/breakfast.svg"
import dish from "../../assets/dish.svg"
import drink from "../../assets/drinks.svg"
import dessert from "../../assets/dessert.svg"
import { MenuItem } from "./type";

export const data: MenuItem[] = [
    {
        'image': breakfast,
        'title': 'Breakfast',
        'description': 'Start your day with our delightful breakfast options. From hearty classics to light and healthy choices, we have something to suit every taste bud.',
        'link': '/menu'
    },
    {
        'image': dish,
        'title': 'Main Dishes',
        'description': 'Indulge in our mouthwatering main dishes crafted with the finest ingredients and culinary expertise. Each bite is a culinary adventure waiting to be savored.',
        'link': '/menu'
    },
    {
        'image': drink,
        'title': 'Drinks',
        'description': 'Quench your thirst with our refreshing selection of drinks. From freshly squeezed juices to exotic cocktails, we offer a diverse range of beverages to complement your meal.',
        'link': '/menu'
    },
    {
        'image': dessert,
        'title': 'Desserts',
        'description': 'Treat yourself to our decadent desserts that will satisfy your sweet cravings. From rich chocolate creations to fruity delights, our desserts are the perfect finale to your dining experience.',
        'link': '/menu'
    }
];
