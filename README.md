The New York Time Scraper
Overview
This application is a website scraper that successfully scrapes The New York Times. Using Semantic-UI, it captures the pictures of the article, picture, and a summaryu of the article. Users are able to saved articles, add and edit notes to one or more articles.

In this repository, you can see source code of this article Scraper. For experiencing, please go to Heroku:

/heroku app/

Key Dependencies
request: enables cheerio to get access to front-end code of https://www.nytimes.com/section/world

cheerio: scrapes front-end code from https://www.nytimes.com/section/world

mongoose: be in charge of database of the article Scraper

express: builds server-side routes and functions

morgan: logs server-side requests, helping debugging

express-handlebars: a front-end builder without requiring multiple html pages

UI-Semantic: a powerful tool to help create html elements without having to use multiple lines of css code