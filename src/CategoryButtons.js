import React from "react";
import { DishData } from "./data";

export function CategoryButtons({filterItem, setItem, menuCategory})
{
	const buttons = menuCategory.map( (categoryValue, key) => 
		<button onClick={()=>filterItem(categoryValue)} key={key} className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold">
			{categoryValue}
		</button>);

	return (
	<div className='d-flex justify-content-center'>
		{buttons}
		<button onClick={ () => setItem(DishData) } className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold">
			All
		</button>
	</div>);
}