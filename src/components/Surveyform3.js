import React, { Component } from 'react'
import logo from '../assets/formicon.png'

export default class Surveyform3 extends Component {
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
			if (
				values.care_options == null ||
				values.anonymity === null ||
				values.seek_help === null ||
				values.wellness_program === null
			) {
				alert("All The Field Are Mandatory");
			} else {
				this.continue(e);
			}
		};
    return (
      <div>
          <React.Fragment>
          <div className=" flex items-center  justify-center mt-5 mb-5">
            <img className="h-20 mr-5" src={logo} alt="log"/>
            <h1 className="font-bold sm:1xl text-6xl text-center">General Survey</h1>
        </div>
        <div className="  sm:flex-col flex sm:mx=5 bg-primary bg-opacity-30 rounded-3xl mx-20 p-5 pt-3">
        <label className="sm:1xl text-3xl ml-20">Do you know the options for mental health care your employer
								provides?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="care_options" onChange={handleChange("care_options")}  value={1} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label  className=" flex-row sm:1xl text-3xl">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="care_options" onChange={handleChange("care_options")}  value={0} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label  className="sm:1xl text-3xl ">No</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="care_options" onChange={handleChange("care_options")}  value={values.menemp} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label  className="sm:1xl text-3xl">Not Sure</label>
                </div>   
            </div>
            <label className="sm:1xl text-3xl ml-20">Has your employer ever discussed mental health as part of an
								employee wellness program?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="wellness" value={1}  onChange={handleChange("wellness_program") }type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="wellness" onChange={handleChange("wellness_program")}   value={0} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl ">No</label>
                </div>
            </div>
            <label className="sm:1xl text-3xl ml-20">Does your employer provide resources to learn more about mental
								health issues and how to seek help?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="seek_help" value={1}  onChange={handleChange("seek_help")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" >Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="seek_help" onChange={handleChange("seek_help")}  value={0}  type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl ">No</label>
                </div>
            </div>
            <label className="sm:1xl text-3xl ml-20">Is your anonymity protected if you choose to take advantage of
								mental health or substance abuse treatment</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="anoymity" value={1}  onChange={handleChange("anonymity")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="anoymity" value={0}  onChange={handleChange("anonymity")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " >No</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="anoymity" value={2}  onChange={handleChange("anonymity")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl" >Not Sure</label>
                </div>   
            </div>
            <div className="sm:justify-center flex justify-end">
              <button onClick={check} className="text-white w-40 h-10 rounded-lg bg-primary right-0 my-5 mr-5 ">Next</button>
              <button onClick={this.back} className="text-white w-40 h-10 rounded-lg bg-primary right-0 my-5 mr-5 ">Back</button>
            </div>
            </div>
          </React.Fragment>
      </div>
    )
  }
}
