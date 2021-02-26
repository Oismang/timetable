import { Navigation } from "react-native-navigation";
import { mainRoot, navigationDefaultOptions, registerScreens } from "./src/screens/navigationConfig";

navigationDefaultOptions();
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(await mainRoot());
});