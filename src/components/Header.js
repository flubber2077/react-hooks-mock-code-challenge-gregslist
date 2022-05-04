import React from "react";
import Search from "./Search";

function Header({searchValue, onSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchValue={searchValue} onSearch={onSearch}/>
    </header>
  );
}

export default Header;
