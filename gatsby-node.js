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
        name: key,
      },
    });
  });

  createPage({
    path: "/",
    component: MainPageTemplate,
  });
};
