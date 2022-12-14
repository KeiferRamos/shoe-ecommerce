import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Layout from "../../layout/index";
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
  pageContext: { filters, name },
}) {
  const [shoes, setShoes] = useState(nodes);
  const [filter, setFilter] = useState("");
  const [label, setLabel] = useState("");
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

  return (
    <Layout>
      <Container>
        <header>
          <h2>
            {name}'s {label} Shoes ({shoes.length})
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
              return (
                <span
                  className={filter === text ? "selected" : ""}
                  key={i}
                  onClick={() => selectCategory(text)}
                >
                  {text}
                </span>
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
              <input type="checkbox" defaultChecked={name === "men"} />
              <label htmlFor="men">men</label>
            </Link>
            <Link to="/kids">
              <input type="checkbox" defaultChecked={name === "kids"} />
              <label htmlFor="women">kids</label>
            </Link>
            <Link to="/women">
              <input type="checkbox" defaultChecked={name === "women"} />
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
  query MyQuery($name: String) {
    shoes: allContentfulShoe(filter: { category: { eq: $name } }) {
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
