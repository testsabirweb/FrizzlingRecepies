class Recepie {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isVegetarian,
        isSugarFree,
        isNonVeg,
        isLessThan5
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.steps = steps;
        this.duration = duration;
        this.complexity = complexity;
        this.affordability = affordability;
        this.isVegetarian = isVegetarian;
        this.isSugarFree = isSugarFree;
        this.isNonVeg = isNonVeg;
        this.isLessThan5 = isLessThan5;
    }
}

export default Recepie;