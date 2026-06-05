"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ErrorPage } from "@/components/ErrorPage";
import { BasicLayout } from "@/components/layouts/BasicLayout";
import { createClientLogger } from "@/utils/logger-client";

const logger = createClientLogger("not-found");

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    logger.warn("Pagina non trovata", { pathname });
  }, [pathname]);

  return (
    <BasicLayout>
      <ErrorPage
        title="Pagina non trovata"
        description="La pagina che stai cercando non è stata trovata."
      />
    </BasicLayout>
  );
}
