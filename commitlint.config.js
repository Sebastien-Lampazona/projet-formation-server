module.exports = {
    extends: ["@commitlint/config-conventional"],
    parserPreset: "conventional-changelog-conventionalcommits",
    prompt: {
      settings: {},
      messages: {
        skip: ":skip",
        max: "moins de %d caractères",
        min: "plus de %d caractères",
        emptyWarning: "ne peut pas être vide",
        upperLimitWarning: "au dessus de la limite",
        lowerLimitWarning: "sous la limite",
      },
      questions: {
        type: {
          description: "Choisis le type de changement que tu veux commiter:",
          enum: {
            feat: {
              description: "Une nouvelle fonctionnalité",
              title: "Features",
              emoji: "✨",
            },
            fix: {
              description: "Un fix de bug",
              title: "Bug Fixes",
              emoji: "🐛",
            },
            docs: {
              description: "Un changement de documentation",
              title: "Documentation",
              emoji: "📚",
            },
            style: {
              description:
                "Des changements qui n'affectent pas la signification du code  (white-space, formattage, point-virgule manquant, etc)",
              title: "Styles",
              emoji: "💎",
            },
            refactor: {
              description:
                "Un changement de code qui ne corrige pas de bug ni n'ajoute de fonctionnalité",
              title: "Code Refactoring",
              emoji: "📦",
            },
            perf: {
              description: "Un changement de code qui améliore les performances",
              title: "Amélioration de performances",
              emoji: "🚀",
            },
            test: {
              description:
                "Ajout de tests manquants ou correction de tests existants",
              title: "Tests",
              emoji: "🚨",
            },
            build: {
              description:
                "Modifications affectant le système de build ou les dépendances externes (exemples de portée : gulp, yarn, npm)",
              title: "Builds",
              emoji: "🛠",
            },
            ci: {
              description:
                "Modifications des fichiers et scripts de configuration CI (exemples: GithubAction, CircleCI)",
              title: "Integration continue",
              emoji: "⚙️",
            },
            chore: {
              description:
                "Autres changements qui ne modifient pas les fichiers dans les dossiers src ou test",
              title: "Chores",
              emoji: "♻️",
            },
            revert: {
              description: "Annule un précédent commit",
              title: "Reverts",
              emoji: "🗑",
            },
          },
        },
        scope: {
          description:
            "Quelle est la portée de ce changement (par exemple, composant ou nom de fichier)",
        },
        subject: {
          description:
            "Rédige une description courte et impérative du changement",
        },
        body: {
          description: "Tu peux écrire ici une plus longue description",
        },
        isBreaking: {
          description: "Il y a-t-il des breaking changes?",
        },
        breakingBody: {
          description:
            "Un commit de BREAKING CHANGE nécessite un body. Entrer une description plus longue du commit lui-même",
        },
        breaking: {
          description: "Décris le breaking changes",
        },
        isIssueAffected: {
          description: "Une issue est-elle concernée ?",
        },
        issuesBody: {
          description:
            "Si les issues sont fermées, le commit nécessite un body. Entrer une description plus longue du commit lui-même",
        },
        issues: {
          description:
            'Ajout les réferences des issues (e.g. "fix #123", "ref #123".)',
        },
      },
    },
  };