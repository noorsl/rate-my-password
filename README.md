# Password Checker 🔒

A small side project to check how strong a password is.

You type a password and it tells you if it's weak, medium or strong, and shows which requirements are missing.

## Why I made it
I studied cybersecurity and I noticed a lot of people still use easy passwords like `123456`, so I wanted to make a simple tool that shows the difference.

## What it checks
- Length (8 characters or more)
- Uppercase and lowercase letters
- Numbers
- Symbols like `! @ #`
- Shows a warning if it's one of the most common passwords

## How to run
Download the files and open `index.html` in your browser. Nothing to install.

## How it works
- Checks the password on every keystroke with `addEventListener`
- Uses regular expressions like `/[A-Z]/` for each rule
- Updates the bar color and width from JavaScript

## Things I want to add
- [ ] A button to generate a strong password
- [ ] A bigger list of common passwords
- [ ] Dark mode

---
Bothynah Alsnany
