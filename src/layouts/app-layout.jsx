import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        {/* {Header} */}
        {/* {/body} */}
        <Header/>
        <Outlet/>
      </main>

      {/* Footer */}
      <div className="p-10 text-center bg-gray-800 mt-10">
         Made with 💖 by Amy
      </div>
    </div>
  )
}

export default AppLayout;
