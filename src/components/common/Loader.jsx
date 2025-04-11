import React from "react";
import { Box } from "@chakra-ui/react";

export const Loader = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <svg
                className="loader"
                width="100%"
                height="100%"
                viewBox="0 0 800 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-outline"
                >
                    GOODNESS
                </text>
            </svg>
        </Box>
    );
};
