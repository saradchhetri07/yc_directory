import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(
  `*[_type=='startup' && defined(slug.current)] | order(_createdAt desc){
  _id,
  name,
  title,
  author->{_id,name},
  views,
  description,
  category,
  image,
  _createdAt
}`
);
