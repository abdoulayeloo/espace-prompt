import React, { useState } from 'react';
import PromptForm from './components/PromptForm';
import PromptPreview from './components/PromptPreview';
import { Sparkles } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    sujet: '',
    but: '',
    echeance: '',
    contraintes: '',
    materiel: ''
  });

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="container">
        <header className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4 ring-1 ring-primary/20">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h1 className="heading-xl">Espace de Prompting 2026</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformez vos intentions en directives précises pour votre Chief of Staff IA.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <PromptForm formData={formData} setFormData={setFormData} />
          <div className="lg:sticky lg:top-8 h-[calc(100vh-8rem)]">
            <PromptPreview formData={formData} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
