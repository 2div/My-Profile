"use client"
/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";

  export default function MyCal() {
	useEffect(()=>{
	  (async function () {
		const cal: any = await getCalApi({"namespace":"30min"});
		cal("floatingButton", {"calLink":"mdiv.io/30min","buttonText":"Book Meeting","buttonColor":"#2d8bef"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  };
  