import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { MainLayout } from "../layouts/MainLayout";
import { resume } from "../services/resume";

export const Resume = () => {
	return (
		<Box w="100%">
			<MainLayout isMobile={true}>
				<SimpleGrid
					columns={1}
					spacing={4}
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
					mb={["1.5rem", "1.5rem", "1.5rem", "1rem"]}
				>
					<Box
						bgColor="#09090A"
						color="#fff"
						fontFamily="Lato"
						borderRadius="4px"
						width="100%"
						padding="1.5rem"
						marginBottom="3rem"
					>
						<Box>
							<Box display="flex" justifyContent="space-between">
								<Box>
									<Text color="#fff" fontWeight="900" fontSize="2rem">
										Samuel Ogunleye
									</Text>
									<Text
										fontSize="1rem"
										lineHeight="1.8"
										color="gba(255, 255, 255, 0.8)"
										fontWeight="700"
									>
										Frontend Developer
									</Text>
								</Box>
								<Box>
									<a
										href="https://g.com"
										isexternal="true"
										style={{
											boxShadow: "none",
										}}
									>
										<Flex
											alignItems="center"
											color="gba(255, 255, 255, 0.8)"
											fontSize=".85rem"
											fontWeight="400"
										>
											<BiDownload
												style={{
													color: "rgba(255, 255, 255, 0.72)",
													marginRight: ".3rem",
												}}
											/>
											<Text>Download</Text>
										</Flex>
									</a>
								</Box>
							</Box>

							<br />
							<Text
								fontSize="1rem"
								lineHeight="1.8"
								color="rgba(255, 255, 255, 0.5)"
								fontWeight="300"
							>
								Frontend developer, passionate and dedicated in bringing ideas
								from pixels to live scalable products. I develop responsive
								applications with user experience as top priority. I’m always
								ready to adapt according to project specifications irrespective
								of stack.
							</Text>

							<Heading
								as="h5"
								size="sm"
								mt="2rem"
								color="rgba(255, 255, 255, 0.8)"
								position="relative"
								_after={{
									content: `""`,
									width: ["80%", "90%", "91%", "90%"],
									height: "1px",
									background: "rgba(255, 255, 255, 0.5)",
									position: "absolute",
									top: "12px",
									right: "5px",
									outline: "dashed",
									outlineWidth: "thin",
								}}
							>
								Skills{" "}
							</Heading>
							<Text
								mt="1rem"
								fontSize="1rem"
								lineHeight="1.8"
								color="rgba(255, 255, 255, 0.5)"
								fontWeight="300"
								textAlign="justify"
							>
								Html, Css, JavaScript, Bootstrap, Chakra-UI, ReactJS, Styled
								Components, NodeJS, ExpressJS, MongoDB, Heroku, Netlify, Vercel,
								Git, GitHub
							</Text>

							<Heading
								as="h5"
								size="sm"
								mt="2rem"
								color="rgba(255, 255, 255, 0.8)"
								position="relative"
								_after={{
									content: `""`,
									width: ["64%", "85%", "85%", "82%"],
									height: "1px",
									background: "rgba(255, 255, 255, 0.5)",
									position: "absolute",
									top: "12px",
									right: "5px",
									outline: "dashed",
									outlineWidth: "thin",
								}}
							>
								Experience{" "}
							</Heading>
							{resume.map((res) => {
								return (
									<Box key={res.id}>
										<Text
											mt="1rem"
											fontSize="1rem"
											fontWeight="400"
											color="rgba(255, 255, 255, 0.8)"
											textAlign="justify"
										>
											{res.company.toUpperCase()} - <i>{res.role}</i>
										</Text>
										<Text
											color="rgba(255, 255, 255, 0.4)"
											fontSize=".9rem"
											fontWeight="300"
										>
											{res.started} - {!res.ended ? "Present" : res.ended}
										</Text>
										<Text
											mt=".5rem"
											color="rgba(255, 255, 255, 0.5)"
											fontSize="1rem"
											fontWeight="300"
											lineHeight="1.8"
										>
											{res.description}
										</Text>
										<Text
											mt="1rem"
											color="rgba(255, 255, 255, 0.5)"
											fontSize="1rem"
											fontWeight="300"
											lineHeight="1.8"
										>
											{res.achievements.map((achievement) => {
												return (
													<span key={achievement.id}>
														<span style={{ fontSize: "1rem" }}>&#8226;</span>{" "}
														{achievement} <br />
													</span>
												);
											})}
										</Text>
									</Box>
								);
							})}
						</Box>
					</Box>
				</SimpleGrid>
			</MainLayout>
		</Box>
	);
};
