import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { NextUIProvider } from "@nextui-org/system";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <NextUIProvider><Component {...pageProps} /></NextUIProvider>;
};

export default api.withTRPC(MyApp);
