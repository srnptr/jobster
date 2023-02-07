import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../assets/styled-wrappers/PageBtnContainer";
import { changePage } from "../../../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);  
  const dispatch = useDispatch();
  
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) newPage = numOfPages;
    dispatch(changePage(newPage));
  };
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) newPage = 1;
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <button className="prev-btn" type="button" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {Array.from({ length: numOfPages }, (_, index) => (
          <button
            key={index}
            className={index + 1 === page ? "pageBtn active" : "pageBtn"}
            type="button"
            onClick={() => dispatch(changePage(index + 1))}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button className="next-btn" type="button" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
