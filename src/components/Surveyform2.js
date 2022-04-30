import React, { Component } from 'react'
import logo from '../assets/formicon.png'

export default class Surveyform2 extends Component {
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
				values.work_interfere == null ||
				values.family_history === null ||
				values.benefits === null ||
				values.remote_work === null ||
				values.tech_company === null
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
        <label className="sm:1xl text-3xl ml-20">If you have a mental condition,do you think it interferes with your work</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="work_interference" value={3} onChange={handleChange("work_interfere")}  type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name="yes">Often</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="work_interference" value={2} onChange={handleChange("work_interfere")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">Sometimes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="work_interference" value={1} onChange={handleChange("work_interfere")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl" name="notsure">Rarely</label>
                </div>  
                <div className="flex-row flex items-center justify-center">
                    <input name="work_interference" value={0} onChange={handleChange("work_interfere")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl" name="notsure">Never</label>
                </div>   
            </div>
        <label className="sm:1xl text-3xl ml-20">Do you have a family history of mental illness ?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input  name="fam" value={1} onChange={handleChange("family_history")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input  name="fam" value={0} onChange={handleChange("family_history")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">No</label>
                </div>
            </div>
            <label className="sm:1xl text-3xl ml-20">Do you work remotely (outside of an office) at least 50% of the
								time?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="remote" value={1} onChange={handleChange("remote_work")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name="yes">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="remote" value={0} onChange={handleChange("remote_work")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">No</label>
                </div>
            </div>
            <label className="sm:1xl text-3xl ml-20">Is your employer primarily a tech company/organization ?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input name="company" value={1} onChange={handleChange("tech_company")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name="yes">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input name="company" value={0} onChange={handleChange("tech_company")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">No</label>
                </div>
            </div>
            <label className="sm:1xl text-3xl ml-20">Does your employer provide mental health benefits?</label>
            <div className=" flex-row  flex items-center justify-evenly">
                <div  className="flex-row flex items-center justify-center">
                    <input  name="benefits"  value={1} onChange={handleChange("benefits")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                    <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input  name="benefits"  value={0} onChange={handleChange("benefits")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl " name="no">No</label>
                </div>
                <div className="flex-row flex items-center justify-center">
                    <input  name="benefits"  value={2} onChange={handleChange("benefits")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                    <label className="sm:1xl text-3xl" name="notsure">Not Sure</label>
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
