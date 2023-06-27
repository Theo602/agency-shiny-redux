// Fonction qui récupere le thème de l'application
export const selectTheme = (state) => state.theme;

// Fonction qui récupere l'état de la navbar
export const selectNavBar = (state) => state.navBar.navState;

// Fonction qui récupere l'état de la navbar
export const selectWidth = (state) => state.navBar.width;

// Fonction qui récupere les données des freelances
export const selectFreelances = (state) => state.freelances;

// Fonction qui récupere les données des profiles 
const voidFreelance = { status: 'void' }

export const selectProfile = (freelanceId) => (state) => state.profile[freelanceId] ?? voidFreelance;

// Fonction qui récupere les données des questions
export const selectSurvey = (state) => state.survey;

// Fonction qui récupere les données des resultats
export const selectResults = (state) => state.results;