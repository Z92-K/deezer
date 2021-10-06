import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Screen from "./Screens/Screen"
import Callback from "./Screens/PlayaScreen"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({ windowWidth, windowHeight });
    }

    render() {
        const { windowWidth } = this.state;

        const styles = {
            white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            topBarHeight: 40,
            footerMenuHeight: 50,
            showFooterMenuText: windowWidth > 500,
            showSidebar: windowWidth > 768,
            sidebarWidth: windowWidth < 1100 ? 50 : 150,
            sidebarCollapsed: windowWidth < 1100
        };

        return (
            <Router>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact>
                        <Screen style={styles} />
                    </Route>
                    <Route path="/callback" exact>
                        <Callback/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;