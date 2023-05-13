import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:700" />
</head>
      <div
        style={{
          background: "#FAFEFE",
          boxShadow: "0px 3px 12px 2px #A6CBEB",
          borderRadius: "33px",
          display: "flex",
          alignItems: "left",
          color: "#6177EF",
          marginTop: "20px",
          marginRight: "5%",
          marginLeft: "5%",
          width: "70%",
          paddingTop: "10px",
        }}
      >
        <form onSubmit={handleSubmit} style={{ flex: "1", border: "none" }}>
          <div style={{ display: "flex", alignItems: "left", paddingLeft: "20px" }}>
            <FaSearch size={50} color="#6177EF" style={{ opacity: "0.3", paddingRight: "10px", paddingTop: "18px"}} />
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search"
              style={{
                width: "100%",
                border: "none",
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: "24px",
                color: "#6177EF",
                textAlign: "left",
                paddingLeft: "5%",
                opacity: "0.3",
              }}
            />
          </div>
        </form>
      </div>
      <button
        style={{
          background: "#FFFFFF",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80px",
          height: "80px",
          boxShadow: "0px 3px 12px 2px #A6CBEB",
          marginTop: "18px",
          border: "none",
        }}
      >
        <TiThMenu size={40} color="#D4DCFA" />
      </button>
    </div>
  );
};

export default SearchBar;
