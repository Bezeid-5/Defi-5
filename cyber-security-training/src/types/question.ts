export interface Question {
    id: number; // Identifiant unique
    questionText: string; // Texte de la question
    options: string[]; // Liste des choix
    correctAnswer: number; // Index de la réponse correcte
    justification: string;
  }
  