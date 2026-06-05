# Localizzazione Italiana di Inbox Zero

## Riepilogo

Questo documento descrive il lavoro di traduzione in italiano del progetto Inbox Zero, fork di [elie222/inbox-zero](https://github.com/elie222/inbox-zero).

## Lavoro Completato

### File di Configurazione Principale
- ✅ `apps/web/app/layout.tsx` - Cambiato `lang="en"` a `lang="it"`, tradotti title, description, JSON-LD structured data e feature list

### Landing Page
- ✅ `apps/web/app/(landing)/page.tsx` - Home page principale
- ✅ `apps/web/app/(landing)/home/Hero.tsx` - Sezione hero con video
- ✅ `apps/web/app/(landing)/home/FAQs.tsx` - Domande frequenti (6 FAQ tradotte)
- ✅ `apps/web/app/(landing)/home/FinalCTA.tsx` - Call to action finale
- ✅ `apps/web/app/(landing)/home/Footer.tsx` - Footer completo con tutte le voci di navigazione

### Componenti UI Landing
- ✅ `apps/web/components/new-landing/sections/Header.tsx` - Header con bottoni Login/Get Started
- ✅ `apps/web/components/new-landing/sections/Footer.tsx` - Footer con social links
- ✅ `apps/web/components/new-landing/sections/BulkUnsubscribe.tsx` - Sezione disiscrizione in blocco
- ✅ `apps/web/components/new-landing/sections/Pricing.tsx` - Sezione prezzi completa

### Autenticazione e Onboarding
- ✅ `apps/web/app/(landing)/login/page.tsx` - Pagina di login con tutti i messaggi di errore
- ✅ `apps/web/app/(landing)/login/messages.ts` - Messaggi di re-consentimento Microsoft
- ✅ `apps/web/app/(landing)/welcome/page.tsx` - Pagina di benvenuto onboarding

### Pagine di Errore
- ✅ `apps/web/app/global-error.tsx` - Error handler globale (cambiato `lang="en"` a `lang="it"`)
- ✅ `apps/web/app/not-found.tsx` - Pagina 404

## File Ancora da Tradurre

Visto che il progetto contiene **2943 file**, la traduzione completa richiede un lavoro sistematico che può essere fatto in più sessioni. Le aree principali ancora da tradurre sono:

### 1. App Protette (`apps/web/app/(app)/`)
Circa 15+ pagine con funzionalità core dell'applicazione:
- `accounts/` - Gestione account email
- `admin/` - Pannello amministrazione
- `config/` - Configurazione regole
- `settings/` - Impostazioni utente
- `[emailAccountId]/` - Pagine specifiche per account email
- `reply-zero/`, `bulk-unsubscriber/`, `clean-inbox/`, ecc.

### 2. Componenti UI
- `apps/web/components/ui/` - Componenti base (alcuni testi sono in inglese)
- `apps/web/components/email/` - Template email
- `apps/web/components/FeatureAnnouncements/` - Annunci funzionalità

### 3. Email Templates
- `apps/web/components/email/` - Template per email transazionali e di onboarding
- Messaggi di benvenuto
- Conferme unsubscribe
- Notifiche

### 4. Prompt AI e Risposte
- File in `apps/web/utils/llms/` - Prompt per l'AI assistant
- Risposte predefinite del chatbot
- Regole pre-configurate

### 5. Marketing/SEO Pages
- `apps/web/app/(landing)/` (cartelle rimanenti):
  - `pricing/page.tsx`
  - `home/` (altri file)
  - `oss-friends/`
  - `app-review/`
  - `connect-mailbox/`
  - `thank-you/`
  - `welcome-upgrade/`
  - `welcome-redirect/`

### 6. Documentazione
- `README.md` (principale)
- `docs/` (se presente)
- Commenti nel codice

## Strategia di Traduzione Consigliata

### Opzione A: Traduzione Manuale Progressiva
1. Partire dalle pagine più visibili
2. Tradurre in lotti di 10-20 file per sessione
3. Testare ogni modifica

### Opzione B: Sistema i18n Completo (Consigliato per il futuro)
Per una gestione scalabile, si consiglia di implementare un sistema di internazionalizzazione:

```bash
# Installare next-intl
pnpm add next-intl
```

Poi:
1. Creare `apps/web/messages/it.json` e `apps/web/messages/en.json`
2. Configurare il middleware per la rilevazione della lingua
3. Sostituire le stringhe hardcoded con `useTranslations()` o `getTranslations()`

Vedi: [Next.js i18n docs](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

### Opzione C: Traduzione Massiva con Strumenti Automatici
Strumenti consigliati:
- **i18n-ai-translate** - Strumento CLI per tradurre file JSON
- **ChatGPT/Claude API** - Per traduzioni contestuali
- **Crowdin** o **Lokalise** - Piattaforme di localizzazione
- **BabelEdit** - Editor visuale per file di traduzione

## Glossario di Traduzione

| Inglese | Italiano |
|---------|----------|
| Inbox Zero | Inbox Zero (mantenuto) |
| Email Assistant | Assistente Email |
| Bulk Unsubscribe | Disiscrizione in Blocco |
| Cold Email | Email Indesiderata / Email Fredda |
| Reply Zero | Reply Zero (mantenuto) |
| Smart Filing | Archiviazione Intelligente |
| Pre-drafted replies | Bozze pre-compilate |
| Reach inbox zero | Raggiungere inbox zero |
| Pricing | Prezzi |
| Login | Accedi |
| Sign up | Registrati |
| Sign in | Accedi |
| Sign out | Esci |
| Settings | Impostazioni |
| Dashboard | Dashboard (mantenuto) |
| Newsletter | Newsletter (mantenuto) |
| Mailbox | Casella di posta |
| Subject | Oggetto |
| Attachment | Allegato |
| Forward | Inoltra |
| Archive | Archivia |
| Snooze | Posponi |
| Label | Etichetta |
| Rule | Regola |
| Onboarding | Onboarding (o "configurazione iniziale") |
| Welcome | Benvenuto |
| Free trial | Prova gratuita |
| Cancel | Annulla |
| Refund | Rimborso |
| Support | Supporto |
| Documentation | Documentazione |
| Features | Funzionalità |
| Integrations | Integrazioni |
| Slack | Slack (mantenuto) |
| Telegram | Telegram (mantenuto) |
| Outlook | Outlook (mantenuto) |
| Gmail | Gmail (mantenuto) |
| Google Workspace | Google Workspace (mantenuto) |
| Microsoft 365 | Microsoft 365 (mantenuto) |
| AI Assistant | Assistente AI |
| Open source | Open source (mantenuto) |

## Note Tecniche

1. **Apostrofi in JSX**: In JSX, gli apostrofi diretti come `l'email` possono causare problemi. Usare:
   - `l{`'`}email` 
   - Oppure racchiudere in `{"L'email"}`
   - Oppure usare caratteri unicode: `l\u0027email`

2. **String interpolation**: Mantenere il template literal dove presente:
   - Inglese: `Welcome to ${BRAND_NAME}`
   - Italiano: `Benvenuto in ${BRAND_NAME}`

3. **Plurali**: In italiano i plurali sono diversi dall'inglese (es. "email" rimane "email" al plurale).

4. **Caratteri accentati**: Mantenere sempre gli accenti (è, à, ì, ò,ù).

5. **html lang attribute**: Cambiato da `en` a `it` in `apps/web/app/layout.tsx` e `apps/web/app/global-error.tsx`.

## Come Continuare la Traduzione

Per continuare la traduzione nelle prossime sessioni:

1. Identificare il file da tradurre
2. Leggere il file originale inglese
3. Tradurre mantenendo la struttura del codice (commenti, template literals, props, ecc.)
4. Testare il componente nell'applicazione
5. Fare commit separati per area funzionale

### Comandi Utili

```bash
# Cercare stringhe inglesi comuni nei file
grep -r "Sign in" apps/web/
grep -r "Welcome" apps/web/
grep -r "Get started" apps/web/

# Trovare tutti i file .tsx con testo inglese
find apps/web -name "*.tsx" | head -50
```

## Contribuire

Sentiti libero di continuare la traduzione e fare push delle modifiche sul fork.
