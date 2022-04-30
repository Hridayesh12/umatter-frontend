import React, { Component } from 'react'
import logo from '../assets/formicon.png'

export default class Surveyform4 extends Component {
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
    const check=e=>{
        if((values.leave === null)||(values.mental_health_consequence === null)||(values.phys_health_consequence === null)||(values.coworkers === null)||(values.supervisor === null)){
          alert("All The Field Are Mandatory")
        }
        else{
          this.continue(e);
        }
      }
    return (
      <div>
          <React.Fragment>
            <div className=" flex items-center  justify-center mt-5 mb-5">
                <img className="h-20 mr-5" src={logo} alt="log"/>
                <h1 className="font-bold sm:1xl text-6xl text-center">General Survey</h1>
            </div>
            <div className="  sm:flex-col flex sm:mx=5 bg-primary bg-opacity-30 rounded-3xl mx-20 p-5 pt-3">
            <label className="sm:1xl text-3xl ml-20">How easy is it for you to take medical leave for a mental health condition?</label>
                <div className=" flex-row  flex items-center justify-evenly">
                    <div  className="flex-row flex items-center justify-center">
                        <input name="leave" value={1} onChange={handleChange("leave")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                        <label className=" flex-row sm:1xl text-3xl" name=" yes">Somewhat easy</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input name="leave" onChange={handleChange("leave")} value={3} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label  className="sm:1xl text-3xl " name="no">Somewhat Difficult</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input name="leave" onChange={handleChange("leave")} value={2} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label  className="sm:1xl text-3xl " name="no">Don't Know</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input name="leave" onChange={handleChange("leave")} value={0} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label  className="sm:1xl text-3xl " name="no">Very Easy</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input name="leave" onChange={handleChange("leave")} value={4} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label  className="sm:1xl text-3xl " name="no">Very Difficult</label>
                    </div>
                </div>
                <label className="sm:1xl text-3xl ml-20">Do you think that discussing a mental health issue with your employer would have negative consequences?</label>
                <div className=" flex-row  flex items-center justify-evenly">
                    <div  className="flex-row flex items-center justify-center">
                        <input value={1} name="men_health" onChange={handleChange("mental_health_consequence")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                        <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input  value={0} name="men_health" onChange={handleChange("mental_health_consequence")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label className="sm:1xl text-3xl " name="no">No</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input  value={2} name="men_health" onChange={handleChange("mental_health_consequence")} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label className="sm:1xl text-3xl " name="no">Maybe</label>
                    </div>
                </div>
                <label className="sm:1xl text-3xl ml-20">Has your employer ever discussed physical health as part of an
                                    employee wellness program?</label>
                <div className=" flex-row  flex items-center justify-evenly">
                    <div  className="flex-row flex items-center justify-center">
                        <input name="phys_health" value={1} onChange={handleChange("phys_health_consequence") } type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                        <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input onChange={handleChange("phys_health_consequence")} name="phys_health" value={0} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label  className="sm:1xl text-3xl " name="no">No</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input onChange={handleChange("phys_health_consequence")}  name="phys_health" value={2} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label className="sm:1xl text-3xl " name="no">Maybe</label>
                    </div>
                </div>
                <label className="sm:1xl text-3xl ml-20">Would you be willing to discuss a mental health issue with your coworkers?</label>
                <div className=" flex-row  flex items-center justify-evenly">
                    <div  className="flex-row flex items-center justify-center">
                        <input name="coworker" value={1} onChange={handleChange("coworkers")}type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                        <label className=" flex-row sm:1xl text-3xl" name=" yes">Yes</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input onChange={handleChange("coworkers")} name="coworker" value={0} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label  className="sm:1xl text-3xl " name="no">No</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input  onChange={handleChange("coworkers")} name="coworker" value={2} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label className="sm:1xl text-3xl " name="some">Some of them</label>
                    </div>
                </div>
                <label className="sm:1xl text-3xl ml-20">Would you be willing to discuss a mental health issue with your direct supervisor(s)?</label>
                <div className=" flex-row  flex items-center justify-evenly">
                    <div  className="flex-row flex items-center justify-center">
                        <input name="supervisor" value={1} onChange={handleChange("supervisor")} type="radio" className=" text-medium border:2 ml-2 my-5 w-6 h-8 "/>
                        <label className=" flex-row sm:1xl text-3xl" name="yes">Yes</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input onChange={handleChange("supervisor")} name="supervisor" value={0} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label  className="sm:1xl text-3xl " name="no">No</label>
                    </div>
                    <div className="flex-row flex items-center justify-center">
                        <input onChange={handleChange("supervisor")} name="supervisor" value={2} type="radio" className="text-medium border:2 ml-1 my-5 w-6 h-8"/>
                        <label  className="sm:1xl text-3xl " name="some">Some of them</label>
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
