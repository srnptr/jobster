import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../assets/styled-wrappers/SearchContainer";
import {
  clearFilters,
  handleChange,
} from "../../../features/allJobs/allJobsSlice";
import { FormRow, FormRowSelect } from "../../../layouts";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const dispatch = useDispatch((store) => store.allJobs);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(handleChange({ name: "search", value: localSearch }));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [localSearch, dispatch]);

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Search Form</h3>
        <div className="form-center">
          <FormRow
            name="search"
            type="text"
            value={localSearch}
            handleChange={(e) => setLocalSearch(e.target.value)}
          />
          <FormRowSelect
            name="searchStatus"
            labelText="status"
            options={["all", ...statusOptions]}
            value={searchStatus}
            handleChange={handleSearch}
          />
          <FormRowSelect
            name="searchType"
            labelText="type"
            options={["all", ...jobTypeOptions]}
            value={searchType}
            handleChange={handleSearch}
          />
          <FormRowSelect
            name="sort"
            options={sortOptions}
            value={sort}
            handleChange={handleSearch}
          />
          <button
            className="btn btn-block btn-danger"
            type="submit"
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
