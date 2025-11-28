import React, { useState } from 'react';
import PromptForm from './components/PromptForm';
import PromptPreview from './components/PromptPreview';
import Sidebar from './components/Sidebar';
import { Sparkles } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    sujet: '',
    but: '',
    echeance: '',
    contraintes: '',
    materiel: ''
  });

  const handleSidebarSelect = (field, value) => {
    setFormData(prev => {
      const currentValue = prev[field];
      // If field is empty, just set it. If not, append with a newline.
      const newValue = currentValue ? `${currentValue}\n${value}` : value;
      return { ...prev, [field]: newValue };
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar onSelect={handleSidebarSelect} />
      
      <div className="flex-1 p-4 md:p-8 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center p-2 rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-sm font-mono text-muted-foreground">PROMPT ENGINEERING WORKSPACE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Espace de Prompting
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Transformez vos intentions en directives précises pour votre Chief of Staff IA.
            </p>
          </header>

          <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pb-20">
            <PromptForm formData={formData} setFormData={setFormData} />
            <div className="lg:sticky lg:top-8">
              <PromptPreview formData={formData} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
