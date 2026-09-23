import BgImage from "./Components/BgImage.jsx";
import CHISiamo from "./Components/CHISiamo.jsx";
import Connettiti from "./Components/Connettiti.jsx";
import NavbarElements from "./Components/NavbarElements.jsx";
import NavbarLogo from "./Components/NavbarLogo.jsx";
import PercheSIRE from "./Components/PercheSIRE.jsx";
import Resistence from "./Components/Resistence.jsx";
import Scegli from "./Components/Scegli.jsx";
import SIRE from "./Components/SIRE.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Subscribe from "./Subscribe.jsx";

export default function App() {
  return (
    <div>
      <NavbarLogo />
      <NavbarElements />
      <BgImage />
      <CHISiamo />
      <SIRE />
      <Resistence />
      <PercheSIRE />
      <Scegli />
      <Connettiti />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}
