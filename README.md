# ORM-E-Commerce-Back-End
## Description
A back-end e-commerce site that allows you to track necessities relating to products. 

## Table of Contents
[Local Installation](#Local-Installation) <br>
[File Structure](#File-Structure) <br>
[Walk Throough](#Walk-Through) <br>
[License](#License)

## Local Installation
Must npm i as there are dependencies such as dotenv, express, sequelize and mysql. <br> Furthermore, Node.js and Insomnia is needed to run. 

## File Structure
```
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── config
   └── connections.js
├── db
   └── schema.sql
├── models
   └── category.js
   └── index.js
   └── product.js
   └── producttag.js
   └── tag.js
├── models_modules
├── routes
   └── index.js
├── api
   └── category-routes.js
   └── index.js
   └── product-routes.js
   └── tag-routes.js
├── api
   └── category-seeds.js
   └── index.js
   └── product-seeds.js
   └── tag-seeds.js
```

## Walk Through
GET Video
https://user-images.githubusercontent.com/112296194/220849629-d97bce22-d1e1-4cc8-be63-992379cafc3d.mov




## License
Copyright (c) [2022] [Marwin Manlangit]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
