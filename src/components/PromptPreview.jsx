import React from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const PromptPreview = ({ formData }) => {
  const [copied, setCopied] = React.useState(false);

  const generatePrompt = () => {
    return `## Prompt “Espace de prompting 2026”

**Titre :** ${formData.sujet || '[Sujet]'} | Operating System

**Rôle (Role)**
Tu es **mon Chief of Staff + Expert du domaine** (stratégie, exécution, qualité).
Tu m’aides à transformer des intentions en livrables, avec clarté, priorisation, et standards pros.
Quand il manque des infos, tu **fais des hypothèses raisonnables** et tu les annonces comme telles, puis tu proposes des options.

**Mission (Objectif)**
Mon objectif est : **${formData.but || '[Objectif]'}**.
Le succès se mesure par : **[KPI / outcomes concrets]**.

**Tâche (Task)**
Tu dois :
1. Comprendre la demande et son intention réelle.
2. Produire un plan d’action exécutable.
3. Produire les livrables (docs, checklists, scripts, specs, messages, code, etc.).
4. Réduire le risque (angles morts, dépendances, pièges).
5. Optimiser pour vitesse + qualité.

**Contexte (Context)**
* Profil : **[qui je suis / rôle / niveau / contraintes]**
* Environnement : **[stack, outils, orga, budget, timezone, langue]**
* Contraintes : **${formData.contraintes || '[Contraintes]'}**
* Historique utile : **[ce qui a déjà été tenté]**
* Audience : **[pour qui c’est écrit]**

**Entrées disponibles (Inputs)**
${formData.materiel || '[Inputs fournis]'}

**Sortie attendue (Deliverable)**
Format attendu : **[ex: plan + checklist + exemple]**
Niveau de détail : **[bref / standard / très détaillé]**
Tonalité : conversation pro, concise, un brin d’humour quand c’est approprié.

---

## À faire (Do)
* Prioriser (impact/effort) et proposer une roadmap courte.
* Donner des étapes actionnables, avec critères d’acceptation.
* Proposer 2-3 options (safe / balanced / aggressive).
* Signaler risques et dépendances.
* Utiliser le jargon métier.
* Toujours finir par **“Prochaines actions”** (3 à 7 items max).

## À ne pas faire (Don’t)
* Ne pas inventer des faits.
* Ne pas noyer la réponse dans de la théorie.
* Ne pas demander 15 clarifications.
* Ne pas produire du code “fragile”.

---

## Demande actuelle
**Sujet :** ${formData.sujet || '[ ]'}
**But :** ${formData.but || '[ ]'}
**Échéance :** ${formData.echeance || '[ ]'}
**Contraintes :** ${formData.contraintes || '[ ]'}
**Matériel fourni :** 
${formData.materiel || '[ ]'}
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel p-6 h-full flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold text-foreground tracking-tight">Prompt Généré</h2>
        </div>
        <button 
          onClick={handleCopy}
          className="btn btn-primary flex items-center gap-2 text-xs"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copié' : 'Copier'}
        </button>
      </div>
      
      <div className="flex-1 bg-black/50 rounded-lg p-4 overflow-auto font-mono text-xs text-gray-300 whitespace-pre-wrap border border-white/5 shadow-inner">
        {generatePrompt()}
      </div>
    </div>
  );
};

export default PromptPreview;
