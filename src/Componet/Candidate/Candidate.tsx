import React from 'react';
import CandidateProfile from './CandidateProfile';

const Candidate = (props: { candidates: any }) => {
	console.log(props.candidates)
	return (
		<div>
			<h1>Candiate</h1>
			<div>
				{
					props.candidates.map((candidate: object, i: number) => <CandidateProfile key={i} canditate={candidate}></CandidateProfile>)
				}
			</div>
		</div>
	);
};

export default Candidate;