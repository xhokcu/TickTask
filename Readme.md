### TICK TASK MOBILE APP

## Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Github Setup

This project is set up with a [GitHub template repository](https://github.com/itelligencetr/Alba-Mobile-App-Dev).

### 🛠 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itelligencetr/Alba-Mobile-App-Dev
   ```

2. Navigate to the project directory:

   ```bash
   cd project-name
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

### 🚀 Start the App

To start the app in different environments, use one of the following commands:

- Start the app in the default Expo environment:

  ```bash
  yarn start
  ```

- Start the app on an Android emulator or connected device:

  ```bash
  yarn android
  ```

- Start the app on an iOS simulator or connected device:

  ```bash
  yarn ios
  ```

### 🧑‍💻 Fetch and Pull the Project

1. **Fetch the project from the repository:**

   ```bash
   git fetch --all
   ```

2. **Pull the latest changes from the repository:**

   ```bash
   git pull
   ```

### 🔧 ESLint Setup

To ensure your code follows the coding standards, ESLint is set up for linting JavaScript files in this project.

1. To run ESLint on the project, use the following script:

   ```bash
   yarn lint
   ```

   This command runs ESLint on all JavaScript files in the project.

Make sure your code follows the rules defined in the ESLint configuration to maintain code quality.

## Commit Message Guidelines

**Commit types**

- `chore`: a commit of the type chore includes the most important commits.
- `docs`: a commit of the type docs includes the update of documentation.
- `feat`: a commit of the type feat introduces a new feature to the codebase.
- `fix`: a commit of the type fix patches a bug in your codebase.
- `style`: a commit of the type style includes a css styling commit.
- `refactor`: a commit of the type refactor includes a code refactoring to the codebase.
- `revert`: a commit of the type revert is used when a developer wants to revert an old commit.
- `wip`: work in process

**Examples**

```
    git commit -m "feat(readme): generate a readme file"
    git commit -m "fix(header): show current banner"
    git commit -m "chore(release): new release is ready"
```

## RULES

- Commit messages should be clear and descriptive.

- Commit messages should not exceed 250 characters in length.

- Types and interfaces should be placed in separate files within the same folder.

- Styles should be written in a separate file.(Exluding pages)

- Use of inline styles should be avoided.

- If you create a new component, it should be in a separate file.

- If you create a pull request, make sure to add a description of what you did.Add screenshots if necessary.

- Use useTranslation hook for translations.

- If creating a new types please use I prefix.

- If creating a new styles file please use with pages names such as
