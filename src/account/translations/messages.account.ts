export const messagesAccountEn = {
  createAccountScreen: {
    title: 'Create Account',
    description: 'Create your account to start playing',
    submissionError:
      'An error occurred while creating your account, please try again later',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    repeatPasswordPlaceholder: 'Repeat password',
    submitButton: 'Create account',
    submitButtonLoading: 'Creating your account...',
    alreadyHaveAccount: "You don't have an account?",
    login: 'Login',
  },

  loginScreen: {
    title: 'Login',
    description: 'Login to your account to start playing',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    submitButton: 'Login',
    submitButtonLoading: 'Logging in...',
    noAccount: "You don't have an account?",
    createAccount: 'Create an account',
    submissionError:
      'An error occurred while logging in, please try again later',
  },

  schemas: {
    createAccountForm: {
      repeatPassword: {
        mismatch: 'The passwords do not match',
      },
    },
  },
}

export const messagesAccountFr = {
  createAccountScreen: {
    title: 'Créer votre compte',
    description: 'Créez votre compte pour commencer à jouer',
    submissionError:
      'Une erreur est survenue lors de la création de votre compte, veuillez réessayer plus tard',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Mot de passe',
    repeatPasswordPlaceholder: 'Répétez votre mot de passe',
    submitButton: 'Créer votre compte',
    submitButtonLoading: 'Création de votre compte...',
    alreadyHaveAccount: 'Vous avez déjà un compte ?',
    login: 'Connexion',
  },

  loginScreen: {
    title: 'Connexion',
    description: 'Connectez-vous à votre compte pour commencer à jouer',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Mot de passe',
    submitButton: 'Connexion',
    submitButtonLoading: 'En cours de connexion...',
    noAccount: "Vous n'avez pas de compte ?",
    createAccount: 'Créer un compte',
    submissionError:
      'Une erreur est survenue lors de la connexion, veuillez réessayer plus tard',
  },

  schemas: {
    createAccountForm: {
      repeatPassword: {
        mismatch: 'Les mots de passe ne correspondent pas',
      },
    },
  },
}
