import { useNavigate, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/login";
import SignUp from "@/components/signup";
import { UrlState } from "@/context";
import { useEffect } from "react";

const Auth = () => {

  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");
  const navigate = useNavigate();

  const {isAuthenticated,loading} = UrlState();

  useEffect(()=>{
    if(isAuthenticated && !loading){
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isAuthenticated,loading]);
  return (
    <div className="mt-20 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
        {longLink?"Hold up! Let's login first..":"Login / SignUp"}
        </h1>
        <Tabs defaultValue="login" className="w-[400px]">
  <TabsList className="grid w-md grid-cols-2">
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="signup">SignUp</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><Login/></TabsContent>
  <TabsContent value="signup"><SignUp/></TabsContent>
</Tabs>

    </div>
  )
}

export default Auth;
