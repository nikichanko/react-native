import { AppRegistry } from "react-native";
import App from "./mproject/App";
AppRegistry.registerComponent("Casino", () => App);
//This is what you pasted
if (window.document) {
    AppRegistry.runApplication("Casino", {
        initialProps: {},
        rootTag: document.getElementById("react-root")
    });
}
