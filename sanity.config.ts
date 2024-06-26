'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {DefaultDocument, defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { myTheme } from './theme'

import StudioNavBar from "./components/StudioNavBar"
import Logo from "./components/Logo"
import { defaultDocumentNode } from './defaultDocumentNode'

export default defineConfig({
  basePath: '/studio',
  name: "Tzaf_Content_Studio",
  title: "Tzaf_Content_Studio",
  projectId,
  dataset,
  icon: Logo,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    defaultDocumentNode, // TODO NEED FIX THE PREVIEW
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  studio: {
    components: {
      navbar: StudioNavBar,
    }
  },
  theme: myTheme
})
