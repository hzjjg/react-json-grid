export interface JSONObject {
  [key: string]: any;
}

export interface Theme {
  bgColor?: string;
  borderColor?: string;
  selectHighlightBgColor?: string;
  cellBorderColor?: string;
  keyColor?: string;
  indexColor?: string;
  numberColor?: string;
  booleanColor?: string;
  stringColor?: string;
  objectColor?: string;
  tableHeaderBgColor?: string;
  tableIconColor?: string;
  searchHighlightBgColor?: string;
}

export interface Themes {
  [key: string]: Theme;
}

export type KeyPathNode = string | string[] | number | number[];

export interface JSONGridProps {
  data: JSONObject;
  defaultExpandDepth?: number;
  defaultExpandKeyTree?: JSONObject;
  onSelect?: (keyPath: KeyPathNode[]) => void;
  onExpand?: (keyPath: KeyPathNode[]) => void;
  expandByClickTitle?: boolean;
  highlightSelected?: boolean;
  searchText?: string;
  theme?: string;
  customTheme?: Theme;
}

export interface NestedGridProps {
  level: number;
  keyPath: KeyPathNode[];
  dataKey?: string;
  data: JSONObject;
  highlightedElement: HTMLElement | null;
  highlightSelected: boolean;
  onSelect: (keyPath: KeyPathNode[]) => void;
  onExpand: (keyPath: KeyPathNode[]) => void;
  expandByClickTitle: boolean;
  setHighlightedElement: (element: HTMLElement | null) => void;
  defaultExpandDepth: number;
  defaultExpandKeyTree: JSONObject;
  searchText: string;
}
