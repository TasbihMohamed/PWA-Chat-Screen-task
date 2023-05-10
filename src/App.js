import React from "react";
import LoadingSkeleton from "./Molecules/LoadingSkeleton";

// import Home from "./Pages/Home";
const HomeLazyLoading=React.lazy(()=>import ("./Pages/Home"))
const App = () => {

  return (
    <React.Suspense fallback={<LoadingSkeleton />}>
      <HomeLazyLoading />
    </React.Suspense>
  );
};

export default App;

