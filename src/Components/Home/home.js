import React, { useEffect } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import ProductListing from "../ProductListing/ProductListing";
import { Router, useNavigate } from "react-router-dom";

export const Home = () =>{
    const isLoggedIn = JSON.parse(sessionStorage.getItem("isUserLoggedIn"));

    return(
        <>
        <Header></Header>
        {!isLoggedIn &&<Banner></Banner> }
        <ProductListing></ProductListing>
        </>
    )
}