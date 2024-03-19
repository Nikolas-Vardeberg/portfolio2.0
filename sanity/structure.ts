import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder, C: ConfigContext) =>
    S.list()
        .title('Innhold')
        .items([
            S.listItem()
                .title("Prosjekter")
                .child(
                    S.documentTypeList("blog").title("Prosjekt")
                ),
                
            S.listItem()
                .title("Tags")
                .child(
                    S.documentTypeList("tag").title("Tag")
                ),
                
            S.listItem()
            .title("Landingsside")
            .child(
                S.editor()
                .title("Landingsside")
                .schemaType("landingPage")
                .documentId("landingPage")
            )
        ]);