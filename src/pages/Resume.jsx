import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { MainLayout } from "../layouts/MainLayout";

const experience = [
	{
		company: "Maotronics Systems",
		role: "Senior Software Engineer",
		period: "Sept 2023 – Present",
		location: "Ibadan, Nigeria",
		bullets: [
			"Developed and maintained scalable web applications integrating proprietary hardware and software in Agritech, Off-Grid Systems, AI, and IoT.",
			"Designed robust backend systems leveraging modern frameworks and databases for efficient data processing and real-time analytics.",
			"Integrated API services for hardware-software communication enabling real-time data collection and remote system management.",
			"Collaborated with hardware engineers and data scientists to create cohesive, end-to-end technology solutions.",
		],
	},
	{
		company: "aTrace",
		role: "Software Engineer (Part-time)",
		period: "Jan 2025 – Present",
		location: "Remote, Nigeria",
		bullets: [
			"Engineered and scaled logistics visibility platforms powering real-time shipment tracking and operational insights.",
			"Integrated external and internal APIs to streamline device communication, shipment telemetry, and remote diagnostics.",
			"Collaborated closely with logistics experts and data scientists to deliver seamless, cross-platform features.",
		],
	},
	{
		company: "Ministry of Innovation, Science & Digital Economy (MISDE) — Ekiti State",
		role: "Software Engineer – Frontend",
		period: "April 2024 – Dec 2025",
		location: "On-Site, Nigeria",
		bullets: [
			"Modernised existing state products to industry-standard technology.",
			"Built and implemented state-scale projects from ideation to completion, now operating several state facilities.",
			"Developed an inter-ministry communication system; solved budget allocation, tracking, and approval transparency for the Governor's office.",
			"Digitized raw data into efficient databases ensuring compatibility between legacy and new system users.",
		],
	},
	{
		company: "Google Developers (GDSC) Lead '23",
		role: "Community Lead",
		period: "Jul 2023 – Aug 2024",
		location: "On-Site, Nigeria",
		bullets: [
			"Led teams building innovative projects leveraging Google technologies to address real-world challenges.",
			"Managed the club efficiently — team building, goal-driven inspiration, and community outreach.",
			"Forged connections with tech companies, facilitating guest lectures, workshops, and internship opportunities.",
		],
	},
	{
		company: "FireSwitch Technologies",
		role: "Software Engineer",
		period: "Apr 2021 – Aug 2023",
		location: "Remote, Nigeria",
		bullets: [
			"Optimised and managed existing codebase, improving older versions.",
			"Created web-based products with great user interfaces to represent the brand.",
			"Designed and developed responsive applications that solve targeted problems.",
		],
	},
];

const techSkills = [
	"React",
	"Next.js",
	"TypeScript",
	"JavaScript",
	"Node.js",
	"Express.js",
	"MongoDB",
	"PostgreSQL",
	"GraphQL",
	"REST API",
	"tRPC",
	"Redis",
	"Socket.io",
	"Redux / RTK",
	"Zustand",
	"Tailwind CSS",
	"Chakra UI",
	"Docker",
	"AWS",
	"Firebase",
	"Git / GitHub",
	"Jest",
	"Agile / Scrum",
];

const resumeLink =
	"https://docs.google.com/document/d/1F_ryFuDTHBUN-hljexwNvuODHWYi48J4/edit?usp=drive_link&ouid=117335783367300901923&rtpof=true&sd=true";

