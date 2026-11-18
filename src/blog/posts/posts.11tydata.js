export default {
  layout: "layouts/post.njk",
  category: "research",
  permalink: (data) => (data.draft && process.env.ELEVENTY_RUN_MODE === "build" ? false : `/blog/${data.page.fileSlug}/`),
};
