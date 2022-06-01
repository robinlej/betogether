# BeTogether

## What is it?

BeTogether is a web app made for [BeCode](https://becode.org/)'s coaches and their students. Every once in a while, here's how it unfolds:

1. they ask the students to submit one project each
2. the students then vote for their favourite projects
3. the coach makes groups according to their preferences

This process can be a hassle, and is repeated several times in each promotion. This is what this app offers to solve.

## Developers and roles

Georgiana Marcu and Robin Lejeune worked on the frontend (this repo), using **React**.

  > Check it on [https://betogether-becode.herokuapp.com/](https://betogether-becode.herokuapp.com/).

[The backend](https://github.com/AnthonyHoyas/BeTogether_back) was made by Anthony Hoyas, with **Python (Django)**.

## The mission

- Desktop-only web app
- Allow to dispatch students in promotions
- Allow students to create a project within a group project (tied to one promotion)
- Make a wishlist
- Create groups according to the students' wishlist

## Preview

### Login / Signup page
![A login / signup form slides from one to the other](public/assets/img/betogether-signup.webp)

### Dashboard, first steps (submit a project)
![Step 1: add your project, where the user adds a title, a description, a mockup image and a DB schema image. Step 2: wait for everybody to submit their project.](public/assets/img/betogether-step1-3.webp)

### Dashboard, last steps (arrange the vote list and get the resulting groups)
![Step 3: rearrange the order of the projects with a drag and drop according to the user's wish. The drag and drop occurs in 2 places, linked to each other. Step 4: wait for everybody to vote. Step 5: check the groups formed.](public/assets/img/betogether-step3-5.webp)