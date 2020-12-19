export default {
  name: "food",
  title: "Food",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the food",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      options: {
        source: "name",
        maxLength: 69,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.min(100),
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
  ],
};
