import React, { Component } from 'react'
import logo from '../assets/formicon.png'

export default class Surveyform extends Component {
    continue = (e) => {
		e.preventDefault();
		this.props.nextSection();
	};
    back = (e) => {
		e.preventDefault();
		this.props.prevSection();
	};
  render() {
    const { values, handleChange } = this.props;
    const check = (e) => {
        console.log(values.gender)
        e.preventDefault();
        if (values.givenName === null) {
            alert("Please Enter Name");
        } else if (values.age === null) {
            alert("Please Enter Age");
        } else if (values.gender === null) {
            alert("Please Select Gender");
        } else if (values.self_employed === null) {
            alert("All The Fields are Mandatory");
        } else {
            this.continue(e);
        }
    };
    return (
      <div>
           <div className=" flex items-center  justify-center mt-5 mb-5">
                <img className="h-20 mr-5" src={logo} alt="log"/>
                <h1 className="font-bold sm:1xl text-6xl text-center">General Survey</h1>
            </div>
            <div className="  sm:flex-col sm:mx=5 bg-primary bg-opacity-30 rounded-3xl mx-20 p-5 pt-3">
                <div className=" mx-20 flex items-center justify-between">
                    <label className="sm:1xl text-3xl ">Name</label>
                    <input name="giveName"  value={values.givenName} onChange={handleChange("givenName")} type="text" className="text-large border:2 ml-20 my-5 w-3/4 h-8"></input>
                </div>
                <div className=" mx-20 flex items-center justify-between">
                    <label className=" sm:1xl text-3xl " >Age</label>
                    <input onChange={handleChange("age")} value={values.age}  type="number" className=" border:2 ml-20 my-5 w-3/4 h-8"></input>
                </div>
                <div className=" mx-20 flex items-center justify-between">
                    <label className="text-3xl" >Gender</label>
                    <div  className=" flex-row  flex items-center justify-evenly">
                    <div   className="flex-row flex items-center justify-center">
                        <input name="gender" value={1} onChange={handleChange("gender")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                        <label className=" flex-row sm:1xl text-3xl" name=" yes">Male</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input name="gender" value={0} onChange={handleChange("gender")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label  className="sm:1xl text-3xl " name="no">Female</label>
                    </div>
                </div>
                
                
                
                </div>
                <div className=" mx-20 flex items-center justify-between">
                    <label className="text-3xl" >Are you self employed</label>
                    <div className=" flex-row  flex items-center justify-evenly">
                    <div  className="flex-row flex items-center justify-center">
                        <input name="self_employed" value={1} onChange={handleChange("self_employed")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                        <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input name="self_employed" value={0} onChange={handleChange("self_employed")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label className="sm:1xl text-3xl " name="no">No</label>
                    </div>
                </div>
                </div>
                
                <div className="sm:justify-center flex justify-end">
                <button  onClick={check} className="text-white w-40 h-10 rounded-lg bg-primary right-0 my-5 mr-5 ">Next</button>
                </div>
            </div>
      </div>
    )
  }
}
