// import MainPage from './10w/MainPage';
// import Toggle from './10w/Toggle';
// import LoginControl from './10w/LoginControl';
// import LandingPage from './12w/LandingPage';
// import AttendanceBook from './12w/AttendanceBook';
// import NumberList from './12w/NumberList';
// import NameForm from './12w/NameForm';
// import BoilingVerdict from './13w/BoilingVerict';
// import SignUp from './13w/SignUp';
// import TemperatureInput from './13w/TemperatureInput';
// import Calculator from './14w/Calculator';
// import WelcomeDialog from './14w/WelcomeDialog';

import SplitPane from './14w/SplitPane';

function App() {
    return (
        <div>
            {/* <LandingPage /> */}
            {/* <NumberList /> */}
            {/* <AttendanceBook /> */}
            {/* <NameForm /> */}
            {/* <SignUp /> */}
            {/* <BoilingVerdict /> */}
            {/* <TemperatureInput /> */}
            {/* <Calculator /> */}
            {/* <WelcomeDialog /> */}
            <SplitPane left={<Contacts />} right={<Chat />} />
        </div>
    );
}

export default App;
