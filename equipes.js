/* ============================================================
   LISTE DES ÉQUIPES DE LA SECTION BASKET
   Pour AJOUTER une équipe : copie une ligne { ... }, colle-la
   juste en dessous, change l'id (en minuscules, sans espace ni
   accent), le nom et la catégorie. Garde la virgule à la fin.
   Pour COMPLÉTER une équipe : remplis entraineur, entrainements,
   salle ou lien. Les champs vides ne s'affichent pas.
   ============================================================ */
const ORDRE_CATEGORIES = ["Seniors", "U21", "U18", "U15", "U11", "U9", "U7", "Baby basket"];

const EQUIPES = [
  { id: "pnf", nom: "PNF", categorie: "Seniors", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "pnm", nom: "PNM", categorie: "Seniors", entraineur: "", entrainements: [], salle: "", lien: "https://alcfbasket-pnm.fr", lienTexte: "Ouvrir l'application de l'équipe" },
  { id: "prm", nom: "PRM", categorie: "Seniors", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "df3", nom: "DF3", categorie: "Seniors", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "rf3", nom: "RF3", categorie: "Seniors", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },

  { id: "u21-garcon", nom: "U 21 Garçon", categorie: "U21", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "u18-garcon", nom: "U 18 Garçon", categorie: "U18", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "u15-garcon-2", nom: "U 15 Garçon - 2", categorie: "U15", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "u15-filles", nom: "U 15 Filles", categorie: "U15", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "u11-filles", nom: "U 11 Filles", categorie: "U11", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "u9", nom: "U 9", categorie: "U9", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "u7", nom: "U 7", categorie: "U7", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" },
  { id: "baby-basket", nom: "Baby basket", categorie: "Baby basket", entraineur: "", entrainements: [], salle: "", lien: "", lienTexte: "" }
];
