<h1 align="center">
PathCheck PR
</h1>

<p align="center">
  A community project to help curve the effects of COVID-19 in Puerto Rico. Built with ❤️
</p>

## Project Setup

### Pre-Requisites

1. <a href="https://localwp.com/">Local by Flywheel</a> (a fuss-free way to develop WordPress locally)

2. <a href="https://getcomposer.org/">Composer</a> (a dependency manager for PHP).

3. <a href="https://www.gatsbyjs.org/">Gatsby JS</a> (a free and open source framework based on React that helps developers build blazing fast websites and apps)

4. <a href="https://yarnpkg.com/">Yarn</a> (a package manager that doubles down as project manager)

### Create a new WordPress project in Local by Flywheel

1. Launch Local by Flywheel and click on <u><strong>Create a New Site</strong></u>

2. For the project name, enter ```pathcheckpr```

3. Open the <u><strong>Advanced Options</strong></u> tab and click <u><strong>Browse</strong></u> to select the directory where you want to create the project. A good place could be the www folder in your root directory if you have that setup, something like this: ```~/www/pathcheckpr```

4. Click <u><strong>Continue</strong></u>

5. Where it says choose your environment, select <u><strong>Custom</strong></u>

6. For PHP Version, select latest version: ```7.4.1```

7. For Web Server, select latest version: ```Nginx 1.16.0```

8. For Database, select latest version: ```MySQL 8.0.16```

9. Click <u><strong>Continue</strong></u>

10. For WordPress Username, enter: ```admin```

11. For WordPress Password, enter: ```password```

12. For WordPress Email, enter whatever you want: ```you@mail.com```

13. Make sure to write down your username and password if you make something custom and click <u><strong>Add Site</strong></u>

14. Enter your machine password when prompted to confirm site creation

15. Within the Site Overview tab, find where it shows the SSL certificate and click <u><strong>Trust</strong></u>

### Clone Github repo

1. Launch terminal and get into the root of the WordPress project you created with Local by Flywheel

    ```shell
    $ cd ~/www/pathcheckpr/
    ```
2. Start a new git repository

    ```shell
    $ git init
    ```
3. Add the remote from where you want to clone

    ```shell
    $ git remote add origin git@github.com:jorgeramos/pathcheckpr-cms.git
    ```
4. Pull the project and merge with local git

    ```shell
    $ git pull origin master
    ```

5. From the command line, navigate to the bedrock directory and install the composer dependencies

    ```shell
    $ cd ~/www/pathcheckpr/app/bedrock/ && composer install
    ```

### Configure the WordPress project

1. Launch the project with your favorite code editor. If you have VS Code, type this in terminal: 

    ```shell
    $ code ~/www/pathcheckpr
    ```

2. Open the following file: ```/conf/nginx/site.conf.hbs```

3. Update the line that reads: [```root   "{{root}}";```] to point to the full path of the bedrock web directory, for example: [```root   "/Users/your_username/www/pathcheckpr/app/bedrock/web/";```]

4. Open the following file: ```/app/bedrock/.env.example``` and save it as ```.env``` in the same directory

5. Verify that the WP_HOME variable matches the url of the site you created in Local by Flywheel, for example: ```WP_HOME='https://pathcheckpr.local'```

6. Go back to the Local by Flywheel app and restart the site by clicking <u><strong>Stop Site</strong></u> and then <u><strong>Start Site</strong></u>

7. Access the WordPress admin by visiting <a href="http://pathcheckpr.local/wp-admin/">http://pathcheckpr.local/wp-admin/</a> and logging-in with the credentials you used when you created the site.

8. On the left-hand navigation of the WordPress admin, hover over <u><strong>Appearance</strong></u> and click on <u><strong>Themes</strong></u>.

9. Locate the PathCheck PR Theme and click <u><strong>Activate</strong></u>.

10. You should now be able to view the homepage by visiting <a href="https://pathcheckpr.local/">https://pathcheckpr.local/</a>

### Working with Gatsby 🚀Quick start

1.  **Install npm packages**

    Navigate into the project's root directory and install the node dependencies:

    ```shell
    $ cd ~/www/pathcheckpr && yarn install
    ```

2.  **Start developing**

    Navigate into your new site’s directory and start it up.

    ```shell
    $ cd ~/www/pathcheckpr && gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `pathcheckpr` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to gatsbyjs documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
# Code 4 Puerto Rico Repositorio Base

Repositorio base para todo proyecto en Code 4 Puerto Rico.

## Como utilizar esto

Haga click en el boton de `Use this template`.

![Imgur: https://imgur.com/FeDfjCd](https://i.imgur.com/FeDfjCd.png?1)

Una vez acabe el proceso de crear tu repositorio debería añadir o cambiar algunas cosas:

1. Cambiar `code_owner` en los workflow files encontrados en directorio [.github/workflows](.github/workflows)
2. Cambiar el valor del `cron` en el workflow [.github/workflows/stale.yml](.github/workflows/stale.yml#L6). Esto determina cuando este workflow se ejecuta. Este valor sigue el formato de `cron`. Para más información sobre esto
    - [Wikipedia Cron](https://en.wikipedia.org/wiki/Cron)
    - [Crontab Guru](https://crontab.guru/)
3. Revisar y cambiar, de ser necesario, el archivo [CONTRIBUTING.md](CONTRIBUTING.md) a algo que haga sentido para tu proyecto.
4. Recomendamos que utilizen ["Issue Templates" y "Pull Request Templates"](https://help.github.com/en/github/building-a-strong-community/using-templates-to-encourage-useful-issues-and-pull-requests).
5. Cambiar la licencia del proyecto a una [licencia de código abierto](https://opensource.org/licenses).
    - Tambien puedes utilizar [Choose a License](https://choosealicense.com/).
    - [Más información sobre licencias en repositorios en GitHub](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository#where-does-the-license-live-on-my-repository)
6. Cambiar o eliminar los `code owners` encontrados en [.github/CODEOWNERS](.github/CODEOWNERS#L5) a los usuarios pertinentes para el repositorio que se esta creando.
    - [Más información sobre CODEOWNERS](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners)
7. Dependiendo del proyecto es recomendable [crear "branch protections" en tu repositorio](https://help.github.com/en/github/administering-a-repository/configuring-protected-branches).


## Codigo de Conducta

Todo proyecto en Code 4 Puerto Rico tiene que dejarse llevar por su codigo de conducta. De esto no ser posible se deberia discutir con Code 4 Puerto Rico.

Si estas usando este "template" para un proyecto fuera de Code 4 Puerto Rico les recomendamos utilizar un código de conducta mencionado [aquí](https://opensource.guide/code-of-conduct/).
