import qs from "qs";
import { marked } from "marked";

const CMS_URL = "http://localhost:1337";

export async function getReview(slug) {
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ["slug", "title", "subtitle", "publishedAt", "body"],
    populate: { image: { fields: "url" } },
    pagination: { pageSize: 1, withCount: false },
  });
  const item = data[0];

  return {
    ...toReviewObject(item),
    body: marked(item.attributes.body, { headerIds: false, mangle: false }),
  };
}

export async function getLatestReview() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReviews() {
  const { data } = await fetchReviews({
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: "url" } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 6 },
  });

  return data.map(toReviewObject);
}

export async function getSlugs() {
  const { data } = await fetchReviews({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 100 },
  });

  return data.map((item) => item.attributes.slug);
}

async function fetchReviews(params) {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(params, { encodeValuesOnly: true });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }

  return await response.json();
}

function toReviewObject(item) {
  const { attributes } = item;

  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + attributes.image.data.attributes.url,
  };
}
