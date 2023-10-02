import { Outlet } from "react-router-dom";
import { AuthProvider } from "@/providers/Auth";
import { ThemeProvider } from "@/providers/Theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/pt/zod.json";
import i18next from "i18next";
import { z } from "zod";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

i18next.init({
  lng: "pt",
  resources: {
    pt: { zod: translation },
  },
});
z.setErrorMap(zodI18nMap);

export function Root() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
