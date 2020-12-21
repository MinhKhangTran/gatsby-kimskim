export default {
  name: "storeSettings",
  title: "Settings",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Store Name",
      type: "string",
      description: "Beschreibung über den Laden",
    },
    {
      name: "mitarbeiter",
      title: "Derzeitger Mitarbeiter",
      type: "array",
      of: [{ type: "reference", to: [{ type: "personal" }] }],
    },
    {
      name: "produkte",
      title: "Verfügbare Produkte",
      type: "array",
      of: [{ type: "reference", to: [{ type: "food" }] }],
    },
  ],
};
