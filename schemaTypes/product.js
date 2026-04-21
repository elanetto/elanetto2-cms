export default {
  name: 'product',
  title: 'Produkt',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'object',
      fields: [
        {name: 'no', title: 'Norsk', type: 'string'},
        {name: 'en', title: 'Engelsk', type: 'string'},
      ],
    },
    {
      name: 'slug',
      title: 'URL-slug',
      type: 'slug',
      options: {
        source: 'title.no',
        maxLength: 96,
      },
    },
    {
      name: 'price',
      title: 'Pris (NOK)',
      type: 'number',
    },

    // 🔥 NY: FLERE BILDER + ALT TEXT
    {
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt-tekst',
              type: 'string',
              description: 'Beskriv bildet (for tilgjengelighet og SEO)',
            },
          ],
        },
      ],
    },

    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'object',
      fields: [
        {name: 'no', title: 'Norsk', type: 'text'},
        {name: 'en', title: 'Engelsk', type: 'text'},
      ],
    },
    {
      name: 'inStock',
      title: 'På lager',
      type: 'boolean',
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Klistremerke', value: 'sticker'},
          {title: 'Bokmerke', value: 'bookmark'},
          {title: 'Kort', value: 'card'},
        ],
      },
    },

    // STØRRELSE
    {
      name: 'size',
      title: 'Størrelse (cm)',
      type: 'object',
      fields: [
        {
          name: 'width',
          title: 'Bredde (cm)',
          type: 'number',
        },
        {
          name: 'height',
          title: 'Høyde (cm)',
          type: 'number',
        },
      ],
    },

    // NØKKELORD
    {
      name: 'tags',
      title: 'Nøkkelord',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      title: 'title.no',
      media: 'images.0.asset',
    },
  },
}
