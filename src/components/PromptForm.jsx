import React from 'react';
import { Send, Calendar, Target, AlertCircle, FileText, Layers } from 'lucide-react';

const PromptForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="glass-panel p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-6 text-primary">
        <Layers className="w-6 h-6" />
        <h2 className="text-xl font-bold text-foreground">Détails de la demande</h2>
      </div>

      <div className="space-y-4">
        <div className="input-group">
          <label className="label flex items-center gap-2">
            <FileText className="w-4 h-4" /> Sujet
          </label>
          <input
            type="text"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            className="input"
            placeholder="Ex: Stratégie Marketing 2026"
          />
        </div>

        <div className="input-group">
          <label className="label flex items-center gap-2">
            <Target className="w-4 h-4" /> But
          </label>
          <textarea
            name="but"
            value={formData.but}
            onChange={handleChange}
            className="textarea h-24 resize-none"
            placeholder="Quel est l'objectif principal ?"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="input-group">
            <label className="label flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Échéance
            </label>
            <input
              type="text"
              name="echeance"
              value={formData.echeance}
              onChange={handleChange}
              className="input"
              placeholder="Ex: Fin Q1 2026"
            />
          </div>

          <div className="input-group">
            <label className="label flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Contraintes
            </label>
            <input
              type="text"
              name="contraintes"
              value={formData.contraintes}
              onChange={handleChange}
              className="input"
              placeholder="Budget, Tech, Langue..."
            />
          </div>
        </div>

        <div className="input-group">
          <label className="label flex items-center gap-2">
            <FileText className="w-4 h-4" /> Matériel fourni
          </label>
          <textarea
            name="materiel"
            value={formData.materiel}
            onChange={handleChange}
            className="textarea h-32 resize-none"
            placeholder="Collez ici les docs, liens, ou contextes..."
          />
        </div>
      </div>
    </div>
  );
};

export default PromptForm;
