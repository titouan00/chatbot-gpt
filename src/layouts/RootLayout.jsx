import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import './RootLayout.css'

export default function RootLayout() {
    return (
        <div className="outletbody">
            <Header />
            <Outlet />
        </div>
    )
}