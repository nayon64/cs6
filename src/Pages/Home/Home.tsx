import React from 'react';
import Candidate from '../../Componet/Candidate/Candidate';

const Home = () => {


	const candidate = [
		{
			name: "Nayon Roy",
			allMockMark: [{ interviewar: "Helal", mark: 60 }, { interviewar: "Helal", mark: 60 }, { interviewar: "Helal", mark: 60 }],
			projectMark: [{ projectName: "First Project", mark: 8 }, { projectName: "Secound Project", mark: 8 }, { projectName: "Third Project", mark: 8 }],
			projects: [
				{
				projectName: "First", examinars: [{
					examinarName: "Mitul",
					mark: 75,
					feedback: "This Project is good need to more inprove. I believe you upgrade your project recently."
				}, {
					examinarName: "Hamjala",
					mark: 75,
					feedback: "This Project is good need to more inprove. I believe you upgrade your project recently."
				}, {
					examinarName: "Tuku",
					mark: 75,
					feedback: "This Project is good need to more inprove. I believe you upgrade your project recently."
						}]
				},
				{
					projectName: "Second", examinars: [{
						examinarName: "Mitul",
						mark: 75,
						feedback: "This Project is good need to more inprove. I believe you upgrade your project recently."
					}, {
						examinarName: "Mitul",
						mark: 75,
						feedback: "This Project is good need to more inprove. I believe you upgrade your project recently."
					}, {
						examinarName: "Mitul",
						mark: 75,
						feedback: "This Project is good need to more inprove. I believe you upgrade your project recently."
					}]
				}],
			dayOfApply: [{ date: "22-12-22", apply: 21 }, { date: "22-12-22", apply: 21 }, { date: "22-12-22", apply: 21 }, { date: "22-12-22", apply: 21 }, { date:"22-12-22",apply:21}]
		}
	]

	return (
		<div>
			<Candidate candidates={candidate}></Candidate>
		</div>
	);
};

export default Home;