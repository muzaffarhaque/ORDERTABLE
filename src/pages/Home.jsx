import React, { useEffect, useState } from "react";
import commonGetApi from "../server/Api";
import { FaSearch } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FaAngleLeft,FaAngleRight  } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";
export default function Home() {
  const [data, setData] = useState([]);
  async function getData() {
    const data = await commonGetApi(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );
    console.log(data);
    setData(data.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="main-home-section">
      <div className="header-part">
        <h3 className="fs-28-18 fw-bold">Orders</h3>
        <button className="primary-btn">Create New</button>
      </div>
      <div className="sub-header-frame">
        <div className="search-field">
          <p className="fs-18-14 fw-normal">What are you looking for?</p>
          <div className="serch-box">
            <FaSearch className="serch-icon" />
            <input
              type="text"
              className="fs-18-14 fw-normal serch-input-box"
              placeholder="Search the catogary,name,comany,etc"
            />
          </div>
        </div>
        <div className="categary-fileld">
          <p className="fs-18-14 fw-normal">Category</p>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">All</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="categary-fileld">
          <p className="fs-18-14 fw-normal">Status</p>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">All</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="search-btn-wrapper">
          <HiOutlineChevronDoubleDown className="downlword" />
          <button className="primary-btn text-center w-100">Search</button>
        </div>
      </div>

      <div className="main-table-frame">
        <div className="table-header">
          <h3 className="fs-24-16 fw-bold">Product Summery</h3>
          <div className="show-column-fild fs-16-13 fw-normal">
            show
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">All COLUMN</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button className="primary-btn text-center ">
            DISPATCH SEARCHED
          </button>
          <div className="paginatin-frame">
            <Pagination>
            
              <Pagination.Item>{<FaAngleLeft />}</Pagination.Item>
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{<FaAngleRight />}</Pagination.Item>
           
            </Pagination>
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                  Id
                </th>
                <th>
                  SHPMENT
                </th>
                <th>
                  DATE
                </th>
                <th>
                  STATUS
                </th>
                <th>
                  CUSTOMEL
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </section>
  );
}
