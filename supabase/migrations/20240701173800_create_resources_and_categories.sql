-- Create the categories table
CREATE TABLE public.categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Create the resources table
CREATE TABLE public.resources (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL, -- e.g., 'N8N', 'Make', 'WebApp'
  url TEXT NOT NULL,
  button_text TEXT NOT NULL,
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security for both tables
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access
CREATE POLICY "Allow public read access to categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access to resources" ON public.resources FOR SELECT USING (true);

-- Insert the categories first
INSERT INTO public.categories (name) VALUES
('N8N'),
('Make'),
('Plantillas Web');

-- Insert the resources, referencing the categories
-- Note: We use subqueries to get the category IDs dynamically
INSERT INTO public.resources (title, category_id, description, icon_name, url, button_text)
VALUES
  ('Onboarding Automatizado de Clientes', (SELECT id FROM public.categories WHERE name = 'N8N'), 'Workflow para automatizar la bienvenida a nuevos clientes, desde el email inicial a la creación de tareas.', 'Workflow', '#', 'Ver Workflow'),
  ('Landing Page Minimalista para Proyectos', (SELECT id FROM public.categories WHERE name = 'Plantillas Web'), 'Plantilla HTML y Tailwind CSS lista para usar. Lanza una página de presentación para tus proyectos de forma rápida y elegante.', 'Code', '#', 'Obtener Plantilla'),
  ('Sincronización Trello-Calendar', (SELECT id FROM public.categories WHERE name = 'Make'), 'Escenario para mantener tus tableros de Trello y tu Google Calendar perfectamente sincronizados en tiempo real.', 'Sync', '#', 'Ver Escenario'),
  ('Dashboard de Métricas para Slack', (SELECT id FROM public.categories WHERE name = 'N8N'), 'Recopila métricas clave de varias fuentes y las envía a un canal de Slack o Discord diariamente.', 'Workflow', '#', 'Ver Workflow'),
  ('Portfolio Personal de una Página', (SELECT id FROM public.categories WHERE name = 'Plantillas Web'), 'Una plantilla elegante y responsiva para mostrar tu trabajo y habilidades. Fácil de personalizar y desplegar.', 'Code', '#', 'Obtener Plantilla');

