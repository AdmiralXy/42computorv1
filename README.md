<h1 align="center">Computor v1</h1>
<p align="center">
Calculator for polynomial equations of the second and lower degrees. Created with Vue 3.
</p>

<p align="center">
	<img src="https://img.shields.io/github/repo-size/AdmiralXy/42computorv1?color=%2365c534" alt="" height="20"/>
	<img src="https://img.shields.io/github/directory-file-count/AdmiralXy/42computorv1?color=%2365c534" alt="" height="20"/>
</p>

<br/>

## :package:  Technology stack

* Vue 3
* Vite
* Vitest
* Bootstrap 5

## :ledger:  Features

* Unit tests for the parser and the solver
* Responsive design
* Calculation of roots for equations of the second degree and below
* Different types of equation terms
  * Whole numbers
  * Decimals
  * [coefficient]x
  * [coefficient]X
  * [coefficient]x^[exponent]
  * [coefficient]X^[exponent]
  * [coefficient]*x^[exponent]
  * [coefficient]*X^[exponent]
* Equation's solution is displayed in the form of a table
  * Reduced form
  * Degree
  * Discriminant
  * Roots
  * Explanation if the equation has no solution
  * Explanation if the equation has infinite solutions

## :zap:  Quick start

Make sure you have Node 18 or later installed.

```bash
-- Clone the repository
$> git clone https://github.com/AdmiralXy/42computorv1

-- Install dependencies
$> npm install

-- Start the app
$> npm run dev

-- Build the app
$> npm run build

-- Lint the app
$> npm run lint

-- Run unit tests
$> npm run test:unit
```

## :rocket:  Example

* Calculate: `2x^2 - 1x = 10x - 9`
* Reduced form: `2x^2 - 11x + 9 = 0`
* Polynomial degree: `2`
* Get roots by using the following formula: `x = (-b ± √Δ) / 2a`
* Solve: `x = (11 ± √49) / 4`
* Roots: `4.5 and 1`