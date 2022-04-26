import React from "react";
import "./RecipeWindow.scss";
import {Recipies} from "./Recipies";

const RecipeWindow =(props)=> {
    const recipe = Recipies.filter(x=>x.id === props.value);

    return (
        <div className="container">
            <div className="container-inner">
                <div className="container-img-ing">
                    <div className="img">
                        <img src={require(`../images/${recipe[0].id}.png`)} className="recipe-img"></img>
                    </div>
                    <div className="ingredients">
                        <h3 className="recipe-h3">Sestavine:</h3>
                        <p className="ingredients-p">{recipe[0].ingredients.split(',').map(line => <span>{line}<br/></span>)}</p>
                    </div>
                </div>
                <div className="container-tit-desc-rec">
                    <div className="title">
                        <h4>{recipe[0].name}</h4>
                    </div>
                    <div className="desc">
                        {recipe[0].description}
                    </div>
                    <div className="recipe">
                        <h3 className="recipe-h3">Recept:</h3>
                        <p className="recipe-p">{recipe[0].recipe.split('*').map(line => <span>{line}<br/><br/><br/></span>)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeWindow;