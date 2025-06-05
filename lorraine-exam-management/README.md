# lorraine-exam-management
Le projet Lorraine Exam Management est une plateforme de gestion des examens dédiée aux établissements d'enseignement de la faculté de médecine de Nancy. L'application vise à automatiser et à simplifier l'organisation, la planification, l'administration et la gestion des examens pour les enseignants.

## Fonctionnalités
- **Gestion des horaires d'examen** : Permet aux enseignants de consulter et de s'inscrire aux dates d'examen.
- **Sessions de docimologie** : Gère la participation des enseignants et les détails des sessions de docimologie.
- **Communication** : Facilite la communication entre l'administration et les enseignants, y compris l'envoi de notifications et de messages.

## Structure du projet
```
lorraine-exam-management
├── src
│   ├── components
│   │   ├── ExamSchedule
│   │   │   └── ExamSchedule.tsx
│   │   ├── DocimologySessions
│   │   │   └── DocimologySessions.tsx
│   │   └── Communication
│   │       └── Communication.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── ExamSchedules.tsx
│   │   ├── Docimology.tsx
│   │   └── Communication.tsx
│   ├── services
│   │   ├── examService.ts
│   │   ├── docimologyService.ts
│   │   └── communicationService.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone le dépôt : `git clone <url-du-depot>`
2. Accédez au répertoire du projet : `cd lorraine-exam-management`
3. Installez les dépendances : `npm install`
4. Démarrez l'application : `npm start`

## Contribuer
Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.