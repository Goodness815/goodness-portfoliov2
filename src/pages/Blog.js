import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MainLayout } from "../layouts/MainLayout";

const Blog = () => {
	return (
		<Box w="100%">
			<MainLayout isMobile={true}>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					minHeight="80vh"
					padding={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
				>
					<VStack spacing={6} textAlign="center">
						<Box
							fontSize={["3rem", "4rem", "5rem"]}
							lineHeight="1"
							mb="0.5rem"
						>
							✍️
						</Box>
						<Text
							fontFamily="Space Grotesk"
							fontSize={["1.6rem", "2rem", "2.4rem"]}
							fontWeight="700"
							color="rgba(255, 255, 255, 0.9)"
							letterSpacing="-0.5px"
						>
							Watch out for this space.
						</Text>
						<Text
							fontFamily="Space Grotesk"
							fontSize={["0.9rem", "1rem", "1.1rem"]}
							fontWeight="300"
							color="rgba(255, 255, 255, 0.45)"
							maxW="420px"
							lineHeight="1.8"
						>
							I'll be releasing some blogs soon. Stay tuned, good things are
							coming.
						</Text>
						<Box
							mt="1rem"
							width="48px"
							height="3px"
							bgGradient="linear(to-r, rgb(255, 66, 66), rgba(255, 66, 66, 0.2))"
							borderRadius="full"
						/>
					</VStack>
				</Box>
			</MainLayout>
		</Box>
	);
};

export default Blog;
