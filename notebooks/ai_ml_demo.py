#!/usr/bin/env python
"""Simple ML demo: train a classifier on the Iris dataset.

Usage:
    python notebooks\ai_ml_demo.py

Requires: scikit-learn, numpy
"""
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report


def main():
    data = load_iris()
    X = data.data
    y = data.target
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

    model = LogisticRegression(max_iter=200)
    model.fit(X_train, y_train)

    preds = model.predict(X_test)
    print("Accuracy:", accuracy_score(y_test, preds))
    print(classification_report(y_test, preds, target_names=data.target_names))

    sample = X_test[:3]
    print("Sample predictions:", model.predict(sample), "labels:", y_test[:3])


if __name__ == "__main__":
    main()
