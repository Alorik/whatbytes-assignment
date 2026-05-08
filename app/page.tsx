import { Suspense } from "react";
import HomePage from "./HomePage";

export default function Page() {
  return (
    // homepage
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}
