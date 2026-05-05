import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import { FaFolderOpen, FaHome } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { ImBlogger } from "react-icons/im";
import { GoProject } from "react-icons/go";

export const MobileNavBar = () => {
	const navLinks = [
		{
			id: 1,
			icon: <FaHome />,
			title: "Home",
			link: "/",
		},
		{
			id: 2,
			icon: <GoProject />,
			title: "Projects",
			link: "/projects",
		},
		{
			id: 3,
			icon: <FaFolderOpen />,
			title: "Resume",
			link: "/resume",
		},
		{
			id: 4,
			icon: <ImBlogger />,
			title: "Blog",
			link: "/blog",
		},
		{
			id: 5,
			icon: <BsFillChatDotsFill />,
			title: "Contact",
			link: "/contact",
		},
	];

	return (
		<Box>
			<HStack
				justifyContent="space-evenly"
				display={["flex", "flex", "flex", "none"]}
				position="fixed"
				bottom="0"
				height="12%"
				width="100%"
				bgColor="#1a1919"
				zIndex="999"
				padding="1.5rem 0"
				borderTop="1px solid rgba(255, 255, 255, 0.08)"
			>
				{navLinks.map((item) => {
					return (
						<NavLink
							key={item.id}
							exact
							to={item.link}
							activeClassName="selected"
						>
							<Box cursor="pointer" display="flex" flexDirection="column" alignItems="center">
								<Box
									className="active_mobile_border mobile_nav_icon"
									borderRadius="8px"
									p=".3rem .5rem"
									display="flex"
									justifyContent="center"
									marginBottom=".15rem"
									fontSize="1.2rem"
								>
									{item.icon}
								</Box>
								<Text
									className="mobile_nav_label"
									fontFamily="Space Grotesk"
									fontSize=".48rem"
									textTransform="uppercase"
									fontWeight="700"
									textAlign="center"
								>
									{item.title}
								</Text>
								<Box
									className="mobile_active_dot"
									width="4px"
									height="4px"
									borderRadius="full"
									mt=".2rem"
									opacity="0"
								/>
							</Box>
						</NavLink>
					);
				})}
			</HStack>
		</Box>
	);
};
