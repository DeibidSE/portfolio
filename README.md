# My Portfolio

This project is a private showcase of my work, skills, and achievements, built using Nuxt 3.

Although this portfolio is deeply personal in nature, I have intentionally designed it to be more or less adaptable: All displayed data is dynamically loaded from a JSON file which allows customization of the content (Obviously changing images, pdf files, routes, etc...)

## Table of Contents

- [Acknowledgements](#acknowledgements)
- [Installation](#installation)
- [License](#license)

## Acknowledgements

- Many thanks to [@viryi_vc21](https://instagram.com/viryi_vc21) for creating different SVG logos based on my name.

- Thanks to the user [lucpotage](https://github.com/lucpotage) for the info of how to deploy a Nuxt project on GitHub pages

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/DeibidSE/MyPortfolio.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd MyPortfolio/
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

   This command will install all the required dependencies listed in the `package.json` file.

4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   This command will start the development server on `http://127.0.0.1:3000/MyPortfolio`

   The base url can be modified in `nuxt.config.ts`:

   ```
   export default defineNuxtConfig({
      app: {
         baseURL: '/MyPortfolio/'
      }
   })
   ```

5. **Build for Production:**

- Build and pre-render the application

  ```bash
  npx nuxi generate
  ```

- Locally preview production build:

  ```bash
  npm run preview
  ```

Check out the official [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

- Deploy on GitHub Pages:

  Follow the steps detailed [HERE](https://github.com/lucpotage/nuxt-github-pages), but generate the `dist` directory using `npx nuxi generate` instead of `npm run build`

Feel free to explore my projects, skills, and more! Please look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) for more detailed information on configurations, plugins, and deployment options.

## License

MIT License - Non-Commercial Use Only

Copyright (c) 2023 David Simón

Coded by [DeibidSE](https://github.com/DeibidSE)

Permission is hereby granted, free of charge, to any person or organization obtaining a copy of this software and associated documentation files (the "Software"), to use the Software solely for non-commercial purposes. Commercial use of the Software, including without limitation any sale, licensing, or distribution for commercial purposes, is strictly prohibited, unless explicit written permission is obtained from the original author.

1. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

2. THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
