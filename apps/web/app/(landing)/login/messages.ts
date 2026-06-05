import { BRAND_NAME, SUPPORT_EMAIL } from "@/utils/branding";

export function getRequiresReconsentDescription(options?: {
  includeSupportText?: boolean;
}) {
  const description = `Accedi di nuovo e approva ogni permesso richiesto. Se la tua organizzazione Microsoft 365 richiede l'approvazione dell'amministratore, chiedi al tuo amministratore di approvare ${BRAND_NAME} prima.`;

  if (!options?.includeSupportText) return description;

  return `${description} Se l'errore persiste, contatta il supporto a ${SUPPORT_EMAIL}`;
}
