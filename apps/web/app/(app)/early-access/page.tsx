"use client";

import Link from "next/link";
import { EarlyAccessFeatures } from "@/app/(app)/early-access/EarlyAccessFeatures";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { isGoogleProvider } from "@/utils/email/provider-types";
import { useAccount } from "@/providers/EmailAccountProvider";

export default function RequestAccessPage() {
  const { provider } = useAccount();

  return (
    <div className="container px-2 pt-2 sm:px-4 sm:pt-8">
      <div className="mx-auto max-w-2xl space-y-4 sm:space-y-8">
        <EarlyAccessFeatures />
        {isGoogleProvider(provider) && (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Categorie mittenti</CardTitle>
                <CardDescription>
                  Le Categorie Mittenti sono una funzionalità che ti permette di
                  categorizzare le email per mittente e di eseguire azioni in
                  blocco o applicare regole.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/smart-categories">Categorie Mittenti</Link>
                </Button>
              </CardContent>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle>Archiviazione in blocco</CardTitle>
                <CardDescription>
                  Archivia le email da più mittenti contemporaneamente,
                  organizzate per categoria.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/bulk-archive">Archivia in Blocco</Link>
                </Button>
              </CardContent>
            </Card> */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Archiviazione rapida in blocco</CardTitle>
                <CardDescription>
                  Archivia rapidamente le email da più mittenti
                  contemporaneamente, raggruppate per livello di confidenza
                  dell'AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/quick-bulk-archive">
                    Archivia Rapida in Blocco
                  </Link>
                </Button>
              </CardContent>
            </Card> */}
          </>
        )}
        <Card>
          <CardHeader>
            <CardTitle>Accesso anticipato</CardTitle>
            <CardDescription>
              Fornisci feedback su quali funzionalità vorresti vedere.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/waitlist" target="_blank">
                Form di Feedback
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
