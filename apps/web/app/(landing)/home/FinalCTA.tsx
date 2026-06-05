import { CallToAction } from "@/components/new-landing/CallToAction";
import { PatternBanner } from "@/components/new-landing/PatternBanner";
import { BRAND_NAME } from "@/utils/branding";

export function FinalCTA() {
  return (
    <PatternBanner
      title={
        <>
          Recupera un'ora al giorno.
          <br />
          {`Inizia a usare ${BRAND_NAME}.`}
        </>
      }
      subtitle="Meno tempo nella posta in arrivo. Più tempo per ciò che conta davvero."
    >
      <CallToAction
        text="Inizia gratis"
        buttonSize="lg"
        className="mt-6"
      />
    </PatternBanner>
  );
}
