export const GOOGLE_MAPS_CONFIG = {
  API_KEY: 'AIzaSyBoUJi0drvd9OUota6hSMsrPCwMcIqG23M',
  ANIMATION_DURATION: 1000,
  PLACES_OPTIONS: {
    language: 'fr',
    components: ['country:fr'],
    types: ['geocode', 'establishment'],
    strictbounds: false,
    radius: 50000,
  }
};

export const MAP_STYLES = {
  SELECTED_MARKER: '#65adf1',
  DEFAULT_MARKER: '#666',
  ZONE_FILL_COLOR: 'rgba(101, 173, 241, 0.2)',
  ZONE_STROKE_COLOR: '#65adf1',
};