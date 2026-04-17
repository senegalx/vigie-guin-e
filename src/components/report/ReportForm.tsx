import { useState } from "react";
import { Lock, Send, Upload, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitReport } from "@/services/api";

const incidentTypes = [
  "Tir par balle",
  "Kidnapping nocturne",
  "Enlèvement à domicile",
  "Disparition forcée",
  "Manifestation réprimée",
  "Détention arbitraire",
  "Décès en détention",
  "Autre",
];

export function ReportForm() {
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      incidentType: type,
      location: String(fd.get("location") ?? ""),
      date: String(fd.get("date") ?? ""),
      description: String(fd.get("description") ?? ""),
      evidenceFileNames: files.map((f) => f.name),
    };
    if (!payload.incidentType || !payload.location || !payload.date || !payload.description) {
      toast.error("Merci de compléter tous les champs requis.");
      return;
    }
    setSubmitting(true);
    try {
      await submitReport(payload);
      toast.success("Signalement transmis", {
        description: "Nous expurgeons toute donnée identifiante avant traitement.",
      });
      (e.target as HTMLFormElement).reset();
      setType("");
      setFiles([]);
    } catch {
      toast.error("Échec de l'envoi. Réessayez ou utilisez le canal Signal.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg border border-status-resolved/30 bg-status-resolved/10 p-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-status-resolved" />
          <div className="text-sm text-foreground">
            <div className="font-semibold">Canal anonyme</div>
            <p className="mt-0.5 text-muted-foreground">
              Aucune donnée d'identification (IP, métadonnées) n'est conservée. Toute donnée
              permettant de vous identifier est expurgée avant publication.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="type">
          Type d'incident <span className="text-status-deceased">*</span>
        </Label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger id="type">
            <SelectValue placeholder="Sélectionnez un type" />
          </SelectTrigger>
          <SelectContent>
            {incidentTypes.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="location">
            Lieu (quartier, commune) <span className="text-status-deceased">*</span>
          </Label>
          <Input id="location" name="location" placeholder="Ex. Hamdallaye, Conakry" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="date">
            Date des faits <span className="text-status-deceased">*</span>
          </Label>
          <Input id="date" name="date" type="date" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">
          Description factuelle <span className="text-status-deceased">*</span>
        </Label>
        <Textarea
          id="description"
          name="description"
          rows={6}
          placeholder="Décrivez les faits observés (heure, déroulement, unités présentes, témoins…). Évitez toute information identifiant des tiers vulnérables."
        />
      </div>

      <div className="grid gap-2">
        <Label>Preuves (optionnel)</Label>
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/40 p-6 text-center transition-colors hover:border-primary/40 hover:bg-muted">
          <Upload className="h-6 w-6 text-muted-foreground" />
          <div className="text-sm font-medium text-foreground">
            Cliquez pour ajouter des fichiers
          </div>
          <div className="text-xs text-muted-foreground">
            Photos, vidéos, documents · max 25 Mo / fichier
          </div>
          <input
            type="file"
            multiple
            className="sr-only"
            onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
          />
        </label>
        {files.length > 0 && (
          <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
            {files.map((f) => (
              <li key={f.name} className="truncate">
                · {f.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          Transmission chiffrée · données expurgées
        </p>
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? (
            "Envoi en cours…"
          ) : (
            <>
              <Send className="h-4 w-4" />
              Transmettre le signalement
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
