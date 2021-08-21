import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    });
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    let toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#333634";
            document.body.style.color = "white";
            showAlert("Dark Mode has been enabled", "success");
            setMyStyle({
                color: "white",
                backgroundColor: "#333634",
            });
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            showAlert("Light Mode has been enabled", "success");
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                
            });
        }
    };

    return (
        <>
            <Router>
                <Navbar title="My-App" aboutText="About" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Switch>
                        <Route exact path="/about">
                            <About myStyle = {myStyle} />
                        </Route>

                        <Route exact path="/">
                            <TextForm heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
