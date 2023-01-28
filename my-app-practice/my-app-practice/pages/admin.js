import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    Axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        setIsLogin(true);
      } else {
        router.push("/login");
      }
    });
  }

  function logout() {
    Axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/login");
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      admin
      {isLogin && <button onClick={logout}>로그아웃</button>}
    </div>
  );
}
