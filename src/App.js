import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegions } from './Action';


const App = () => {
  const states = useSelector((state) => state.changeRegions)
  const dispactch = useDispatch();

  const regions = [{ name: "Africa" }, { name: "Asia" }, { name: "Americas" }, { name: "Europe" },];
  
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then((res)=>{
    const country = res.map((e) => {
    let res = e.region === states ? e.name.common : null;
    return res; })
    setCountries(country);
})
  },[states]);

  return (
    <>
    <div className="container col-10 mx-auto col-md-8 mt-4">
        <div className="row">
          <h1 className="text-center text-dark"> Dropdown - Region Country</h1>

      <div className="form-group card card-body my-3">
        <label>Region</label>
        <select
          className="form-select"
          value={states}
          onChange={(e) => dispactch(setRegions(e.target.value))}
          >
          {regions.map((e, key) => {
            return <option key={key}>{e.name}</option>;
          })}
        </select>
      </div>

      <div className="form-group card card-body my-3">
            <label>Country</label>
            <select className="form-select">
              <option>--countries--</option>
              {countries.map((e, key) => {
                if (e !== null) return <option key={key}>{e}</option>;
              })}
         {console.log(countries)}
             
             
            </select>
          </div>
      </div>
      </div>
    </>
  );
}

export default App;
