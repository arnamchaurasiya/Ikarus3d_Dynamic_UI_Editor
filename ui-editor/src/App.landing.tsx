import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TemplateEditor } from "./components/TemplateEditor/TemplateEditor";
import theme from "./theme";
function AppContent() {
	return (
		
		<Routes>
			<Route
				path="/"
				element={
					
					<TemplateEditor />
				}
			/>
			
		</Routes>
	);
}

function App() {
	return (
		<MantineProvider theme={theme}>
			<BrowserRouter>
				<div style={{ minHeight: "100vh" }}>
					<AppContent />
				</div>
			</BrowserRouter>
		</MantineProvider>
	);
}

export default App;