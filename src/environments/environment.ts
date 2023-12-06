export interface Environment {
    production: boolean;
    apiUrl: string;
    apiKey: string;
  }

export const environment:Environment = {
    production:false,
    apiUrl:'https://api.openweathermap.org/data/2.5/forecast',
    apiKey:'247f612e81e95576f7ccaa5d4b81ef34'
};

