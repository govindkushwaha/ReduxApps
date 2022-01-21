import React, { Component } from "react";
import { connect } from "react-redux";
import { setRegions } from "../Action/index";
import { regions } from "../mockData";

const mapStateToProps = (props) =>  {
  return { datas: props.changeRegions.temp,
    users: props.changeRegions.state,}
};

class Users extends Component {
   
  render() {
    return (
      <div>
        <label for="region">Region</label>
        <select id="region"  
        value={this.props.users}
        onChange={ (e)=> this.props.setRegions(e.target.value) }
        >
          {regions.map((u, key) => {
            return <option key={key}>{u.name}</option>;
          })}
        </select>

        <label for="country">Country</label>
        <select id="country" className="">
          <option>--countries--</option>
          {this.props.datas.map((e, key) => {
            if (e !== null) return <option key={key}>{e}</option>;
          })}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    setRegions :(e) =>{dispatch(setRegions(e))}
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);