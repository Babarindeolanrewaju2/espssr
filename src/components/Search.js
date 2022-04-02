import React from "react";
import styled from "styled-components";
const SidebarWidget = styled.div`
  margin-top: 30px;
`;

const Input = styled.input`
  font-family: "CircularStdBook";
  width: 100%;
  height: 60px;
  border: 1px solid rgba(48, 146, 85, 0.2);
  border-radius: 10px;
  padding: 0 20px;
  padding-right: 60px;
  outline: none;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  font-size: 15px;
  font-weight: 400;
  color: #52565b;
  margin-bottom: 30px;
  margin-top: 30px;
`;

//destructuring the props
const Search = ({ search, setSearch }) => {
  return (
    <SidebarWidget>
      <Input
        type="text"
        className="form-control"
        placeholder="Search a game here"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </SidebarWidget>
  );
};

export default Search;
