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
    <Helmet>
      <title>{title ? title : "Nike Shoe"}</title>
      <meta name="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:image" content={image} />
      <link rel="canonical" href={url} />
      <meta name="og:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

export default Seo;
