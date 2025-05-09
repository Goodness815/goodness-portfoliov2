import React, { useEffect, useState } from "react";

// import AnimatedCursor from "react-animated-cursor";
import { Loader } from "./components/common/Loader";
import Routes from "./routes/Routes";

const App = () => {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 5000);
	}, []);

	return (
		<>
			{/* <Routes /> */}
			{loader ? <Loader /> : <Routes />}

			{/* <AnimatedCursor
				innerSize={10}
				outerSize={30}
				color="239, 62, 7"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
			/> */}
		</>
	);
};

export default App;
