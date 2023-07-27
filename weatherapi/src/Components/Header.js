import React from "react";
import './Header.css';



function Header() {
  return (
    <div className="header">
      <fieldset className="header-fieldset">
      
          <form className="example">
            <input type="text" name="search" placeholder="london" className="london"/>
            <button type="submit" className="btn"> FIND WEATHER </button>
          </form>
       
      </fieldset>
      
    </div>
  );
}

export default Header;

//     onChange={(e) => onChange(e.target.value)}
