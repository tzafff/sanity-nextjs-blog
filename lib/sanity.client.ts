import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = '2024-06-09'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false // WHEN DEPLOY ON VERCEL CHANGE IT TO TRUE
})