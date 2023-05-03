import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Switch from "react-switch";

export default function ThemeToggler() {
  const themeContext = useContext(ThemeContext);
 
   return (
     <label>
       <Switch
         checked={themeContext.savedTheme==="light" }
         onChange={themeContext.toggleTheme}
         handleDiameter={28}
         draggable={false}
         offColor="#A7A1FF"
         onColor="#08f"
         offHandleColor="#08f"
         onHandleColor="#A7A1FF"
         height={28}
         width={70}
         borderRadius={35}
         activeBoxShadow="0px 0px 1px 2px #fffc35"
         uncheckedIcon={
           <div
             style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               height: "100%",
               fontSize: 20,
             }}
           >
             🌞
           </div>
         }
         checkedIcon={
           <div
             style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               height: "100%",
               fontSize: 20,
             }}
           >
             🌙
           </div>
         }
         uncheckedHandleIcon={
           <div
             style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               height: "100%",
               fontSize: 20,
             }}
           >
             🌙
           </div>
         }
         checkedHandleIcon={
           <div
             style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               height: "100%",
               fontSize: 20,
             }}
           >
             🌞
           </div>
         }
       />
     </label>
   );
}


