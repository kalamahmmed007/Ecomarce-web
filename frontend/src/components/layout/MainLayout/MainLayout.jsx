import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";

const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-gray-50 py-6">
                <Container>{children}</Container>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
