import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/app/dashboard");
  }, []);
  return <div></div>;
};

export default Index;
