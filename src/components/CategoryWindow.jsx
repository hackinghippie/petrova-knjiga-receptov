import React from "react";
import "./CategoryWindow.scss"   

const CategoryWindow =(props)=> {
    const categories = ["hrana", "pijača", "sladice", "ostalo"];

    return (
        <div className="categories-div">
            <div className="categories-inner">
                {categories.map(category => 
                    <button className={"category-btn " + `${category}`}
                        key={category}
                        value={category}
                        onClick={() => props.passSelectedCategory(category)}
                    >
                        <h2 className="category-h2" >{category}</h2>
                    </button>
                )}
            </div>
        </div>
    )
}

export default CategoryWindow;