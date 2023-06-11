import React, {useState, useContext} from "react";
import axios from "axios";
import DataSharingContext from "../context/data-sharing-context";

const DestinationSearchComponent = () => {

  const [searchForm, updateSearchForm] = useState({
    destinationName : '',
    destinationLocation : ''
  });

  const context = useContext(DataSharingContext);

  const handleInput = (event) => {
    updateSearchForm({...searchForm, [event.target.name] :  event.target.value});
  }

  const SearchDestination = () => {
    console.log(searchForm);

    const url = `http://localhost:4000/list/destination?destinationName=${searchForm.destinationName}`;

    axios.get(url)
      .then((response) => {
        const result = response.data;
        console.log(result);
        context.globalFunction(result);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div
      className="tab-pane show"
      id="v-pills-2"
      role="tabpanel"
      aria-labelledby="v-pills-performance-tab"
    >
      <form action="#" className="search-property-1">
        <div className="row no-gutters">
          <div className="col-lg d-flex">
            <div className="form-group p-4 border-0">
              <label for="#">Destination</label>
              <div className="form-field">
                <div className="icon">
                  <span className="fa fa-search"></span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search place"
                  onChange={handleInput}
                  name="destinationName"
                />
              </div>
            </div>
          </div>
          <div className="col-lg d-flex">
            <div className="form-group p-4 border-0">
              <label for="#">Location/Area</label>
              <div className="form-field">
                <div className="icon">
                  <span className="fa fa-location-arrow"></span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search place"
                  name="destinationLocation"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="col-lg d-flex">
            <div className="form-group d-flex w-100 border-0">
              <div className="form-field w-100 align-items-center d-flex">
                <input
                  type="button"
                  value="Search"
                  className="align-self-stretch form-control btn btn-primary p-0"
                  onClick={() => SearchDestination()}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DestinationSearchComponent;
