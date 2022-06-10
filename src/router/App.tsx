import { Layout, NotFound } from "components";
import { Home } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App () {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="not-found" element={<NotFound />} />
            </Route>
            <Route path="*" element={<Navigate to="not-found"/>} />
        </Routes>
    )
}