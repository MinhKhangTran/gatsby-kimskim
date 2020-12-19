export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Was für eine Kategorie?",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
  ],
};
