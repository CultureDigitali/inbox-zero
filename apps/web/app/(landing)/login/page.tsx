import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LoginForm } from "@/app/(landing)/login/LoginForm";
import { getRequiresReconsentDescription } from "@/app/(landing)/login/messages";
import { env } from "@/env";
import { auth } from "@/utils/auth";
import { isGoogleOauthEmulationEnabled } from "@/utils/google/oauth";
import { getEnabledLoginProviders } from "@/utils/oauth/login-providers";
import { AlertBasic } from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { WELCOME_PATH } from "@/utils/config";
import { CrispChatLoggedOutVisible } from "@/components/CrispChat";
import { MutedText } from "@/components/Typography";
import { normalizeInternalPath } from "@/utils/path";
import {
  BRAND_NAME,
  SUPPORT_EMAIL,
  getBrandTitle,
  getPossessiveBrandName,
} from "@/utils/branding";

export const metadata: Metadata = {
  title: getBrandTitle("Accedi"),
  description: `Accedi a ${BRAND_NAME}.`,
  alternates: { canonical: "/login" },
};

export default async function AuthenticationPage(props: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const session = await auth();
  const nextPath = normalizeInternalPath(searchParams?.next);
  const isSelfHosted = env.NEXT_PUBLIC_BYPASS_PREMIUM_CHECKS;

  if (session?.user && !searchParams?.error) {
    redirect(nextPath ?? WELCOME_PATH);
  }

  const enabledProviders = Array.from(getEnabledLoginProviders());

  return (
    <div className="flex h-screen flex-col justify-center text-foreground">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col text-center">
          <h1 className="font-title text-2xl text-foreground">Accedi</h1>
          <p className="mt-4 text-muted-foreground">
            Il tuo assistente personale AI per le email.
          </p>
        </div>
        <div className="mt-4">
          <Suspense>
            <LoginForm
              enabledProviders={enabledProviders}
              useGoogleOauthEmulator={isGoogleOauthEmulationEnabled()}
            />
          </Suspense>
        </div>

        {searchParams?.error && <ErrorAlert error={searchParams?.error} />}

        {!isSelfHosted ? (
          <MutedText className="px-8 pt-10 text-center">
            Cliccando su continua, accetti i nostri{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Termini di Servizio
            </Link>{" "}
            e la{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Privacy Policy
            </Link>
            .
          </MutedText>
        ) : null}

        <LoginFooter
          isSelfHosted={isSelfHosted}
          selfHostedLoginFooterText={
            env.NEXT_PUBLIC_SELF_HOSTED_LOGIN_FOOTER_TEXT || undefined
          }
        />
      </div>
    </div>
  );
}

function LoginFooter({
  isSelfHosted,
  selfHostedLoginFooterText,
}: {
  isSelfHosted?: boolean;
  selfHostedLoginFooterText?: string;
}) {
  if (isSelfHosted && selfHostedLoginFooterText !== undefined) {
    const trimmedFooterText = selfHostedLoginFooterText.trim();
    if (!trimmedFooterText || trimmedFooterText.toLowerCase() === "none") {
      return null;
    }

    return (
      <MutedText className="whitespace-pre-line px-4 pt-10 text-center">
        {selfHostedLoginFooterText}
      </MutedText>
    );
  }

  return (
    <MutedText
      className={
        isSelfHosted ? "px-4 pt-10 text-center" : "px-4 pt-4 text-center"
      }
    >
      L{`'`}uso e il trasferimento delle informazioni ricevute dalle API di
      Google a qualsiasi altra app da parte di {getPossessiveBrandName()} saranno
      conformi alla{" "}
      <a
        href="https://developers.google.com/terms/api-services-user-data-policy"
        className="underline underline-offset-4 hover:text-foreground"
      >
        Policy dei Servizi API di Google
      </a>
      , inclusi i requisiti di Limited Use.
    </MutedText>
  );
}

function ErrorAlert({ error }: { error: string }) {
  if (error === "RequiresReconsent") {
    return (
      <AlertBasic
        variant="destructive"
        title="I permessi devono essere aggiornati"
        description={getRequiresReconsentDescription({
          includeSupportText: true,
        })}
      />
    );
  }

  if (error === "OAuthAccountNotLinked") {
    return (
      <AlertBasic
        variant="destructive"
        title="Account già collegato a un altro utente"
        description={
          <>
            <span>Puoi unire gli account.</span>
            <Button asChild className="mt-2">
              <Link href="/accounts">Unisci account</Link>
            </Button>
          </>
        }
      />
    );
  }

  if (error === "email_already_linked") {
    return (
      <AlertBasic
        variant="destructive"
        title="Email già collegata"
        description={`Questo indirizzo email è già collegato a un altro account ${BRAND_NAME}. Accedi con l'account originale, o usa un indirizzo email diverso. Se l'errore persiste, contatta il supporto a ${SUPPORT_EMAIL}`}
      />
    );
  }

  return (
    <>
      <AlertBasic
        variant="destructive"
        title="Errore di accesso"
        description={`C'è stato un errore durante l'accesso. Riprova ad accedere. Se l'errore persiste, contatta il supporto a ${SUPPORT_EMAIL}`}
      />
      <Suspense>
        <CrispChatLoggedOutVisible />
      </Suspense>
    </>
  );
}
