# Playwright SDET Automated Testing Suite (SauceDemo)

A production-grade, end-to-end automated testing framework for the [SauceDemo](https://www.saucedemo.com/) e-commerce web application. Built with **Playwright**, **TypeScript**, and **Node.js**, this repository demonstrates scalable Test Automation Engineering best practices including the Page Object Model (POM), custom fixtures, global authentication state reuse, data-driven testing (DDT), and GitHub Actions CI/CD integration.

---

## 🚀 Key Framework Features

* **Page Object Model (POM):** Clean separation of element locators and page interactions into reusable page classes (`LoginPage`, `InventoryPage`, `CartPage`, `CheckoutPage`).
* **Custom Playwright Fixtures (`test.extend`):** Replaced repetitive `new Page()` instantiations with dependency-injected page object fixtures for cleaner, modular test scripts.
* **Global Authentication & Session Reuse (`storageState`):** Performs a single login setup (`auth.setup.ts`) before the test run and saves session cookies to `.auth/user.json`, eliminating redundant UI login steps across tests.
* **Session Isolation:** Overrides global `storageState` for login-specific test suites using `test.use()` to test negative and edge-case login scenarios in fresh, unauthenticated browser contexts.
* **Data-Driven Testing (DDT):** Dynamically generates test cases using external JSON test datasets (`users.json`, `checkoutInputs.json`).
* **Cross-Browser & Parallel Execution:** Configured to run headlessly across Chromium, Firefox, and WebKit engines with configurable worker counts and retries.
* **CI/CD Integration with GitHub Actions:** Fully automated workflow running test suites on every `push` or `pull_request`, featuring HTML report artifact uploads for build inspection.

---

## 🛠️ Tech Stack & Prerequisites

* **Language:** TypeScript
* **Test Runner:** Playwright Test
* **CI/CD:** GitHub Actions
* **Node.js:** v18+ (LTS recommended)

---