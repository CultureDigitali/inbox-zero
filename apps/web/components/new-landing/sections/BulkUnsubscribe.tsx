import Image from "next/image";
import {
  Section,
  SectionContent,
} from "@/components/new-landing/common/Section";
import { CardWrapper } from "@/components/new-landing/common/CardWrapper";
import {
  SectionHeading,
  SectionSubtitle,
} from "@/components/new-landing/common/Typography";

export function BulkUnsubscribe() {
  return (
    <Section>
      <SectionHeading>
        Raggiungi Inbox Zero velocemente.
        <br />
        Disiscriviti in blocco dalle email che non leggi mai.
      </SectionHeading>
      <SectionSubtitle>
        Scopri quali email non leggi mai e disiscriviti e archiviale con un clic.
      </SectionSubtitle>
      <SectionContent className="flex justify-center items-center">
        <CardWrapper
          padding="xs"
          rounded="md"
          className="hidden md:block md:mx-20 lg:mx-40 xl:mx-52"
        >
          <Image
            src="/images/new-landing/bulk-unsubscribe.png"
            alt="disiscrizione in blocco"
            width={1000}
            height={1000}
          />
        </CardWrapper>
        <div className="flex flex-col gap-2">
          <CardWrapper padding="xs" rounded="md" className="block md:hidden">
            <Image
              src="/images/new-landing/bulk-unsubscribe-mobile.png"
              alt="disiscrizione in blocco"
              width={1000}
              height={1000}
            />
          </CardWrapper>
        </div>
      </SectionContent>
    </Section>
  );
}
