import Category from '../models/category';
import Recepie from '../models/recepie';

export const CATEGORIES = [
    new Category('c1', 'Healthy', '#f5428d'),
    new Category('c2', 'Quick & Easy', '#f54242'),
    new Category('c3', 'Sweets', '#f5a442'),
    new Category('c4', 'Chinese', '#f5d142'),
    new Category('c5', 'Light & Lovely', '#368dff'),
    new Category('c6', 'Dinner', '#41d95d'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c8', 'Desi', '#b9ffb0'),
];

export const RECEPIES = [
    new Recepie(
        'm8',
        ['c8'],
        'Creamy Indian Chicken Curry',
        'pricey',
        'challenging',
        'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
        35,
        [
            '4 Chicken Breasts',
            '1 Onion',
            '2 Cloves of Garlic',
            '1 Piece of Ginger',
            '4 Tablespoons Almonds',
            '1 Teaspoon Cayenne Pepper',
            '500ml Coconut Milk'
        ],
        [
            'Slice and fry the chicken breast',
            'Process onion, garlic and ginger into paste and sauté everything',
            'Add spices and stir fry',
            'Add chicken breast + 250ml of water and cook everything for 10 minutes',
            'Add coconut milk',
            'Serve with rice'
        ],
        false,
        true,
    )
];