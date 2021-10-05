const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');

const RecipesListType = new GraphQLObjectType({
    name: 'RecipesList',
    fields: () => ({
        name: { type: GraphQLString },
        // tags: { type: TagsType },
        id: { type: GraphQLInt },
        // instructions: { type: InstructionsType },
        // num_servings: { type: GraphQLInt },
        // thumbnail_url: { type: GraphQLString },
        // sections: { type: IngredientsType },
        // nutrition: { type: NutritionType }
    })
});

const TagsType = new GraphQLObjectType({
    name: 'Tags',
    fields: () => ({
        name: { type: GraphQLString },
        id: { type: GraphQLInt },
    })
});

const InstructionsType = new GraphQLObjectType({
    name: 'Instructions',
    fields: () => ({
        display_text: { type: GraphQLString },
        position: { type: GraphQLInt },
    })
});

const IngredientsType = new GraphQLObjectType({
    name: 'IngredientsType',
    fields: () => ({
        components: { type: IngredientType }
    })
});

const IngredientType = new GraphQLObjectType({
    name: 'IngredientType',
    fields: () => ({
        ingredient: { type: SpecificIngredientType }
    })
});

const SpecificIngredientType = new GraphQLObjectType({
    name: 'SpecificIngredientType',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    })
});

const NutritionType = new GraphQLObjectType({
    name: 'NutritionType',
    fields: () => ({
        protein: { type: GraphQLInt },
        sugar: { type: GraphQLInt },
        fiber: { type: GraphQLInt },
        calories: { type: GraphQLInt },
        carbohydrates: { type: GraphQLInt },
        fat: { type: GraphQLInt },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        recipes: {
            type: new GraphQLList(RecipesListType),
            resolve(parent, args) {
                const options = {
                    params: { from: '0', size: '20', tags: 'fish' },
                    headers: {
                        'x-rapidapi-key': '70dd769066mshc958db014852d9ep1ca48ejsn20de3b1bd360',
                        'x-rapidapi-host': 'tasty.p.rapidapi.com'
                    }
                };

                axios.get('https://tasty.p.rapidapi.com/recipes/list', options
                ).then(res => res.data.results);

            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

