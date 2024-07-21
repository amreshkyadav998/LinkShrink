/* eslint-disable react/prop-types */
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {UrlState} from "@/context";
import {BarLoader} from "react-spinners";

function RequireAuth({children}) {
  const navigate = useNavigate();

  const {loading, isAuthenticated} = UrlState();

  useEffect(() => {
    if (!isAuthenticated && loading === false) navigate("/auth");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, loading]);

  if (loading) return <BarLoader width={"100%"} color="#36d7b7" />;

  if (isAuthenticated) return children;
}

export default RequireAuth;