"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/blog");
  }, []);
};

export default Home;
