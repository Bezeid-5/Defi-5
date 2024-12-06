import { Question } from "../types/question";

export const questions: Question[] = [
    {
        id: 1,
        questionText: "Quelle est la méthode recommandée pour créer un mot de passe sécurisé ?",
        options: [
          "Utiliser uniquement des chiffres",
          "Utiliser une combinaison de lettres, chiffres et symboles",
          "Utiliser votre date de naissance",
          "Utiliser des mots communs",
        ],
        correctAnswer: 1,
        justification: "Les mots de passe sécurisés doivent être complexes et inclure des lettres, chiffres et symboles pour empêcher les attaques par force brute."
      },
      {
        id: 2,
        questionText: "Que signifie le protocole HTTPS ?",
        options: [
          "Hyper Text Transfer Protocol Secure",
          "High Transfer Protocol Standard",
          "Hyper Text Transfer Secure",
          "None of the above",
        ],
        correctAnswer: 0,
        justification: "HTTPS (Hyper Text Transfer Protocol Secure) est un protocole de communication sécurisé utilisé pour sécuriser les échanges sur le web."
      },
      {
        id: 3,
        questionText: "Quel est le rôle d'un antivirus ?",
        options: [
          "Optimiser la vitesse de votre ordinateur",
          "Détecter et supprimer les logiciels malveillants",
          "Accélérer la connexion Internet",
          "Crypter les fichiers",
        ],
        correctAnswer: 1,
        justification: "Un antivirus est conçu pour détecter, prévenir et supprimer les logiciels malveillants qui peuvent infecter votre système."
      },
      {
        id: 4,
        questionText: "Qu'est-ce qu'un VPN ?",
        options: [
          "Un programme antivirus",
          "Un réseau privé virtuel qui sécurise votre connexion Internet",
          "Un pare-feu",
          "Un logiciel de cryptage",
        ],
        correctAnswer: 1,
        justification: "Un VPN (Virtual Private Network) crée une connexion sécurisée entre votre appareil et Internet, en protégeant vos données et votre confidentialité."
      },
      {
        id: 5,
        questionText: "Qu'est-ce qu'un phishing ?",
        options: [
          "Une méthode pour sécuriser votre réseau",
          "Une attaque qui consiste à tromper un utilisateur pour voler ses informations sensibles",
          "Un programme antivirus",
          "Un protocole de communication sécurisé",
        ],
        correctAnswer: 1,
        justification: "Le phishing est une attaque dans laquelle un cybercriminel se fait passer pour une entité légitime pour voler des informations sensibles comme des identifiants."
      },
      {
        id: 6,
        questionText: "Qu'est-ce qu'un ransomware ?",
        options: [
          "Un virus qui vole vos informations bancaires",
          "Un programme malveillant qui chiffre vos fichiers et demande une rançon",
          "Un logiciel de sécurité",
          "Un programme qui bloque l'accès aux sites web",
        ],
        correctAnswer: 1,
        justification: "Un ransomware est un type de logiciel malveillant qui chiffre les fichiers d'un utilisateur et exige une rançon pour leur décryptage."
      },
      {
        id: 7,
        questionText: "Qu'est-ce que le 'social engineering' ?",
        options: [
          "Une méthode pour protéger les réseaux sociaux",
          "Manipuler des individus pour obtenir des informations sensibles",
          "Un type de virus",
          "Un programme d'amélioration des performances du système",
        ],
        correctAnswer: 1,
        justification: "Le social engineering est une technique d'attaque basée sur la manipulation psychologique pour obtenir des informations sensibles d'une personne."
      },
      {
        id: 8,
        questionText: "Pourquoi est-il important de mettre à jour régulièrement vos logiciels ?",
        options: [
          "Pour ajouter des fonctionnalités",
          "Pour corriger des failles de sécurité et améliorer la performance",
          "Pour rendre votre système plus lent",
          "Pour avoir plus d'options",
        ],
        correctAnswer: 1,
        justification: "Les mises à jour logicielles corrigent des failles de sécurité et améliorent la performance des systèmes, ce qui est crucial pour éviter des vulnérabilités."
      },
      {
        id: 9,
        questionText: "Qu'est-ce qu'une attaque par DDoS ?",
        options: [
          "Une attaque qui vole vos informations personnelles",
          "Une attaque qui surcharge un serveur pour le rendre inaccessible",
          "Une méthode de protection des données",
          "Un processus d'amélioration des performances du serveur",
        ],
        correctAnswer: 1,
        justification: "Une attaque par DDoS (Distributed Denial of Service) consiste à submerger un serveur de requêtes afin de le rendre inaccessible."
      },
      {
        id: 10,
        questionText: "Quel est le rôle d'un pare-feu dans la cybersécurité ?",
        options: [
          "Analyser les sites web visités",
          "Bloquer ou permettre les connexions réseau en fonction de règles de sécurité",
          "Crypter les communications réseau",
          "Supprimer les virus du réseau",
        ],
        correctAnswer: 1,
        justification: "Un pare-feu surveille et contrôle le trafic réseau entrant et sortant en fonction des règles de sécurité définies."
      },
      {
        id: 11,
        questionText: "Qu'est-ce qu'un 'rootkit' ?",
        options: [
          "Un logiciel malveillant conçu pour permettre l'accès à distance à un système informatique sans détection",
          "Un antivirus",
          "Un programme pour analyser le réseau",
          "Un logiciel d'amélioration des performances",
        ],
        correctAnswer: 0,
        justification: "Un rootkit est un logiciel malveillant conçu pour dissimuler l'existence d'une attaque en permettant l'accès non autorisé à un système sans détection."
      },
      {
        id: 12,
        questionText: "Qu'est-ce qu'un certificat SSL ?",
        options: [
          "Un certificat permettant de vérifier l'identité d'un site web et de sécuriser la communication",
          "Un antivirus",
          "Un outil de sauvegarde des données",
          "Un programme de cryptage",
        ],
        correctAnswer: 0,
        justification: "Un certificat SSL permet de sécuriser la communication entre le serveur et le client en vérifiant l'identité du site web et en cryptant les données échangées."
      },
      {
        id: 13,
        questionText: "Qu'est-ce qu'une attaque par 'man-in-the-middle' ?",
        options: [
          "Une attaque qui intercepte et modifie les communications entre deux parties",
          "Une attaque qui crypte les fichiers pour demander une rançon",
          "Une attaque qui ralentit un réseau",
          "Une attaque qui empêche l'accès à un site web",
        ],
        correctAnswer: 0,
        justification: "Une attaque man-in-the-middle intercepte et modifie les communications entre deux parties sans que celles-ci en aient conscience."
      },
      {
        id: 14,
        questionText: "Quel est le but d'une authentification multifactorielle (MFA) ?",
        options: [
          "Augmenter la sécurité des mots de passe en ajoutant des facteurs d'identification supplémentaires",
          "Supprimer la nécessité d'un mot de passe",
          "Améliorer la vitesse de connexion",
          "Cryptage des fichiers",
        ],
        correctAnswer: 0,
        justification: "L'authentification multifactorielle (MFA) renforce la sécurité en exigeant plusieurs facteurs d'identification avant d'accorder l'accès."
      },
      {
        id: 15,
        questionText: "Que signifie l'acronyme DDoS ?",
        options: [
          "Direct Denial of Service",
          "Distributed Denial of Service",
          "Distributed Defense of Security",
          "Direct Defense of Security",
        ],
        correctAnswer: 1,
        justification: "DDoS signifie Distributed Denial of Service. Il s'agit d'une attaque qui utilise plusieurs sources pour rendre un service ou un site web inaccessible."
      },
      {
        id: 16,
        questionText: "Quel est le but d'une attaque par 'brute force' ?",
        options: [
          "Deviner un mot de passe en testant toutes les combinaisons possibles",
          "Empêcher l'accès à un serveur",
          "Crypter un fichier",
          "Télécharger un logiciel malveillant",
        ],
        correctAnswer: 0,
        justification: "L'attaque par force brute consiste à essayer toutes les combinaisons possibles pour deviner un mot de passe."
      },
      {
        id: 17,
        questionText: "Qu'est-ce qu'un cheval de Troie (Trojan) ?",
        options: [
          "Un programme malveillant qui se cache sous une forme légitime pour voler des informations",
          "Un virus qui détruit les fichiers",
          "Un type de pare-feu",
          "Un programme de cryptage",
        ],
        correctAnswer: 0,
        justification: "Un cheval de Troie est un malware qui se cache sous des apparences légitimes et vole des informations sensibles une fois installé."
      },
      {
        id: 18,
        questionText: "Qu'est-ce qu'un spyware ?",
        options: [
          "Un logiciel qui permet de détecter les intrusions",
          "Un logiciel malveillant qui espionne les activités de l'utilisateur et collecte des informations",
          "Un antivirus",
          "Un logiciel qui crypte les fichiers",
        ],
        correctAnswer: 1,
        justification: "Un spyware est un logiciel malveillant conçu pour espionner l'utilisateur et collecter des informations sans son consentement."
      },
      {
        id: 19,
        questionText: "Qu'est-ce qu'un 'botnet' ?",
        options: [
          "Un réseau d'ordinateurs infectés contrôlés à distance pour mener des attaques DDoS",
          "Un logiciel pour sécuriser les réseaux sociaux",
          "Un programme de cryptage de fichiers",
          "Un outil pour protéger les appareils des menaces",
        ],
        correctAnswer: 0,
        justification: "Un botnet est un réseau de machines infectées et contrôlées à distance pour mener des attaques comme les DDoS."
      },
      {
        id: 20,
        questionText: "Quel est le rôle de l'authentification à deux facteurs ?",
        options: [
          "Augmenter la vitesse de connexion",
          "Éviter le vol d'identité en ajoutant un second facteur de vérification",
          "Limiter l'accès aux données",
          "Permettre de se connecter à un VPN",
        ],
        correctAnswer: 1,
        justification: "L'authentification à deux facteurs ajoute une couche supplémentaire de sécurité pour éviter le vol d'identité en vérifiant un second facteur."
      },
      {
        id: 21,
        questionText: "Que signifie le terme 'cloud computing' ?",
        options: [
          "Utiliser des serveurs distants pour stocker et traiter des données",
          "L'utilisation de disques durs locaux",
          "Utiliser des logiciels de gestion de mots de passe",
          "Utiliser des logiciels antivirus dans un réseau",
        ],
        correctAnswer: 0,
        justification: "Le cloud computing fait référence à l'utilisation de serveurs distants pour stocker et traiter des données, plutôt que de le faire localement sur un appareil."
      },
      {
        id: 22,
        questionText: "Qu'est-ce qu'une attaque par injection SQL ?",
        options: [
          "Une attaque qui utilise des commandes SQL pour accéder à une base de données et en voler les informations",
          "Une méthode pour protéger les bases de données",
          "Un type de virus",
          "Un logiciel pour récupérer les mots de passe",
        ],
        correctAnswer: 0,
        justification: "Une injection SQL est une attaque qui exploite des failles dans les requêtes SQL pour manipuler une base de données et en voler des informations sensibles."
      },
      {
        id: 23,
        questionText: "Qu'est-ce qu'un 'zero-day exploit' ?",
        options: [
          "Une vulnérabilité de sécurité qui est exploitée avant que le fabricant ait la chance de la corriger",
          "Un programme antivirus",
          "Un type de malware",
          "Un mot de passe fort",
        ],
        correctAnswer: 0,
        justification: "Un zero-day exploit est une vulnérabilité de sécurité qui est exploitée par des attaquants avant qu'un correctif soit disponible."
      },
      {
        id: 24,
        questionText: "Qu'est-ce qu'un 'backdoor' en cybersécurité ?",
        options: [
          "Une méthode secrète pour accéder à un système sans être détecté",
          "Un programme antivirus",
          "Un pare-feu",
          "Un type de ransomware",
        ],
        correctAnswer: 0,
        justification: "Un backdoor est une porte dérobée dans un système, permettant aux attaquants d'y accéder sans être détectés."
      },
      {
        id: 25,
        questionText: "Qu'est-ce que le 'social engineering' dans le cadre d'une cyberattaque ?",
        options: [
          "L'exploitation de la psychologie humaine pour tromper une personne et obtenir des informations sensibles",
          "L'utilisation de logiciels de surveillance",
          "L'optimisation des processus informatiques",
          "Une méthode pour empêcher les attaques par virus",
        ],
        correctAnswer: 0,
        justification: "Le social engineering repose sur la manipulation psychologique pour obtenir des informations sensibles, souvent en trompant la victime."
      },
      {
        id: 26,
        questionText: "Qu'est-ce qu'une attaque de type 'Cross-Site Scripting' (XSS) ?",
        options: [
          "Une attaque qui insère du code malveillant dans un site web pour voler des informations",
          "Un virus",
          "Une attaque qui crypte des fichiers",
          "Un programme pour sécuriser les emails",
        ],
        correctAnswer: 0,
        justification: "Les attaques XSS insèrent du code malveillant dans des sites web pour voler des informations personnelles des utilisateurs."
      },
      {
        id: 27,
        questionText: "Qu'est-ce qu'un 'fishing' de type 'spear phishing' ?",
        options: [
          "Un phishing ciblé où l'attaquant utilise des informations spécifiques à la victime pour tromper cette dernière",
          "Un type de ransomware",
          "Un logiciel antivirus",
          "Un type de logiciel espion",
        ],
        correctAnswer: 0,
        justification: "Le spear phishing est une forme de phishing plus ciblée, où l'attaquant utilise des informations spécifiques sur la victime pour la tromper."
  },
  {
    id: 28,
    questionText: "Pourquoi est-il dangereux de cliquer sur un lien dans un email inconnu ?",
    options: [
      "Cela peut conduire à un site malveillant ou télécharger un malware sur votre appareil",
      "Cela vous permet d'ouvrir plus rapidement un site web",
      "Cela améliore la performance de votre ordinateur",
      "Cela permet de sécuriser votre compte",
    ],
    correctAnswer: 0,
    justification: "Les liens dans les emails inconnus peuvent mener à des sites malveillants ou télécharger des malwares qui peuvent compromettre votre sécurité."
  },
  {
    id: 29,
    questionText: "Qu'est-ce que le 'cryptojacking' ?",
    options: [
      "L'exploitation des ressources d'un appareil pour miner des cryptomonnaies à l'insu de l'utilisateur",
      "Un type de ransomware",
      "Un logiciel antivirus",
      "Un type de botnet",
    ],
    correctAnswer: 0,
    justification: "Le cryptojacking est une technique où des cybercriminels utilisent les ressources d'un appareil pour miner des cryptomonnaies sans le consentement de l'utilisateur."
  },
  {
    id: 30,
    questionText: "Pourquoi est-il important de sauvegarder régulièrement ses données ?",
    options: [
      "Pour éviter la perte de données en cas de panne ou d'attaque",
      "Pour augmenter la vitesse du système",
      "Pour améliorer la sécurité des appareils",
      "Pour réduire les coûts de stockage",
    ],
    correctAnswer: 0,
    justification: "La sauvegarde régulière des données permet de les protéger contre la perte due à des pannes de matériel ou des attaques comme les ransomwares."
  },
];
