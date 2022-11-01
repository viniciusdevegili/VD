import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/navigation/index";



export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}