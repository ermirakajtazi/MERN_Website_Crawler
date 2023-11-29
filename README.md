# MERN_Website_Crawler
A website crawler, also known as a web crawler or spider, is a program or automated script designed to systematically browse and index content on the internet. It navigates through websites, follows links, and collects data from web pages. The primary purpose of a website crawler is to index the content of websites for search engines, allowing users to search and discover information more efficiently.

Key characteristics of website crawlers include:

1. **Indexing:** Crawlers systematically scan and index web pages, creating a structured database of information about the content of websites.

2. **Link Following:** Crawlers traverse websites by following hyperlinks from one page to another. This allows them to discover and index a large portion of the web.

3. **Data Extraction:** Crawlers extract relevant information from web pages, such as text content, images, metadata, and other elements. This data is then used for indexing and analysis.

4. **Search Engine Optimization (SEO):** Website crawlers play a crucial role in SEO by ensuring that search engines have up-to-date and comprehensive information about the content of websites, enabling accurate and relevant search results.

5. **Monitoring Changes:** Crawlers can be used to monitor websites for changes, updates, or new content. This is particularly valuable for keeping search engine indexes current.

6. **Data Aggregation:** Beyond search engines, website crawlers can be employed for various purposes, including data aggregation, competitive analysis, and content monitoring.

Popular website crawlers include Googlebot (used by Google), Bingbot (used by Bing), and various open-source crawlers that developers can customize for specific needs. Website owners can use tools like robots.txt and meta tags to control crawler access and behavior on their sites.
## MongoDB | Express | React | Node.js

You can use Docker Compose to install MongoDB locally.
To do this run this commandes at the root directory

- docker-compose up --build -d mongodb
- docker-compose up

To access MongoDB console shell, you can use **`> docker exec -it mongodb bash`**

This repo uses yarn workspaces
https://classic.yarnpkg.com/en/docs/workspaces/

To install all the packages, please run (at the root folder):

- yarn install

## Backend (Node.js | Express | MongoDB)

- yarn start
- open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Frontend (React | Formik | Material-UI)

- yarn start
- open [http://localhost:8000](http://localhost:8000) to view it in the browser. You can change the **port** in the /frontend/.env file


:warning: 	__**Important**__ :warning:

This repo uses some VSCode extensions. It's highly recommended to install them.

| Extension | Link |
|-----------|------|
| <img src="https://github.com/wassim-azirar/mern/blob/master/images/babel.svg" alt="BABEL" width="100"/> | [BABEL](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel) |
| <img src="https://github.com/wassim-azirar/mern/blob/master/images/editorconfig.png" alt="EditorConfig" width="100"/> | [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) |
| <img src="https://github.com/wassim-azirar/mern/blob/master/images/eslint.svg" alt="ESLint" width="100"/> | [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) |
| <img src="https://github.com/wassim-azirar/mern/blob/master/images/prettier.png" alt="Prettier" width="100"/> | [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |
