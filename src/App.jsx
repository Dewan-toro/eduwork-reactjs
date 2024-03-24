// import Counter from "./01_Basic_Component/Counter";
import StylingComponent from "./02_Tugas_Styling_Component";
import "bootstrap/dist/css/bootstrap.min.css";
import FormValidation from "./03_Form_Validation";
import NewsPortalCC from "./04_Lifecycle_Components";
import NewsPortalFC from "./05_Hook";

export default function App() {
  return (
    <>
      {/* <Counter nama="Dewantoro" /> */}
      <StylingComponent />
      <FormValidation />
      <NewsPortalCC />
      <NewsPortalFC />
    </>
  );
}
