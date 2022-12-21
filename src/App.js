import './App.css';
import { Dishes } from './Dishes';
import React, { useState} from "react";
import { DishData } from './data'
import { CategoryButtons } from './CategoryButtons';

function App() {

  const [item, setItem] = useState(DishData);
  
  const temp = new Set(DishData.map( (data) => data.category)); //Set allows only 1 occurence of a value.
  const menuCategory = [...temp];

  const filterItem = (clickedCategory) => 
  {
    const newData = DishData.filter((singleRowOfDish) => singleRowOfDish.category === clickedCategory);
    setItem(newData);
  };

  return (
    <div className="container-fluid">
        <div className="row">
        <h3 className="col-12 text-center my-3 fw-bold">Food Filtering</h3>
          <CategoryButtons
            filterItem={filterItem}
            setItem={setItem}
            menuCategory={menuCategory}/>
          <Dishes DishData={item}/>
      </div>
    </div>
  );
}

export default App;
