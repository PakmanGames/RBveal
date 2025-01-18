import Nav from "./components/Nav";
import Summary from "./components/Summary";
import Account from "./components/Account";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <Summary />
      <Account />
      <Footer />
    </main>
  );
}
