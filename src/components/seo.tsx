import React from "react";
import { Helmet } from "react-helmet";

type SeoDataTypes = {
  title: string;
  description: string;
  keywords?: string;
  image: string;
  url: string;
};

function Seo({ title, description, keywords, image, url }: SeoDataTypes) {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[
        { name: "keywords", content: keywords },
        { name: "description", content: description },
        { name: "og:image", content: image },
        { name: "og:title", content: title },
        { name: "og:url", content: url },
      ]}
    />
  );
}

export default Seo;
