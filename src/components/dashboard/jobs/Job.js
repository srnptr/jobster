import React from "react";
import moment from "moment/moment";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../../../assets/styled-wrappers/Job";
import { JobInfo } from "../../";
import { useDispatch } from "react-redux";
import { deleteJob, setEditJob } from "../../../features/job/jobSlice";

const Job = ({
  _id,
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) => {
  const date = moment(createdAt).format("Do MMMM YYYY");

  const dispatch = useDispatch();

  const handleEditJob = () => {
    dispatch(
      setEditJob({
        editJobId: _id,
        company,
        position,
        status,
        jobType,
        jobLocation,
      })
    );
  };

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={handleEditJob}
            >
              edit
            </Link>
            <button
              className="btn delete-btn"
              type="button"
              onClick={() => dispatch(deleteJob(_id))}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
