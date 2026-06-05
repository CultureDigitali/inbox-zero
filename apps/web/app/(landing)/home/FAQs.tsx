import { Anchor } from "@/components/new-landing/common/Anchor";
import { Card, CardContent } from "@/components/new-landing/common/Card";
import { CardWrapper } from "@/components/new-landing/common/CardWrapper";
import {
  Section,
  SectionContent,
} from "@/components/new-landing/common/Section";
import {
  Paragraph,
  SectionHeading,
} from "@/components/new-landing/common/Typography";
import { env } from "@/env";
import { BRAND_NAME } from "@/utils/branding";

const faqs: {
  question: string;
  answer: React.ReactNode;
  answerText?: string;
}[] = [
  {
    question: `Quali provider email supporta ${BRAND_NAME}?`,
    answer:
      "Supportiamo account email Gmail, Google Workspace e Microsoft Outlook.",
  },
  {
    question: "Come posso richiedere una funzionalità?",
    answer: (
      <span>
        Scrivici una email o apri una issue su{" "}
        <Anchor href="/github" newTab>
          GitHub
        </Anchor>
        . Saremo felici di ascoltare come possiamo migliorare la tua esperienza email.
      </span>
    ),
    answerText:
      "Scrivici una email o apri una issue su GitHub. Saremo felici di ascoltare come possiamo migliorare la tua esperienza email.",
  },
  {
    question: `${BRAND_NAME} sostituirà il mio client email attuale?`,
    answer: `No! ${BRAND_NAME} non è un client email. Viene utilizzato insieme al tuo client email esistente. Usi Google o Outlook normalmente.`,
  },
  {
    question: "Il codice è open-source?",
    answer: (
      <span>
        Sì! Puoi vedere l'intero codice sorgente dell'app inbox zero nel nostro{" "}
        <Anchor href="/github" newTab>
          repository GitHub
        </Anchor>
        .
      </span>
    ),
    answerText:
      "Sì! Puoi vedere l'intero codice sorgente dell'app inbox zero nel nostro repository GitHub.",
  },
  {
    question: "Offrite rimborsi?",
    answer: (
      <span>
        Sì, se pensi che non ti abbiamo fornito valore, inviaci una{" "}
        <Anchor href={`mailto:${env.NEXT_PUBLIC_SUPPORT_EMAIL}`}>email</Anchor>{" "}
        entro 14 giorni dall'aggiornamento e ti rimborseremo.
      </span>
    ),
    answerText:
      "Sì, se pensi che non ti abbiamo fornito valore, inviaci una email entro 14 giorni dall'aggiornamento e ti rimborseremo.",
  },
  {
    question: `Posso provare ${BRAND_NAME} gratuitamente?`,
    answer:
      "Assolutamente, abbiamo una prova gratuita di 7 giorni su tutti i nostri piani così puoi provarlo subito, senza carta di credito!",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs
    .map((faq) => {
      const text = typeof faq.answer === "string" ? faq.answer : faq.answerText;
      if (!text) return null;
      return {
        "@type": "Question" as const,
        name: faq.question,
        acceptedAnswer: { "@type": "Answer" as const, text },
      };
    })
    .filter(Boolean),
};

export function FAQs() {
  return (
    <Section>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON.stringify on controlled object is safe
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SectionHeading>Domande frequenti</SectionHeading>
      <SectionContent>
        <CardWrapper>
          <dl className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <Card
                variant="extra-rounding"
                className="gap-4"
                key={faq.question}
              >
                <CardContent>
                  <Paragraph
                    as="dt"
                    color="gray-900"
                    className="font-semibold tracking-tight mb-4"
                  >
                    {faq.question}
                  </Paragraph>
                  <dd>
                    <Paragraph>{faq.answer}</Paragraph>
                  </dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </CardWrapper>
      </SectionContent>
    </Section>
  );
}
