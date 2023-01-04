import { Box, Text, chakra,Wrap} from "@chakra-ui/react"

const ExaminarReview = (prop: {
	examinarReview: {
		examinarName: string, mark: number, feedback:string}}) => {
	console.log(prop.examinarReview)
	return (
		<Box border="1px" borderRadius="md" my="3" p="4">
			<Wrap><Text textAlign="left" color="blue.400" fontSize="lg" fontWeight="medium"><chakra.span color="green.300">Examinar:</chakra.span>  {prop.examinarReview.examinarName}</Text>
				<Text><chakra.span color="green.300">Mark:</chakra.span>  {prop.examinarReview.mark} Out Of 70</Text></Wrap>
		</Box>
	);
};

export default ExaminarReview;