export default {
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    {
      name: "product",
      type: "reference",
      to: [{ type: "product" }],
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: "comment",
      type: "text",
    },
    {
      name: "images",
      type: "array",
      title: "Bilder",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "approved",
      type: "boolean",
      initialValue: false,
    },
  ],
};