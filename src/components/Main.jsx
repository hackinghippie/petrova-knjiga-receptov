import React, {useEffect, useState} from "react";
import "./Main.scss";
import Header from "./Header";
import CategoryWindow from "./CategoryWindow"
import RecipeSelection from "./RecipeSelection";
import RecipeWindow from "./RecipeWindow";

const Main =()=> {
    const [showElement, setShowElement] = useState("category");
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedRecipe, setSelectedRecipe] = useState();

    useEffect(()=> {
        if (selectedRecipe) {
            setShowElement("recipe")
            
        } else if (selectedCategory) {
            setShowElement("recipeSelection")
        }
        window.scrollTo(0, 0)
    }, [selectedCategory][selectedRecipe]);

    return (
        <>
            <Header />
            <main className="main">
                <div>
                    <div>
                        {showElement === "category" ?
                                <CategoryWindow
                                    passSelectedCategory={setSelectedCategory}
                                />
                        : ''}
                    </div>
                    <div>
                        {showElement === "recipeSelection" ?
                            <RecipeSelection
                                value={selectedCategory}
                                passSelectedRecipe={setSelectedRecipe}
                            />
                        : ''}
                    </div>
                    <div>
                        {showElement === "recipe" ?
                            <RecipeWindow
                                value={selectedRecipe}
                            />
                        : ''}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;