
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Contatos } from "./pages/Contatos";
import { Servicos } from "./pages/Servicos";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/contatos" element={<Contatos />}/>
                <Route path="/Servicos" element={<Servicos />}/>
            </Routes>
        </Router>
    )
}