import React, {useEffect, useState} from "react";
import "./Header.scss"
import FoodSelection from "./RecipeSelection";

const Header =()=> {

    return (
        <header className="header">
            <div className="header-inner">
                <h1>Petrova knjiga receptov</h1>
            </div>
        </header>
    )
}

export default Header;




