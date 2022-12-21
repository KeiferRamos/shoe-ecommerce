import { graphql, Link } from "gatsby";
import React, { useState } from "react";

import Layout from "../../layout/index";
import Seo from "../../components/seo";

import {
  Container,
  StyledFilter,
  StyledList,
  StyledPrice,
  StyledGender,
  SearchTab,
  FilterContainer,
  EmptyContent,
} from "./style";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SearchIcon from "../../assets/images/search.webp";
import Filter from "../../assets/images/filter.webp";
import Empty from "../../assets/images/empty.webp";
import price from "../../data/price";
import { convertNum } from "../../utils/convert-to-price";

function Menu({
  data: {
    shoes: { nodes },
  },
  pageContext: { filters, names, key },
}) {
  const [shoes, setShoes] = useState(
    key ? nodes.filter((shoe) => shoe.filter === key) : nodes
  );
  const [filter, setFilter] = useState(key ? key : "");
  const [label, setLabel] = useState(key ? key : "");
  const [openFilter, setOpenFilter] = useState(false);

  const selectCategory = (key: string) => {
    if (key === filter) {
      setShoes(nodes);
      setFilter("");
      setLabel("");
    } else {
      setShoes(nodes.filter((shoe) => shoe.filter === key));
      setFilter(key);
      setLabel(key);
    }
  };

  const filterByPrice = (value: number[], label: string) => {
    if (label === filter) {
      setFilter("");
      setShoes(nodes);
    } else {
      setFilter(label);
      setShoes(
        nodes.filter(({ price }) => price <= value[1] && price >= value[0])
      );
    }
  };

  const search = (key: string) => {
    if (key) {
      setShoes(
        nodes.filter(({ name }) =>
          name.toLowerCase().includes(key.toLowerCase())
        )
      );
    } else {
      setShoes(nodes);
    }
  };

  const SeoData = {
    title: "Nike Shoe",
    image:
      "https://shoe-master.netlify.app/static/shoe-bg-7f40f9bd7e9e267bf62fe97637105885.webp",
    url: "https://shoe-master.netlify.app",
  };

  return (
    <Layout>
      <Seo {...SeoData} />
      <Container>
        <header>
          <h2>
            {names[0] ? names[0] : "All"}'s {label} Shoes ({shoes.length})
          </h2>
          <img
            src={Filter}
            alt="image"
            className="filter"
            onClick={() => setOpenFilter(!openFilter)}
          />
          <SearchTab>
            <input
              type="text"
              onClick={() => {
                setShoes(nodes);
                setLabel("");
                setFilter("");
              }}
              onChange={(e) => search(e.target.value)}
              placeholder="Search here..."
            />
            <img src={SearchIcon} alt="" />
          </SearchTab>
        </header>
        <FilterContainer className={openFilter ? "open-filter" : ""}>
          <StyledFilter>
            {filters.map((text: string, i: number) => {
              const identity = names.length > 1 ? "all" : names[0];
              const pathName = text.toLowerCase().replace(/ /g, "-");
              return (
                <Link
                  to={`/${identity}/${pathName}`}
                  className={filter === text ? "selected" : ""}
                  key={i}
                  onClick={() => selectCategory(text)}
                >
                  {text}
                </Link>
              );
            })}
          </StyledFilter>
          <StyledPrice>
            <p>Shop By Price</p>
            <ul>
              {price.map(({ label, value }) => {
                return (
                  <li key={label} onClick={() => filterByPrice(value, label)}>
                    {label === filter ? <span>•</span> : ""}
                    {label}
                  </li>
                );
              })}
            </ul>
          </StyledPrice>

          <StyledGender>
            <p>Categories</p>
            <Link to="/men">
              <input
                type="checkbox"
                defaultChecked={names[0] === "men" && names.length === 1}
              />
              <label htmlFor="men">men</label>
            </Link>
            <Link to="/kids">
              <input
                type="checkbox"
                defaultChecked={names[0] === "kids" && names.length === 1}
              />
              <label htmlFor="women">kids</label>
            </Link>
            <Link to="/women">
              <input
                type="checkbox"
                defaultChecked={names[0] === "women" && names.length === 1}
              />
              <label htmlFor="women">women</label>
            </Link>
          </StyledGender>
        </FilterContainer>

        <StyledList>
          {shoes.length ? (
            shoes.map(({ name, images, price, category }) => {
              const pathName = name.toLowerCase().replace(/ /g, "-");
              return (
                <Link to={`/${category}/${pathName}`} key={name}>
                  <GatsbyImage image={getImage(images[0])!} alt="shoe front" />
                  <h4>{name}</h4>
                  <p>P{convertNum(price)}</p>
                </Link>
              );
            })
          ) : (
            <EmptyContent>
              <img src={Empty} alt="" />
              <br />
              <p>No Result Found</p>
            </EmptyContent>
          )}
        </StyledList>
      </Container>
    </Layout>
  );
}

export const getData = graphql`
  query MyQuery($names: [String]) {
    shoes: allContentfulShoe(filter: { category: { in: $names } }) {
      nodes {
        filter
        name
        images {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            height: 500
            width: 500
            layout: CONSTRAINED
            formats: WEBP
          )
        }
        price
        category
      }
    }
  }
`;

export default Menu;
