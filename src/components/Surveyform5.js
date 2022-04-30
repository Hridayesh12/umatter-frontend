import React, { Component } from 'react'
import logo from '../assets/formicon.png'

export default class Surveyform5 extends Component {
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
            values.mental_health_interview === null ||
            values.phys_health_interview === null ||
            values.obs_consequence === null ||
            values.mental_vs_physical === null
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
        <label className="sm:1xl text-3xl ml-20">Would you bring up a mental health issue with a potential
								employer in an interview?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="men_health_interview" value={1} onChange={handleChange("mental_health_interview")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="men_health_interview" value={0} onChange={handleChange("mental_health_interview")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">No</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="men_health_interview" value={2} onChange={handleChange("mental_health_interview")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl" name="notsure">Maybe</label>
                </div>   
            </div>
            <label className="sm:1xl text-3xl ml-20">Would you bring up a physical health issue with a potential
								employer in an interview?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="phys_health_interview" value={1}  onChange={handleChange("phys_health_interview")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="phys_health_interview" value={0}  onChange={handleChange("phys_health_interview")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">No</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="phys_health_interview" value={2}  onChange={handleChange("phys_health_interview")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">Maybe</label>
                </div>
            </div>
            <label className="sm:1xl text-3xl ml-20">Do you feel that your employer takes mental health as seriously
								as physical health?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="mental_vs_physical" onChange={handleChange("mental_vs_physical")} value={1} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="mental_vs_physical" onChange={handleChange("mental_vs_physical")} value={0} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">No</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="mental_vs_physical" onChange={handleChange("mental_vs_physical")} value={2} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">Dont Know</label>
                </div>
            </div>
            <label className="sm:1xl text-3xl ml-20">Have you heard of or observed negative consequences for
								coworkers with mental health conditions in your organization</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input  onChange={handleChange("obs_consequence")} name="obs" value={1} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="obs"  onChange={handleChange("obs_consequence")} value={0} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " >No</label>
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
