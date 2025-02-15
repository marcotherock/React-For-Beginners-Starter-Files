import React from "react";
import Header from "./Header"
import Inventory from "./Inventory"
import Order from "./Order"

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Catch of The Day"/>                    
                </div>
                <Inventory/>
                <Order/>
            </div>
        );
    }
}

export default App;