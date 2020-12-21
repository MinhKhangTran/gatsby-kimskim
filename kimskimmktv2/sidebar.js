import React, { Children } from "react";
import S from "@sanity/desk-tool/structure-builder";

export default function Sidebar() {
  return S.list()
    .title("Kim's KIm")
    .items([
      S.listItem()
        .title("Home Page")
        .child(S.editor().schemaType("storeSettings").documentId("wonju")),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "storeSettings"
      ),
    ]);
}
