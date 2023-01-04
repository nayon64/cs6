import {Box,Text} from "@chakra-ui/react"
import ExaminarReview from "./ExaminarReview";

const Project = (prop:{ project:{projectName:string,examinars: any} }) => {
	console.log(prop.project)
	return (
		<Box>
			<Text textAlign="left" textColor={"gray.600"} fontSize="xl" fontWeight="bold">{prop.project.projectName}</Text>
			<Box>
				{
					prop.project.examinars.map((examinar:any, i:number)=><ExaminarReview key={i} examinarReview={examinar}></ExaminarReview>)
				}
			</Box>
		</Box>
	);
};

export default Project;