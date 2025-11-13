# AI / ML Lab — Iris classifier (Level 3)

Train a small classifier on the Iris dataset using Python and scikit-learn. Learn the ML pipeline: load data, train a model, evaluate, and inspect results.

## Prerequisites

- Python 3.8+ installed
- Optional: virtual environment
- Dependencies: scikit-learn, numpy (see repository `requirements.txt`)

Files

- `notebooks/ai_ml_demo.py` — a small script that trains a logistic regression on Iris and prints accuracy and a classification report.

Exercises

1. Run the demo:

    python notebooks\ai_ml_demo.py

   Observe the reported accuracy and sample predictions.

2. Modify the script to try a different classifier (e.g., DecisionTreeClassifier or KNeighborsClassifier). Compare the results.

3. Introduce a simple preprocessing step: standardise features using `sklearn.preprocessing.StandardScaler` and see whether accuracy improves.

4. (Optional) Plot a confusion matrix for the predictions and interpret misclassifications.

Notes for instructors

- This lab is intentionally short and portable. It uses the small built-in Iris dataset so no external downloads are needed.
