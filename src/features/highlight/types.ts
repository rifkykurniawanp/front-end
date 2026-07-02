export interface HighlightItem {
  id: string;
  icon: string; // lucide icon name or svg string
  title: string;
  description: string;
  accent?: string; // optional color accent per card
}

export interface HighlightData {
  sectionTitle: string;
  sectionSubtitle: string;
  items: HighlightItem[];
}