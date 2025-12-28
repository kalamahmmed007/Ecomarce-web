import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex flex-1 flex-col">
                <Navbar />
                <main className="flex-1 p-6">
                    <Container>{children}</Container>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
