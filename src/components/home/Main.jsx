import {
	Avatar,
	Box,
	Button,
	Flex,
	HStack,
	Link,
	Text,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Main = () => {
	return (
		<Box
			height={["80vh", "80vh", "100vh", "100vh"]}
			padding={["0", "0", "4.5rem", "2.5rem"]}
			marginTop="-2rem"
			display="flex"
			w={["100%", "100%", "100%", "53%"]}
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-evenly"
				alignItems={["center", "center", "center", "flex-start"]}
			>
				<Box px={[".95rem", "1rem", "0", "0"]}>
					<Text
						color="#fff"
						textAlign={["center", "center", "center", "inherit"]}
						fontSize={["2rem", "2rem", "1.7rem", "2rem"]}
						fontFamily="Lato"
						fontWeight="700"
					>
						<span style={{ color: "#EF3E07" }}>Hello,</span> I’m
						<br />
						Samuel Ogunleye.
					</Text>

					<Text
						mt="1rem"
						color="rgba(255, 255, 255, 0.8)"
						textAlign={["center", "center", "center", "justify"]}
						fontFamily="Lato"
						fontSize={["1rem", "1.1rem", "1.1rem", "1rem"]}
						fontWeight="300"
						width={["100%", "100%", "100%", "100%"]}
						lineHeight="1.8"
					>
						I am a Frontend Developer who is passionate about solving problems
						digitally by leveraging on best development tools and materials to
						deliver pixel perfect and blazing fast interfaces.
					</Text>
				</Box>

				<Box>
					<Button
						textDecoration="uppercase"
						variant="outline"
						border="3px solid"
						borderColor="#EF3E07"
						boxShadow="none"
						color="#EF3E07"
						fontSize={["1rem", "1rem", "1rem", "1.2rem"]}
						padding="0 2rem"
						_hover={{ backgroundColor: "#EF3E07", color: "#fff" }}
					>
						Let's Talk
					</Button>
				</Box>

				<Box>
					<HStack>
						<Box style={{ marginRight: "2rem" }}>
							<Wrap>
								<WrapItem>
									<Avatar
										name="Samuel Ogunleye"
										src="https://res.cloudinary.com/sproff/image/upload/v1622707029/Sproff/sam_dkzdkm.jpg"
									/>
								</WrapItem>
							</Wrap>
						</Box>

						<Box>
							<HStack>
								<Box style={{ marginRight: "1rem" }}>
									<Link
										href="https://github.com/Sproff"
										isExternal
										boxShadow="none"
									>
										<Flex alignItems="center" color="#fff">
											<FaGithub
												style={{
													color: "rgba(255, 255, 255, 0.72)",
													marginRight: ".3rem",
												}}
											/>
											<Text>GitHub</Text>
										</Flex>
									</Link>
								</Box>

								<Box style={{ marginRight: "1rem" }}>
									<Link
										href="https://twitter.com/dev_sproff"
										isExternal
										boxShadow="none"
									>
										<Flex alignItems="center" color="#fff">
											<FaTwitter
												style={{
													color: "rgba(255, 255, 255, 0.72)",
													marginRight: ".3rem",
												}}
											/>
											<Text>Twitter</Text>
										</Flex>
									</Link>
								</Box>

								<Box>
									<Link
										href="https://www.linkedin.com/in/samuel-ogunleye-a87493194/"
										isExternal
										boxShadow="none"
									>
										<Flex alignItems="center" color="#fff">
											<FaLinkedin
												style={{
													color: "rgba(255, 255, 255, 0.72)",
													marginRight: ".3rem",
												}}
											/>
											<Text>LinkedIn</Text>
										</Flex>
									</Link>
								</Box>
							</HStack>
						</Box>
					</HStack>
				</Box>
			</Box>
		</Box>
	);
};
