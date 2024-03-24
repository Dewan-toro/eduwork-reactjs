// import Counter from "./01_Basic_Component/Counter";
// import StylingComponent from "./02_Tugas_Styling_Component";
import "bootstrap/dist/css/bootstrap.min.css";
import FormValidation from "./03_Form_Validation";
import NavbarComponent from "./02_Tugas_Styling_Component/navbar";
import NewsPortal from "./04_Lifecycle_Components";

export default function App() {
  return (
    <>
      {/* <Counter nama="Dewantoro" /> */}
      {/* <StylingComponent /> */}
      <NavbarComponent />
      <FormValidation />
      <NewsPortal />
    </>
  );
}
