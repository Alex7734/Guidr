import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import "./Searchbar.css";
import zIndex from "@mui/material/styles/zIndex";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div style={{
      position: "absolute",
      zIndex: "2", // set a high z-index value
    }}> 
    <div className="search-bar-container">
  <div className="search-bar">
  <div className="search-icon">
        <FaSearch size={30} color="#6177EF" />
      </div>
    <form onSubmit={handleSubmit} style={{ flex: "1", border: "none" }}>
      
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search"
        className="search-input"
      />
    </form>
    
  </div>
  <button className="menu-icon-container">
      <FaBars size={40} color="#D4DCFA" />
    </button>
</div>
</div>
  );
};

export default SearchBar;