export const Resume = () => {
	return (
		<Box w="100%">
			<MainLayout isMobile={true}>
				<Box
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
					mb={["4rem", "4rem", "4rem", "1rem"]}
					mt={["3rem", "3rem", "3rem", "1rem"]}
					fontFamily="Space Grotesk"
				>
					{/* Header */}
					<Box
						bgColor="rgba(24, 22, 22, 0.5)"
						borderRadius="6px"
						padding="1.5rem"
						mb="1.5rem"
						border="1px solid rgba(255,255,255,0.07)"
					>
						<Flex justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap="1rem">
							<Box>
								<Text
									color="rgba(255, 255, 255, 0.95)"
									fontWeight="900"
									fontSize={["1.8rem", "2rem", "2.2rem"]}
									lineHeight="1.1"
								>
									Goodness Sewo
								</Text>
								<Text
									fontSize="1rem"
									color="rgb(255, 66, 66)"
									fontWeight="700"
									mt="0.3rem"
								>
									Software Engineer · 4+ Years Experience
								</Text>
								<Text
									fontSize=".85rem"
									color="rgba(255,255,255,0.4)"
									mt="0.2rem"
								>
									sewogoodness111@gmail.com · +234 (905) 222 2556
								</Text>
							</Box>

							<Link
								href={resumeLink}
								isExternal
								style={{ boxShadow: "none" }}
							>
								<Flex
									alignItems="center"
									gap="0.4rem"
									border="1px solid rgba(255,66,66,0.5)"
									borderRadius="4px"
									px="0.9rem"
									py="0.45rem"
									color="rgba(255, 255, 255, 0.8)"
									fontSize=".85rem"
									fontWeight="500"
									_hover={{ bgColor: "rgb(255,66,66)", color: "#fff" }}
									transition="all 0.2s"
								>
									<BiDownload />
									<Text>Download CV</Text>
								</Flex>
							</Link>
						</Flex>

						<Text
							fontSize=".92rem"
							lineHeight="2"
							color="rgba(255, 255, 255, 0.6)"
							fontWeight="300"
							mt="1.2rem"
						>
							Dedicated software engineer with over 4 years of experience, adept at leading teams and crafting full-stack applications. Committed to creating scalable, high-performing software experiences that drive user engagement and satisfaction.
						</Text>
					</Box>

					{/* Experience */}
					<Box mb="1.5rem">
						<Text
							fontSize=".7rem"
							fontWeight="700"
							textTransform="uppercase"
							letterSpacing="2px"
							color="rgba(255,255,255,0.3)"
							mb="1rem"
						>
							Experience
						</Text>

						{experience.map((job, idx) => {
							return (
								<Box
								key={idx}
								bgColor="rgba(24, 22, 22, 0.5)"
								borderRadius="6px"
								padding="1.3rem 1.5rem"
								mb="0.85rem"
								border="1px solid rgba(255,255,255,0.07)"
								_hover={{ border: "1px solid rgba(255,66,66,0.2)" }}
								transition="border 0.2s"
							>
								<Flex
									justifyContent="space-between"
									alignItems="flex-start"
									flexWrap="wrap"
									gap="0.3rem"
									mb="0.6rem"
								>
									<Box>
										<Text
											color="rgba(255, 255, 255, 0.9)"
											fontWeight="700"
											fontSize=".95rem"
										>
											{job.role}
										</Text>
										<Text
											color="rgb(255, 66, 66)"
											fontWeight="600"
											fontSize=".82rem"
										>
											{job.company}
										</Text>
									</Box>
									<Box textAlign={["left", "right"]} mt={["0.2rem", "0"]}>
										<Text
											color="rgba(255,255,255,0.4)"
											fontSize=".78rem"
											fontWeight="400"
										>
											{job.period}
										</Text>
										<Text
											color="rgba(255,255,255,0.25)"
											fontSize=".75rem"
										>
											{job.location}
										</Text>
									</Box>
								</Flex>

								<Box as="ul" pl="1.2rem" mt="0.4rem">
									{job.bullets.map((b, i) => {
										return (
											<Box
												as="li"
												key={i}
												fontSize=".85rem"
												lineHeight="1.9"
												color="rgba(255,255,255,0.5)"
												fontWeight="300"
												mb="0.2rem"
											>
												{b}
											</Box>
										);
									})}
								</Box>
							</Box>
							);
							})}
					</Box>

					{/* Education */}
					<Box mb="1.5rem">
						<Text
							fontSize=".7rem"
							fontWeight="700"
							textTransform="uppercase"
							letterSpacing="2px"
							color="rgba(255,255,255,0.3)"
							mb="1rem"
						>
							Education
						</Text>
						<Box
							bgColor="rgba(24, 22, 22, 0.5)"
							borderRadius="6px"
							padding="1.3rem 1.5rem"
							border="1px solid rgba(255,255,255,0.07)"
						>
							<Flex justifyContent="space-between" flexWrap="wrap" gap="0.3rem">
								<Box>
									<Text color="rgba(255,255,255,0.9)" fontWeight="700" fontSize=".95rem">
										B.Sc. Computer Science
									</Text>
									<Text color="rgb(255, 66, 66)" fontWeight="600" fontSize=".82rem">
										Federal University Oye-Ekiti, Nigeria
									</Text>
								</Box>
								<Text color="rgba(255,255,255,0.4)" fontSize=".78rem" mt={["0.2rem", "0"]}>
									Aug 2021 – Jun 2025
								</Text>
							</Flex>
						</Box>
					</Box>

					{/* Skills */}
					<Box>
						<Text
							fontSize=".7rem"
							fontWeight="700"
							textTransform="uppercase"
							letterSpacing="2px"
							color="rgba(255,255,255,0.3)"
							mb="1rem"
						>
							Technical Skills
						</Text>
						<SimpleGrid columns={["2", "3", "4", "4", "5"]} spacing={3}>
							{techSkills.map((skill) => {
								return (
									<Box
										key={skill}
									bg="rgba(24, 22, 22, 0.5)"
									borderLeft="3px solid rgb(255, 66, 66)"
									borderRadius="0 4px 4px 0"
									p=".45rem .7rem"
									fontSize=".82rem"
									fontWeight="600"
									color="rgba(255,255,255,0.75)"
									border="1px solid rgba(255,255,255,0.07)"
									borderLeftColor="rgb(255, 66, 66)"
									_hover={{ borderLeftColor: "rgb(255, 100, 100)", color: "#fff" }}
									transition="all 0.2s"
								>
									{skill}
									</Box>
								);
							})}
						</SimpleGrid>
					</Box>
				</Box>
			</MainLayout>
		</Box>
	);
};
