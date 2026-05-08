import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import { Send } from "lucide-react";

const ListaAttesa = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") ?? "").trim();
    const cognome = String(data.get("cognome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const dataNascita = String(data.get("data_nascita") ?? "").trim();
    const messaggio = String(data.get("messaggio") ?? "").trim();

    try {
      const response = await fetch("/api/lista-attesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, cognome, email, telefono, dataNascita, messaggio }),
      });

      if (response.ok) {
        setSent(true);
        toast.success("La tua richiesta è stata inviata con successo!");
      } else {
        toast.error("Si è verificato un errore durante l'invio.");
      }
    } catch (error) {
      toast.error("Impossibile connettersi al server.");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Iscrizioni 2026/2027"
        title="Lista d'attesa."
        intro="I corsi 2025/2026 sono al completo. Lascia i tuoi dati per essere ricontattato non appena si apriranno le iscrizioni per l'anno 2026/2027."
        cn="候"
      />

      <section className="container-prose pb-24">
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="bg-card border border-border p-10 md:p-12 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Nome" name="nome" required />
              <Field label="Cognome" name="cognome" required />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" required />
              <Field label="Numero di telefono" name="telefono" type="tel" required />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field
                label="Data di nascita"
                name="data_nascita"
                type="date"
                required
              />
            </div>

            <div>
              <label
                htmlFor="messaggio"
                className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2"
              >
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                rows={5}
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-foreground resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-7 py-4 text-sm tracking-wide hover:bg-accent transition-colors duration-500 ease-flow disabled:opacity-50"
              disabled={sent}
            >
              <Send className="h-4 w-4" />
              {sent ? "Inviato" : "Invia richiesta"}
            </button>

            <p className="text-xs text-muted-foreground">
              Inviando il modulo verrà aperto il tuo client di posta con il messaggio
              precompilato verso info@taichiwu.it. I dati non vengono memorizzati su
              questo sito.
            </p>
          </form>
        </Reveal>
      </section>
    </>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-foreground transition-colors"
    />
  </div>
);

export default ListaAttesa;
