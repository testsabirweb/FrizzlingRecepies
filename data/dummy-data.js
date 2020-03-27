import Category from '../models/category';
import Recepie from '../models/recepie';

export const CATEGORIES = [
    new Category('c1', 'Healthy', '#66ffc2'),
    new Category('c2', 'Quick & Easy', '#ffff4d'),
    new Category('c3', 'Sweets', '#f5a442'),
    new Category('c4', 'Chinese', '#f5d142'),
    new Category('c5', 'Light & Lovely', '#368dff'),
    new Category('c6', 'Dinner', '#41d95d'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c8', 'Desi', '#b9ffb0'),
];

export const RECEPIES = [
    new Recepie(
        'r8',
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
    ),
    new Recepie(
        'r1',
        ['c1'],
        'Vegetable Som Tam Salad',
        'cheap',
        'easy',
        'https://c.ndtvimg.com/1hkfbvu_som-tam-salad_625x300_04_September_18.jpg',
        15,
        [
            '150 gms raw papaya, shredded',
            '30 gms carrot, julienne',
            '30 gms French bean diamond',
            '30 gms cherry tomato',
            '5 gms garlic',
            '3 gms crush mix chilli',
            '45 ml somtam dressing',
            '10 gms peanuts (crushed), roasted',
            '5 gms peanuts, roasted',
        ],
        [
            'Pound chillies and garlic together in a mortar. Add beans and pound.',
            'Add Som tam sauce and mix well. Add crushed roasted peanuts.',
            'Now add cherry tomato, raw papaya and carrot to mix well',
            'Put in a platter and garnish with roasted peanuts'
        ],
        true,
        true,
    )
];