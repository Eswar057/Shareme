import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "685w3zzc",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token:
    "skH8xJnv3JT3gzczfVbbiGFPjgOSWdZLwRSJn87vZArerZJigFeCvikVcrKivQFx36mZ0gWVekeY1Q8xWVcK96KRLbBkds83NBQWzYeh0SudLWywTjZxRLIcMLmfxKVcoq67xVqOIB8SynCosriazkvk1A9T1gXtASW9pCktwiCE3qn6KLsq",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
