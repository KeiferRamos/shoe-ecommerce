const path = require("path");

const MainPageTemplate = path.resolve("src/templates/Home/index.tsx");
const MenuPageTemplate = path.resolve("src/templates/menu/index.tsx");
const ItemPageTemplate = path.resolve("src/templates/item/index.tsx");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: {
      shoes: { nodes },
    },
  } = await graphql(`
    query MyQuery {
      shoes: allContentfulShoe {
        nodes {
          category
          filter
          name
        }
      }
    }
  `);

  const prizes = ["0-5000", "5000-7000", "7000-20000"];

  ["men", "women", "kids"].forEach((key) => {
    const filteredShoes = nodes.filter(({ category }) => category === key);
    const filters = [...new Set(filteredShoes.map(({ filter }) => filter))];

    filteredShoes.forEach(({ name }) => {
      const pathName = name.toLowerCase().replace(/ /g, "-");

      createPage({
        path: `/${key}/${pathName}`,
        component: ItemPageTemplate,
        context: {
          name,
        },
      });
    });

    createPage({
      path: `/${key}`,
      component: MenuPageTemplate,
      context: {
        filters,
        names: [key],
      },
    });

    prizes.forEach((prize) => {
      createPage({
        path: `/${key}/${prize}`,
        component: MenuPageTemplate,
        context: {
          prize,
          filters,
          names: [key],
        },
      });
    });

    filters.forEach((category) => {
      const pathName = category.toLowerCase().replace(/ /g, "-");
      createPage({
        path: `/${key}/${pathName}`,
        component: MenuPageTemplate,
        context: {
          filters,
          names: [key],
          key: category,
        },
      });
    });
  });

  const filters = [...new Set(nodes.map(({ filter }) => filter))];

  filters.forEach((key) => {
    const pathName = key.toLowerCase().replace(/ /g, "-");
    createPage({
      path: `/all/${pathName}`,
      component: MenuPageTemplate,
      context: {
        filters,
        key,
        names: ["men", "women", "kids"],
      },
    });
  });

  prizes.forEach((prize) => {
    createPage({
      path: `/all/${prize}/`,
      component: MenuPageTemplate,
      context: {
        filters,
        prize,
        names: ["men", "women", "kids"],
      },
    });
  });

  createPage({
    path: "/all",
    component: MenuPageTemplate,
    context: {
      filters,
      names: ["men", "women", "kids"],
    },
  });

  createPage({
    path: "/",
    component: MainPageTemplate,
  });
};
