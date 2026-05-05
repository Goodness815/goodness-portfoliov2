import {
	Box,
	Flex,
	HStack,
	Link,
	Spacer,
	Text,
} from "@chakra-ui/react";
import React from "react";

import { AiFillEye } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import { projects } from "../../services/projects";
import { MobileNavBar } from "../../layouts/MobileNavBar";

// Split into two columns
const col1 = projects.filter((_, i) => { return i % 2 === 0; });
const col2 = projects.filter((_, i) => { return i % 2 !== 0; });

const ProjectCard = ({ project }) => {
	return (
		<Box
			bgColor="rgba(24, 22, 22, 0.6)"
			color="rgba(255, 255, 255, 0.8)"
			fontFamily="Space Grotesk"
			borderRadius="6px"
			width="100%"
			padding="1.5rem"
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
			mb="1rem"
			border="1px solid rgba(255,255,255,0.07)"
			minHeight="200px"
			transition="all 0.3s ease"
			_hover={{
				border: "1px solid rgba(255, 66, 66, 0.4)",
				transform: "scale(1.02)",
				bgColor: "rgba(30, 28, 28, 0.85)",
			}}
		>
			<Box>
				<Text
					color="rgba(255, 255, 255, 0.9)"
					fontWeight="700"
					fontSize="1rem"
					textTransform="uppercase"
					letterSpacing="0.5px"
					mb="0.4rem"
				>
					{project.title}
				</Text>
				<Text
					fontSize=".8rem"
					lineHeight="1.6"
					color="rgb(255, 66, 66)"
					fontWeight="500"
					mb="0.5rem"
				>
					{project.tools}
				</Text>
				<Text
					fontSize=".88rem"
					lineHeight="1.8"
					color="rgba(255, 255, 255, 0.55)"
					fontWeight="300"
				>
					{project.description}
				</Text>
			</Box>

			<Box color="rgba(255, 255, 255, 0.7)" fontWeight="300" mt="1rem">
				<HStack>
					<Link
						href={project.live_link}
						isExternal
						_focus={{ outline: "none" }}
					>
						<Flex
							alignItems="center"
							color="rgba(255, 255, 255, 0.7)"
							fontSize=".82rem"
							gap="0.3rem"
							_hover={{ color: "rgb(255, 66, 66)" }}
							transition="color 0.2s"
						>
							<AiFillEye />
							<Text>Live</Text>
						</Flex>
					</Link>

					<Spacer />

					{!project.isDisabled && (
						<Link
							href={project.github_link}
							_focus={{ outline: "none" }}
							isExternal
						>
							<Flex
								alignItems="center"
								color="rgba(255, 255, 255, 0.7)"
								fontSize=".82rem"
								gap="0.3rem"
								_hover={{ color: "rgb(255, 66, 66)" }}
								transition="color 0.2s"
							>
								<FaCodeBranch />
								<Text>Code</Text>
							</Flex>
						</Link>
					)}
				</HStack>
			</Box>
		</Box>
	);
};

const ScrollColumn = ({ items, direction = "up", speed = 35 }) => {
	// Duplicate items for seamless loop
	const doubled = [...items, ...items];
	const animName = direction === "up" ? "scrollUp" : "scrollDown";

	return (
		<Box
			flex="1"
			overflow="hidden"
			position="relative"
			height="100%"
			style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }}
		>
			<Box
				style={{
					animation: `${animName} ${speed}s linear infinite`,
					willChange: "transform",
				}}
			>
				{doubled.map((project, idx) => {
					return <ProjectCard key={`${project.title}-${idx}`} project={project} />;
				})}
			</Box>

			<style>{`
				@keyframes scrollUp {
					0% { transform: translateY(0); }
					100% { transform: translateY(-50%); }
				}
				@keyframes scrollDown {
					0% { transform: translateY(-50%); }
					100% { transform: translateY(0); }
				}
			`}</style>
		</Box>
	);
};

export const Projects = () => {
	return (
		<Box w="100%">
			<Box>
				<MobileNavBar />
			</Box>

			{/* Mobile: normal stacked list */}
			<Box
				display={["block", "block", "block", "none"]}
				padding={["2.5rem 1.5rem", "2.5rem"]}
				pb="6rem"
			>
				{projects.map((project, idx) => {
					return <ProjectCard key={idx} project={project} />;
				})}
			</Box>

			{/* Desktop: two-column infinite scroll */}
			<Box
				display={["none", "none", "none", "flex"]}
				gap="1rem"
				padding="1.5rem 2rem"
				height="100vh"
				overflow="hidden"
			>
				<ScrollColumn items={col1} direction="up" speed={40} />
				<ScrollColumn items={col2} direction="down" speed={38} />
			</Box>
		</Box>
	);
};
