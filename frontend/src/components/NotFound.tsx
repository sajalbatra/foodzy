// // src/components/NotFound.tsx


// const NotFound = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-[#474747] text-[#ffffff]">
//       <h1 className="text-6xl font-bold">404</h1>
//       <p className="mt-4 text-lg">Page Not Found</p>
//       <a href="/" className="mt-8 text-lg underline">
//         Go back to Home
//       </a>
//     </div>
//   );
// };

// export default NotFound;

import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
