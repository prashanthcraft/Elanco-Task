export interface Country {
    name: {
      common: string;
    };
    capital: string[];
    population: number; 
    region: string;
    flags: {
      png: string;
    };
    currencies: Record<string, { name: string; symbol: string }>;
    languages: Record<string, string>;
    timezones: string[];
  }
  