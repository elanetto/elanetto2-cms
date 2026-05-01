export default {
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    {
      name: "product",
      type: "reference",
      title: "Produkt",
      to: [{ type: "product" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      type: "string",
      title: "Navn",
      validation: (Rule) => Rule.required().min(2),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (Rule) => Rule.required().min(1).max(5),
    },
    {
      name: "comment",
      type: "text",
      title: "Kommentar",
      validation: (Rule) => Rule.required().min(5),
    },
    {
      name: "approved",
      type: "boolean",
      title: "Godkjent",
      initialValue: false,
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "comment",
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title}`,
        subtitle: subtitle?.slice(0, 50),
      };
    },
  },
};