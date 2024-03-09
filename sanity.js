import { sanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = sanityClient({
  projectId: "dlu5662f",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-09",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
