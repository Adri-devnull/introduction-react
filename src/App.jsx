import CalculateCircle from "./components/calculate-circle-area/CalculateCircle";
import FarenToCelsius from "./components/calculate-faren-to-celsius/FarenToCelsius";
import Squarearea from "./components/calculate-square-area/Squarearea";
import Calculatetriangle from "./components/calculate-triangle-area/Calculatetriangle";
import CelsiusToFaren from "./components/celsius-to-farengeit/CelsiusToFaren";
import Sayhello from "./components/sayhello/Sayhello";
import TotalPrice from "./components/total-price/TotalPrice";
import WriteMessage from "./components/write-message/WriteMessage";

const App = () => {
	return (<>
		<Sayhello name="Adrian" />
		<Squarearea side={5} />
		<Calculatetriangle base={5} height={3} />
		<CalculateCircle ratio={10} />
		<CelsiusToFaren degrees={20} />
		<FarenToCelsius degrees={10} />
		<TotalPrice price={20} />
		<WriteMessage name='Carlos' material='clavos' size={26} note='Los ha dejado pagados' />
	</>);
};

export default App;
