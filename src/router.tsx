import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FormStepOne } from "./pages/FormStepOne";
import { FormStepTwo } from "./pages/FormStepTwo";
import { FormStepThree } from "./pages/FormStepThree";

import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<FormStepOne />} />
          <Route path="/step-two" element={<FormStepTwo />} />
          <Route path="/step-three" element={<FormStepThree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
