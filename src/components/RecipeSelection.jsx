import React from "react";
import "./RecipeSelection.scss"
import {Recipies} from "./Recipies";

const RecipeSelection =(props)=> {
    const recipies = Recipies.filter(x=>x.type === props.value);

    return (
        <div className="selection-div">
            <div className="selection-inner">
                {recipies.map(selection => 
                <>
                    <img src={require(`../images/${selection.id}.png`)}
                        className="selection-single"
                        key={selection.id}
                        value={selection}
                        onClick={()=> props.passSelectedRecipe(selection.id)}
                        >
                    </img>
                    <div className="container-h3"
                        onClick={()=> props.passSelectedRecipe(selection.id)}
                        >
                        <h3 className="selection-h3">{selection.name}</h3>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default RecipeSelection;