import CalculatedPriceField from "./components/CalculatedPriceField.jsx";

export default {
  name: 'bundle',
  title: 'Produktpakke',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Navn på pakke',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'products',
      title: 'Produkter i pakken',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
    },
    {
      name: 'calculatedPrice',
      title: 'Beregnet pakkepris (20% rabatt)',
      type: 'number',
      readOnly: true,
      components: {
        field: CalculatedPriceField,
      },
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    },
  ],
}
