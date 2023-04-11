import React from "react";
import Profile from "../components/Profile";
import SearchBox from "../components/SearchBox";
import searchData from "../searchData";

function HomePage() {
    return (
        <div className="homePage-container">
            <SearchBox searchData={searchData}/>
            <Profile />
        </div>
    )
}

export default HomePage;