import React, { Component } from "react";
import logo from "../assets/formicon.png";
import { Navigate } from "react-router-dom";
import Result from "./Result";
import Result1 from "./Result1";

export default class Submit extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextSection();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevSection();
	};
	revert = (e) => {
		e.preventDefault();
		this.props.revert();
	};
	handleTreat = (vals) => (e) => {
		e.preventDefault();
		this.props.treatment(vals);
	};
	state = {
		result: false,
		redirectss: false,
	};

	render() {
		const { values } = this.props;
		const { result } = this.state;
		const { redirectss } = this.state;
		const {
			values: {
				step,
				givenName,
				age,
				gender,
				self_employed,
				family_history,
				work_interfere,
				remote_work,
				tech_company,
				benefits,
				care_options,
				wellness_program,
				seek_help,
				anonymity,
				leave,
				mental_health_consequence,
				phys_health_consequence,
				coworkers,
				supervisor,
				mental_health_interview,
				phys_health_interview,
				mental_vs_physical,
				obs_consequence,
				treatment,
			},
		} = this.props;
		let treat;
		// const redirect=e=>{
		//   e.preventDefault();
		//   this.setState({ redirectss: true });
		//   console.log(redirectss);
		// }
		const link="https://umatter-backend.herokuapp.com/"
		const submit = (e) => {
			e.preventDefault();

			fetch(`${link}postSurveyData`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					age: parseInt(age),
					gender: parseInt(gender),
					self_employed: parseInt(self_employed),
					family_history: parseInt(family_history),
					work_interfere: parseInt(work_interfere),
					remote_work: parseInt(remote_work),
					tech_company: parseInt(tech_company),
					benefits: parseInt(benefits),
					care_options: parseInt(care_options),
					wellness_program: parseInt(wellness_program),
					seek_help: parseInt(seek_help),
					anonymity: parseInt(anonymity),
					leave: parseInt(leave),
					mental_health_consequence: parseInt(mental_health_consequence),
					phys_health_consequence: parseInt(phys_health_consequence),
					coworkers: parseInt(coworkers),
					supervisor: parseInt(supervisor),
					mental_health_interview: parseInt(mental_health_interview),
					phys_health_interview: parseInt(phys_health_interview),
					mental_vs_physical: parseInt(mental_vs_physical),
					obs_consequence: parseInt(obs_consequence),
				}),
			})
				.then((response) => response.json())
				.then((json) => {
					console.log(json);
					const sd = json.msg;
					console.log(sd);
					treat = json.msg.toString();
					console.log(treat);
					values.treatment = treat;
					this.setState({
						result: true,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		};
		return (
			<>
				{result === false ? (
					<div>
						<div className="sm:justify-center flex justify-end">
							<div className=" flex items-center  justify-center mt-5 mb-5">
								<img className="h-20 mr-5" src={logo} alt="log" />
								<h1 className="font-bold ml-2 text-6xl text-center">
									Confirmation Page
								</h1>
							</div>
							<div className="mt-80 flex justify-center ">
								<button
									onClick={submit}
									className="text-white w-40 h-10 rounded-lg bg-primary  my-5 mr-3 "
								>
									Submit
								</button>
								<button
									onClick={this.back}
									className="text-white w-40 h-10 rounded-lg bg-primary  my-5 mr-3 "
								>
									Back
								</button>
							</div>
						</div>
					</div>
				) : (
					<>
						{treatment === "0" ? (
							<Navigate to="/result" />
						) : (
							<Navigate to="/result1" />
						)}
					</>
				)}
			</>
		);
	}
}
