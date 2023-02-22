export default {
    name: 'navLinks',
    title: 'Navigation Links',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'orderRank',
            title: 'Order Rank',
            type: 'string',
            hidden: true,
        }

    ]
}