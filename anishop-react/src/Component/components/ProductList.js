import React, {useState, useEffect} from "react";
import Product from "./Product";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import Paging from "./Paging";
import Category from "./Category";
import axios from "axios";

function ProductList() {
    const [data, setData] = useState([]);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("nameASC");
    const [currentPage, setPage] = useState(1); // [1, 2, 3, 4, 5
    const [itemsPerPage, setItemsPerPage] = useState(12); // chua co set itemperpage
    const [categories, setCategories] = useState([]);
    
    // id of selected category
    // 0 - all
    // 1 - gấu bông
    // 2 - gối ôm
    // 3 - tựa lưng, gối cổ
    // 4 - nghe nhạc
    const [selectedCategory, setSelectedCategory] = useState(0);

    const [myData, setMyData] = useState([]);
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


    // async fetch data
    let url = "http://103.252.95.181:8000/products/?format=json";
    // async function fetchData1() {
    //     try {
    //         const response = await axios.get(url);
    //         console.log(response);
    //         setData(response.data);
    //         console.log("oke");
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // // fetch data to get allProducts from API
    // useEffect(() => {
    //     fetchData1();
    //     setProducts(data);
    // }, []);
    // console.log(products);

    url = "http://103.252.95.181:8000/categories/?format=json";

    async function fetchData2() {
        try {
            const response = await axios.get(url);
            console.log(response);
            setData(response.data);
            console.log("oke");
        } catch (error) {
            console.error(error);
        }
    }

    //fetch data to get allCategories from API
    useEffect(() => {
        fetchData2("http://103.252.95.181:8000/categories/?format=json")
        setCategories(data);
    }, []);

    // filter products by search and category
    useEffect(() => {
        const filted = products.filter((product) => {
            if (selectedCategory === 0) {
                return product.product_name.toLowerCase().includes(search.toLowerCase());
            } else {
                return (
                    product.product_name.toLowerCase().includes(search.toLowerCase()) &&
                    product.category === selectedCategory
                );
            }
        });
        setFilteredProducts(filted);
    }, [search, selectedCategory, products]);

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
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <>
            <SearchBar setSearch={setSearch} />
            <Category categories={categories} setSelectedCategory={setSelectedCategory} />
            <Sort setSort={setSort} />
            <ul>
                {currentProducts.map((product) => (
                    // <Product props={product} />
                    <>
                        <h4>{product.product_name}</h4>
                        <div>{product.price}</div>
                    </>
                ))}
            </ul>
            <Paging
                itemsPerPage={itemsPerPage}
                totalItems={filteredProducts.length}
                setPage={setPage}
            />
        </>
    )
}

export default ProductList;