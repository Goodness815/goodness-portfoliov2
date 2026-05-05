import {
	Box,
	Button,
	Flex,
	FormControl,
	Input,
	Link,
	Text,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { Redirect } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { MainLayout } from "../layouts/MainLayout";

const contactLinks = [
	{
		icon: <MdEmail size={18} />,
		label: "Email",
		value: "sewogoodness111@gmail.com",
		href: "mailto:sewogoodness111@gmail.com",
	},
	{
		icon: <FaGithub size={18} />,
		label: "GitHub",
		value: "github.com/goodness815",
		href: "https://github.com/goodness815",
	},
	{
		icon: <FaLinkedin size={18} />,
		label: "LinkedIn",
		value: "linkedin.com/in/goodness-sewo",
		href: "https://www.linkedin.com/in/goodness-sewo/",
	},
	{
		icon: <FaTwitter size={18} />,
		label: "Twitter / X",
		value: "@sewogoodness",
		href: "https://x.com/sewogoodness",
	},
];



export const Contact = () => {
	const [submit, handleSubmit] = useForm("xayanlpy");

	if (submit.succeeded) {
		return <Redirect to="/success" />;
	}

	return (
		<Box w="100%">
			<MainLayout isMobile={true}>
				<Box
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
					mb={["5rem", "5rem", "5rem", "1rem"]}
					mt={["3rem", "3rem", "3rem", "1rem"]}
					fontFamily="Space Grotesk"
				>
					{/* Two-column layout on desktop */}
					<Flex
						direction={["column", "column", "column", "row"]}
						gap={["2rem", "2rem", "2rem", "3rem"]}
						align="flex-start"
					>
						{/* LEFT — Info panel */}
						<Box flex="1" minW={["unset", "unset", "unset", "300px"]} maxW={["unset", "unset", "unset", "380px"]}>
							{/* Header */}
							<Box mb="2rem">
								<Text
									fontSize=".7rem"
									fontWeight="700"
									textTransform="uppercase"
									letterSpacing="3px"
									color="rgb(255, 66, 66)"
									mb="0.8rem"
								>
									Get in touch
								</Text>
								<Text
									fontSize={["2rem", "2.2rem", "2.4rem"]}
									fontWeight="900"
									color="rgba(255,255,255,0.92)"
									lineHeight="1.15"
									letterSpacing="-0.5px"
								>
									Let's build something{" "}
									<Box as="span" color="rgb(255, 66, 66)">
										great
									</Box>{" "}
									{/* together. */}
								</Text>
								<Text
									mt="1rem"
									fontSize=".9rem"
									lineHeight="1.9"
									color="rgba(255,255,255,0.4)"
									fontWeight="300"
								>
									Whether you have a project in mind, a role to fill, or just
									want to say hello — my inbox is always open.
								</Text>
							</Box>

							{/* Contact links */}
							<VStack spacing={3} align="stretch">
								{contactLinks.map((item) => {
									return (
										<Link
											key={item.label}
											href={item.href}
											isExternal
											_hover={{ textDecoration: "none" }}
										>
											<Flex
												align="center"
												gap="1rem"
												p="0.9rem 1.1rem"
												bgColor="rgba(24, 22, 22, 0.6)"
												border="1px solid rgba(255,255,255,0.07)"
												borderRadius="8px"
												transition="all 0.2s"
												role="group"
												_hover={{
													border: "1px solid rgba(255, 66, 66, 0.35)",
													bgColor: "rgba(30,28,28,0.9)",
												}}
											>
												<Flex
													align="center"
													justify="center"
													w="36px"
													h="36px"
													borderRadius="8px"
													bg="rgba(255, 66, 66, 0.1)"
													color="rgb(255, 66, 66)"
													flexShrink={0}
												>
													{item.icon}
												</Flex>
												<Box flex="1">
													<Text
														fontSize=".68rem"
														fontWeight="700"
														textTransform="uppercase"
														letterSpacing="1.5px"
														color="rgba(255,255,255,0.3)"
														mb="0.1rem"
													>
														{item.label}
													</Text>
													<Text
														fontSize=".85rem"
														color="rgba(255,255,255,0.7)"
														fontWeight="500"
													>
														{item.value}
													</Text>
												</Box>
												<Box
													color="rgba(255,255,255,0.2)"
													_groupHover={{ color: "rgb(255, 66, 66)" }}
													transition="color 0.2s"
												>
													<HiArrowRight size={14} />
												</Box>
											</Flex>
										</Link>
									);
								})}
							</VStack>
						</Box>

						{/* RIGHT — Form */}
						<Box
							flex="1.4"
							w={["100%", "100%", "100%", "auto"]}
							bgColor="rgba(24, 22, 22, 0.5)"
							border="1px solid rgba(255,255,255,0.07)"
							borderRadius="10px"
							padding={["1.5rem", "1.8rem", "2rem"]}
						>
							<Text
								fontSize=".7rem"
								fontWeight="700"
								textTransform="uppercase"
								letterSpacing="2px"
								color="rgba(255,255,255,0.25)"
								mb="1.5rem"
							>
								Send a message
							</Text>

							<FormControl
								as="form"
								onSubmit={handleSubmit}
								id="contact-form"
								isRequired
								method="post"
							>
								<Flex direction={["column", "row"]} gap="1rem" mb="1rem">
									<Box flex="1">
										<Text
											fontSize=".72rem"
											fontWeight="600"
											color="rgba(255,255,255,0.4)"
											mb="0.4rem"
											textTransform="uppercase"
											letterSpacing="1px"
										>
											Name
										</Text>
										<Input
											type="text"
											id="name"
											name="name"
											aria-required="true"
											required
											placeholder="Goodness Sewo"
											bg="rgba(255,255,255,0.04)"
											border="1px solid rgba(255,255,255,0.1)"
											borderRadius="6px"
											color="rgba(255,255,255,0.85)"
											fontFamily="Space Grotesk"
											fontSize=".9rem"
											_placeholder={{ color: "rgba(255,255,255,0.2)" }}
											_hover={{ borderColor: "rgba(255,255,255,0.2)" }}
											_focus={{ borderColor: "rgb(255, 66, 66)", boxShadow: "0 0 0 1px rgb(255, 66, 66)", bg: "rgba(255,255,255,0.06)" }}
										/>
										<ValidationError
											prefix="Name"
											field="name"
											errors={submit.errors}
										/>
									</Box>
									<Box flex="1">
										<Text
											fontSize=".72rem"
											fontWeight="600"
											color="rgba(255,255,255,0.4)"
											mb="0.4rem"
											textTransform="uppercase"
											letterSpacing="1px"
										>
											Email
										</Text>
										<Input
											type="email"
											id="email"
											name="_replyto"
											aria-required="true"
											required
											placeholder="you@example.com"
											bg="rgba(255,255,255,0.04)"
											border="1px solid rgba(255,255,255,0.1)"
											borderRadius="6px"
											color="rgba(255,255,255,0.85)"
											fontFamily="Space Grotesk"
											fontSize=".9rem"
											_placeholder={{ color: "rgba(255,255,255,0.2)" }}
											_hover={{ borderColor: "rgba(255,255,255,0.2)" }}
											_focus={{ borderColor: "rgb(255, 66, 66)", boxShadow: "0 0 0 1px rgb(255, 66, 66)", bg: "rgba(255,255,255,0.06)" }}
										/>
										<ValidationError
											prefix="Email"
											field="email"
											errors={submit.errors}
										/>
									</Box>
								</Flex>

								<Box mb="1rem">
									<Text
										fontSize=".72rem"
										fontWeight="600"
										color="rgba(255,255,255,0.4)"
										mb="0.4rem"
										textTransform="uppercase"
										letterSpacing="1px"
									>
										Subject
									</Text>
									<Input
										type="text"
										id="subject"
										name="subject"
										placeholder="Project collaboration, job opportunity..."
										bg="rgba(255,255,255,0.04)"
										border="1px solid rgba(255,255,255,0.1)"
										borderRadius="6px"
										color="rgba(255,255,255,0.85)"
										fontFamily="Space Grotesk"
										fontSize=".9rem"
										_placeholder={{ color: "rgba(255,255,255,0.2)" }}
										_hover={{ borderColor: "rgba(255,255,255,0.2)" }}
										_focus={{ borderColor: "rgb(255, 66, 66)", boxShadow: "0 0 0 1px rgb(255, 66, 66)", bg: "rgba(255,255,255,0.06)" }}
									/>
								</Box>

								<Box mb="1.5rem">
									<Text
										fontSize=".72rem"
										fontWeight="600"
										color="rgba(255,255,255,0.4)"
										mb="0.4rem"
										textTransform="uppercase"
										letterSpacing="1px"
									>
										Message
									</Text>
									<Textarea
										id="message"
										name="message"
										required
										rows={7}
										resize="none"
										placeholder="Tell me about your project or idea..."
										bg="rgba(255,255,255,0.04)"
										border="1px solid rgba(255,255,255,0.1)"
										borderRadius="6px"
										color="rgba(255,255,255,0.85)"
										fontFamily="Space Grotesk"
										fontSize=".9rem"
										_placeholder={{ color: "rgba(255,255,255,0.2)" }}
										_hover={{ borderColor: "rgba(255,255,255,0.2)" }}
										_focus={{ borderColor: "rgb(255, 66, 66)", boxShadow: "0 0 0 1px rgb(255, 66, 66)", bg: "rgba(255,255,255,0.06)" }}
									/>
									<ValidationError
										prefix="Message"
										field="message"
										errors={submit.errors}
									/>
								</Box>

								<Button
									type="submit"
									isLoading={submit.submitting}
									loadingText="Sending..."
									disabled={submit.submitting}
									width="100%"
									bg="rgb(255, 66, 66)"
									color="#fff"
									fontFamily="Space Grotesk"
									fontWeight="700"
									fontSize=".9rem"
									letterSpacing="0.5px"
									borderRadius="6px"
									height="48px"
									border="none"
									_hover={{
										bg: "rgb(230, 50, 50)",
										transform: "translateY(-1px)",
										boxShadow: "0 8px 25px rgba(255, 66, 66, 0.3)",
									}}
									_active={{ bg: "rgb(200, 40, 40)", transform: "translateY(0)" }}
									_focus={{ boxShadow: "none" }}
									transition="all 0.2s"
								>
									Send Message →
								</Button>
							</FormControl>
						</Box>
					</Flex>
				</Box>
			</MainLayout>
		</Box>
	);
};
