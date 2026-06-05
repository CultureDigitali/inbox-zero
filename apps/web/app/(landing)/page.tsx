import type { Metadata } from "next";
import { Testimonials } from "@/components/new-landing/sections/Testimonials";
import { Hero, HeroContent } from "@/app/(landing)/home/Hero";
import { Pricing } from "@/components/new-landing/sections/Pricing";
import { Awards } from "@/components/new-landing/sections/Awards";
import { EverythingElseSection } from "@/components/new-landing/sections/EverythingElseSection";
import { StartedInMinutes } from "@/components/new-landing/sections/StartedInMinutes";
import { BulkUnsubscribe } from "@/components/new-landing/sections/BulkUnsubscribe";
import { OrganizedInbox } from "@/components/new-landing/sections/OrganizedInbox";
import { PreWrittenDrafts } from "@/components/new-landing/sections/PreWrittenDrafts";
import { ManageFromAnywhere } from "@/components/new-landing/sections/ManageFromAnywhere";
import { AutoFileAttachments } from "@/components/new-landing/sections/AutoFileAttachments";
import { BasicLayout } from "@/components/layouts/BasicLayout";
import { FAQs } from "@/app/(landing)/home/FAQs";
import { FinalCTA } from "@/app/(landing)/home/FinalCTA";
import { WordReveal } from "@/components/new-landing/common/WordReveal";
import { env } from "@/env";
import { BRAND_NAME } from "@/utils/branding";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function NewLanding() {
  if (env.NEXT_PUBLIC_BYPASS_PREMIUM_CHECKS) {
    return (
      <BasicLayout>
        <Hero
          title={`${BRAND_NAME} per team self-hosted`}
          subtitle={`Installa ${BRAND_NAME} sulla tua infrastruttura e automatizza la tua casella di posta con il pieno controllo dei dati.`}
        />
      </BasicLayout>
    );
  }

  return (
    <BasicLayout>
      <Hero
        title={
          <WordReveal
            spaceBetween="w-2 md:w-3"
            words={[
              "Conosci",
              "il",
              "tuo",
              "assistente",
              "email",
              "AI",
              <em key="veramente">che</em>,
              "funziona",
            ]}
          />
        }
        subtitle={`${BRAND_NAME} organizza la tua casella di posta e il calendario, prepara bozze di risposte nella tua voce e ti aiuta a raggiungere inbox zero velocemente. Non perdere mai più un'email importante.`}
      >
        <HeroContent />
      </Hero>
      <OrganizedInbox
        title={
          <>
            Organizzata automaticamente.
            <br />
            Non perdere mai più un'email importante.
          </>
        }
        subtitle="Sommerso dalle email? Non sprecare energie cercando di stabilire le priorità. Il nostro assistente AI etichetterà tutto automaticamente."
      />
      <PreWrittenDrafts
        title="Bozze pre-scritte che ti aspettano nella posta in arrivo"
        subtitle="Quando controlli la posta, ogni email che richiede una risposta avrà una bozza pre-compilata nel tuo stile, pronta da inviare."
      />
      <ManageFromAnywhere />
      <StartedInMinutes
        title="Inizia in pochi minuti"
        subtitle="Configurazione con un clic. Inizia subito a organizzare e preparare le risposte."
      />
      <BulkUnsubscribe />
      <AutoFileAttachments />
      <EverythingElseSection />
      <Awards />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <FAQs />
    </BasicLayout>
  );
}
