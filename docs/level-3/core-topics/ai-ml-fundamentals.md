# Machine Learning — Fundamentals (Level 3)

This page introduces the core ideas behind Machine Learning (ML) at a conceptual level suitable for Level 3 learners.

## What is Machine Learning?

Machine Learning is a subfield of AI where systems learn patterns from data rather than being explicitly programmed for each case. The goal is to make predictions or discover structure.

## Common problem types

- Supervised learning: learn from labelled examples (e.g., spam vs not-spam). Output: labels or values.
- Unsupervised learning: find structure in unlabelled data (e.g., clustering customers).
- Reinforcement learning: an agent learns by interacting with an environment and receiving rewards.

## Typical pipeline (high-level)

1. Collect data
2. Clean and pre-process data
3. Choose a model/algorithm
4. Train the model on data
5. Evaluate performance on held-out data
6. Deploy and monitor

## Simple example (intuition)

Predicting house price: model looks for links between features (size, location) and price from past sales, then uses that to estimate new house prices.

## Datasets and features

- Features are the inputs (age, pixels, temperature).
- Labels are the outputs we want to predict (class, price).

## Short practical exercise

1. Use an online ML demo (scikit-learn or Google Teachable Machine) and try training a small classifier. Note accuracy on training vs test set and explain why they differ.

## Further reading

- See the AI pages and `docs/references.bib` for beginner-friendly textbooks and tutorials.
