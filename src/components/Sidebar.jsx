import React, { useState } from 'react';
import { 
  User, 
  Target, 
  AlertCircle, 
  FileText, 
  ChevronRight, 
  Layout,
  MessageSquare,
  Zap
} from 'lucide-react';

const categories = [
  {
    id: 'roles',
    label: 'Rôles',
    icon: User,
    items: [
      { label: 'Chief of Staff', value: 'Chief of Staff + Expert du domaine', field: 'sujet' },
      { label: 'Senior Developer', value: 'Senior Full Stack Developer', field: 'sujet' },
      { label: 'Product Manager', value: 'Senior Product Manager', field: 'sujet' },
      { label: 'UX Designer', value: 'Lead UX Designer', field: 'sujet' },
    ]
  },
  {
    id: 'formats',
    label: 'Formats',
    icon: Layout,
    items: [
      { label: 'Plan d\'action', value: 'Plan d\'action détaillé avec étapes et timeline', field: 'but' },
      { label: 'Email', value: 'Email professionnel et concis', field: 'but' },
      { label: 'Documentation', value: 'Documentation technique complète', field: 'but' },
      { label: 'Checklist', value: 'Checklist de vérification', field: 'but' },
    ]
  },
  {
    id: 'tones',
    label: 'Tonalité',
    icon: MessageSquare,
    items: [
      { label: 'Professionnel', value: 'Ton professionnel et direct', field: 'contraintes' },
      { label: 'Didactique', value: 'Ton pédagogique et explicatif', field: 'contraintes' },
      { label: 'Persuasif', value: 'Ton persuasif et engageant', field: 'contraintes' },
    ]
  }
];

const Sidebar = ({ onSelect }) => {
  const [activeCategory, setActiveCategory] = useState('roles');

  return (
    <aside className="w-64 border-r border-border bg-muted/30 h-screen sticky top-0 hidden lg:flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Zap className="w-5 h-5" />
          <span>Prompt.OS</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-6">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                <category.icon className="w-3 h-3" />
                {category.label}
              </h3>
              <div className="space-y-1">
                {category.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => onSelect(item.field, item.value)}
                    className="w-full text-left px-2 py-1.5 text-sm rounded-md hover:bg-secondary text-foreground/80 hover:text-foreground transition-colors group flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          v2.0.0 • Monochrome Edition
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
