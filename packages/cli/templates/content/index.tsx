import { Route, Routes } from "react-router-dom";
import Suspense from "react";
export const App = () => {
  return (
    <Suspense fallback={<>loading</>}>
      <Routes>
        <Route />
      </Routes>
    </Suspense>
  );
};
