import Category from '../models/category';
import Recepie from '../models/recepie';

export const CATEGORIES = [
    new Category('c1', 'Healthy', '#9eecff'),
    new Category('c2', 'Quick & Easy', '#ffccff'),
    new Category('c3', 'Sweets', '#ffff80'),
    new Category('c4', 'Chinese', '#b3ffb3'),
    new Category('c5', 'Light & Lovely', '#80ffbf'),
    new Category('c6', 'Dinner', '#368dff'),
    new Category('c7', 'Breakfast', '#9999ff'),
    new Category('c8', 'Indian', '#b9ffb0'),
];

export const RECEPIES = [
    new Recepie(
        'r8',
        ['c8', 'c6'],
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
        'r3',
        ['c1', 'c2', 'c3'],
        'MilkShake',
        'cheap',
        'easy',
        'https://cdn3.foodviva.com/static-content/food-images/milkshake-recipes/coffee-milkshake-recipe/coffee-milkshake-recipe.jpg',
        5,
        [
            '4 large scoops (about 1 1/2 c.) vanilla ice cream',
            '1/4 c. milk',
            'Whipped topping, for garnish',
            'Sprinkles, for garnish',
            'Maraschino cherry, for garnish'
        ],
        [
            'In a blender, blend together ice cream and milk. ',
            'Pour into a glass and garnish with whipped topping, sprinkles, and a cherry.',
        ],
        true,
        false,
    ),
    new Recepie(
        'r1',
        ['c1', 'c2', 'c5'],
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
    ),
    new Recepie(
        'r4',
        ['c3', 'c6'],
        'Choclate Cake',
        'Expensive',
        'Hard',
        'https://media.way2flowers.com/media/catalog/product/cache/1/thumbnail/500x/17f82f742ffe127f42dca9de82fb58b1/P/F/PFCAKE018-coffee-chocolate-cake.jpg',
        40,
        [
            '1 cup white sugar',
            '½ cup butter',
            '2 eggs',
            '2 teaspoons vanilla extract',
            '1 ½ cups all-purpose flour',
            '1 ¾ teaspoons baking powder',
            '½ cup milk'
        ],
        [
            'Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.',
            'In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan.',
            'Bake for 30 to 40 minutes in the preheated oven. For cupcakes, bake 20 to 25 minutes. Cake is done when it springs back to the touch.'
        ],
        false,
        false,
    )
];