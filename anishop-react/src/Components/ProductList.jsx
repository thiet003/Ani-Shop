import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import Paging from "./Paging";

import Category from "./Category";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
  useHistory,
} from "react-router-dom";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("nameASC");
  const [currentPage, setPage] = useState(1); // [1, 2, 3, 4, 5
  const [itemsPerPage, setItemsPerPage] = useState(12); // chua co set itemperpage
  const [categories, setCategories] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  // id of selected category
  // 0 - all
  // 1 - gấu bông
  // 2 - gối ôm
  // 3 - tựa lưng, gối cổ
  // 4 - nghe nhạc
  const [selectedCategory, setSelectedCategory] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();

  const navigate = useNavigate();

  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
    // navigate({
    //     pathname: `/product`,
    //     search: `?productId=${productId}`,
    // })
  };

  let imgPath = "http://103.252.95.181:8000";
  const fetchData = () => {
    console.log("product");
    fetch("http://103.252.95.181:8000/products/")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Error");
        }
        return Response.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("done");
  console.log(products);

  // fetch catagory
  let url = "http://103.252.95.181:8000/products/?format=json";
  const fetchData2 = () => {
    console.log("Categories");
    fetch("http://103.252.95.181:8000/categories/")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Error");
        }
        return Response.json();
      })
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  url = "http://103.252.95.181:8000/categories/?format=json";

  //fetch data to get allCategories from API
  useEffect(() => {
    fetchData2();
  }, []);

  // filter products by search and category
  useEffect(() => {
    setQuery(searchParams.get("search") || "");
    query && setSearch(query);
    const filted = products.filter((product) => {
      if (selectedCategory === 0) {
        return product.product_name
          .toLowerCase()
          .includes(search.toLowerCase());
      } else {
        return (
          product.product_name.toLowerCase().includes(search.toLowerCase()) &&
          product.category === selectedCategory
        );
      }
    });
    setFilteredProducts(filted);
  }, [search, selectedCategory, products, query]);

  // sort products
  useEffect(() => {
    const sorted = filteredProducts.sort((a, b) => {
      switch (sort) {
        case "nameASC":
          return b.product_name.localeCompare(a.product_name);
        case "nameDESC":
          return a.product_name.localeCompare(b.product_name);
        case "priceASC":
          return b.price - a.price;
        case "priceDESC":
          return a.price - b.price;
        default:
          return 0;
      }
    });
    setFilteredProducts(sorted);
  }, [sort, filteredProducts]);

  // render
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      {/* <SearchBar setSearch={setSearch} /> */}
      <Category
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <Sort setSort={setSort} />

      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-4">
        {currentProducts
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((product) => (
            <div
              key={product.id}
              className="border p-4 m-4 hover:scale-105 hover:bg-gray-400 transition-all duration-150 ease-in-out rounded-3xl cursor-pointer"
              onClick={() => handleClick(product.id)}
            >
              <img
                className="max-w-full rounded-3xl"
                src={imgPath + product.images}
                alt={product.product_name}
              />
              <h1>{product.product_name}</h1>
              <h1>{product.price}</h1>
            </div>
          ))}
      </div>

      <Paging
        itemsPerPage={itemsPerPage}
        totalItems={filteredProducts.length}
        setPage={setPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
      />
    </>
  );
};
