import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PostDetials from "./pages/PostDetials";

const Post = lazy(() => import('./pages/Post'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/post/:postId" element={<PostDetials />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
