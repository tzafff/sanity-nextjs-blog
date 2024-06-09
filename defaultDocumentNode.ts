import { type DefaultDocumentNodeResolver } from 'sanity/structure'
import { Iframe } from 'sanity-plugin-iframe-pane'
import { type SanityDocument } from 'sanity'



// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
    // Only show preview pane on `movie` schema type documents
    switch (schemaType) {
        case `post`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url:"http://localhost:3000/api/preview",
                        defaultSize: `desktop`,
                        reload: {
                            button: true,
                        },
                        attributes: {},
                    })
                    .title('Preview'),
            ])
    }
}