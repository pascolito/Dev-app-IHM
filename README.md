# Réseau Social

> *Enfin un réseau où tu n'es pas juste un pouce qui like 👍*

Un réseau social moderne qui met l'accent sur les interactions authentiques entre utilisateurs. Créez des publications, commentez, suivez vos amis et explorez du contenu — le tout dans une interface épurée et intuitive.

---

## 📸 Aperçu

| Page d'accueil | Fil d'actualité | Profil |
|:-:|:-:|:-:|
| ![Accueil](Projet-IHM-main/images_plan_site/Page%20d'accueil.png) | ![Feed](Projet-IHM-main/images_plan_site/File%20d'actualité.png) | ![Profil](Projet-IHM-main/images_plan_site/Profil_mesInformations.png) |

---

## Fonctionnalités

### Authentification
- Inscription avec nom, prénom, email et photo de profil
- Connexion / Déconnexion sécurisée
- Gestion de session via localStorage

### Publications
- Créer des posts avec texte et image optionnelle
- Fil d'actualité 
- Supprimer ses propres publications

### Interactions sociales
- Système de likes
- Commentaires sur les publications
- Suivre / Ne plus suivre des utilisateurs

### Profil utilisateur
- Modifier ses informations personnelles
- Changer sa photo de profil
- Tableau de bord avec statistiques :
  - Nombre de publications
  - Likes reçus / donnés
  - Abonnés / Abonnements

### Recherche & Découverte
- Recherche de posts avec autocomplétion
- Recherche d'utilisateurs
- Suggestions en temps réel

---

## Stack Technique

| Technologie | Utilisation |
|-------------|-------------|
| **HTML5** | Structure des pages |
| **CSS3** | Design avec variables CSS et système de spacing |
| **JavaScript ES6+** | Logique applicative (vanilla, sans framework) |
| **localStorage** | Persistance des données côté client |

> Aucune dépendance externe — 100% vanilla.

---

## Structure du Projet

```
Projet-IHM-main/
├── images/                    # Assets (logo, avatar par défaut)
├── images_plan_site/          # Maquettes et wireframes
└── pages/
    ├── html/                  # Pages HTML
    │   ├── page_accueil.html        # Landing page
    │   ├── file_d'actualite.html    # Fil d'actualité
    │   ├── header.html / footer.html
    │   └── profil/
    │       ├── connexion.html
    │       ├── creer_un_compte.html
    │       └── informations_profil/
    │           └── mon_profile.html
    ├── css/                   # Feuilles de style
    │   ├── reset.css / variables.css / components.css
    │   └── pages/             # Styles par page
    └── java/                  # Modules JavaScript
        ├── accountLogin.js / accountInscription.js
        ├── header.js
        ├── barre_de_recherche/    # Recherche posts & utilisateurs
        ├── publications/          # CRUD posts, likes, commentaires
        ├── page_profile/          # Profil & édition
        └── statistiques/          # Dashboard stats
```

---

## Installation & Lancement

### Prérequis
- Un navigateur moderne (Chrome, Firefox, Edge, Safari)

### Lancer le projet
**Option 1 — Avec les fichier :**
Ouvrir le fichier `page_accueil.html` 

**Option 2 — Avec VS Code :**
Installer l'extension **Live Server**, clic droit sur `page_accueil.html` → *Open with Live Server*

**Option 3 — Ouvrir directement :**
Double-cliquer sur `Projet-IHM-main/pages/html/page_accueil.html`

---

## Parcours Utilisateur

```
Page d'accueil → Inscription / Connexion → Fil d'actualité
                                                  │
                          ┌───────────────────────┼───────────────────────┐
                          │                       │                       │
                    Créer un post          Rechercher des          Voir son profil
                    Liker / Commenter      utilisateurs            Modifier ses infos
                                           Les suivre              Voir ses stats
```

---

## Stockage des Données

Les données sont persistées dans le `localStorage` du navigateur :

| Clé | Contenu |
|-----|---------|
| `account` | Liste de tous les comptes utilisateurs |
| `connectedAccount` | Session de l'utilisateur connecté |
| `post` | Toutes les publications |
| `comptes_suivis` | Relations de suivi entre utilisateurs |

> Les données sont perdues si le cache du navigateur est vidé.

---

## Équipe

Projet réalisé dans le cadre d'un cours d'**IHM** (Interaction Homme-Machine).

Pascolo Léandre
Cartier Alexandre
---

## Licence

Projet académique — Tous droits réservés.
