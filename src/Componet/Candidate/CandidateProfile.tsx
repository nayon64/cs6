
import { Container,Box, Avatar, Wrap, WrapItem, Text, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Grid } from '@chakra-ui/react'
import Project from './Project';


const CandidateProfile = (prop: { canditate: any }) => {
	console.log(prop)
	return (
		<Container maxW={"5xl"}>
		<Box>
			<Wrap mb="4">
				<WrapItem>
					<Avatar name='Dan Abrahmov' src='https://i.ibb.co/dtF3sG5/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' />
				</WrapItem>
				<Text fontSize={"2xl"}>{prop.canditate.name}</Text>
			</Wrap>
			<Grid templateColumns='repeat(3, 1fr)' gap={"4"} >
				<Box maxW={"sm"} borderWidth="1px" borderRadius={"lg"} p={"2"}>
				<Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"}  mb={"2"}>Amount Of Application</Text>
				<TableContainer mx={"10"} borderWidth="1px" borderRadius={"lg"}>
					
					<Table variant='simple'>
						
						<Thead>
							<Tr>
								<Th>Date</Th>
								<Th>Amounts</Th>
							</Tr>
						</Thead>
						<Tbody>
							{
								prop.canditate.dayOfApply.map((data:{date:string,apply:number}, i: number) => <Tr key={i}>
									<Td>{data.date}</Td>
									<Td>{ data.apply}</Td>
								</Tr>)
							}
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
				<Box maxW={"sm"} borderWidth="1px" borderRadius={"lg"} p={"2"}>
				<Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"} mb={"2"}>Mock Interview Marks</Text>
				<TableContainer mx={"10"} borderWidth="1px" borderRadius={"lg"}>

					<Table variant='simple'>

						<Thead>
							<Tr>
								<Th>Interviewer</Th>
								<Th>Marks</Th>
							</Tr>
						</Thead>
						<Tbody>
							{
									prop.canditate.allMockMark.map((data: { interviewar: string, mark: number }, i: number) => <Tr key={i}>
										<Td>{data.interviewar}</Td>
									<Td>{data.mark}</Td>
								</Tr>)
							}
						</Tbody>
					</Table>
				</TableContainer>
				</Box>
			</Grid>
			</Box>
			<Box>

				<Text textAlign={"center"} fontSize={"2xl"} fontWeight="bold" my="2">Candidate Projects</Text>
				<Box>
					{
						prop.canditate.projects.map((project: any,i:number)=><Project key={i} project={project}></Project>)
					}
				</Box>
			</Box>
		</Container>
	);
};

export default CandidateProfile;