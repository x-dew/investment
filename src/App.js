import './App.css';
import Register from "./register/register";
import Logo from './imgInvestvent/logo.png'
import Invest from './imgInvestvent/invest.png'

function App() {
    return (
        <div className="App">
            <div className='logo'>
                <img className='imgLogo' src={Logo} alt=""/>
                <img className='imgLogoInvest' src={Invest} alt=""/>
            </div>
            <Register/>
        </div>
    );
}

export default App;
