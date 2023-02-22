export default {
    name: 'featuredProducts',
    title: 'Featured Products',
    type: 'document',
    fields: [
        {
            name: 'product',
            title: 'Product',
            type: 'reference',
            to: [{ type: 'products' }]
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
    ]
}