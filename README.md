# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

/************************\*\*************************\*\*\*************************\*\*************************/

Crea un contesto chiamato LanguageContext e avvolgi il componente Clock all'interno del suo provider.

Aggiungi un tag select al componente in cui viene renderizzato Clock. Questo tag select deve permettere all'utente di selezionare la lingua e passare la selezione come valore al provider.

All'interno del componente Clock, utilizza l'hook useContext per accedere al LanguageContext. In base alla lingua selezionata, visualizza il messaggio "ora corrente" nella lingua corretta.
# context-app-react
