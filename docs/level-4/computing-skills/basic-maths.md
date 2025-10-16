---
title: Basic Maths
description: In-depth guide to binary arithmetic and number system conversions for computer science students.
---

# Basic Maths for Computing

Computers operate using **binary**, a number system based only on two digits — `0` and `1`.  
Understanding binary and how to convert between different number systems (binary, octal, decimal, hexadecimal) is fundamental in **computer science**, **programming**, and **digital electronics**.

---

## Number Systems Overview

| Base | System | Digits Used | Example | Common Use |
|------|---------|--------------|----------|-------------|
| 2 | Binary | 0, 1 | 101101₂ | Computers, logic circuits |
| 8 | Octal | 0–7 | 45₈ | Legacy systems, compact binary |
| 10 | Decimal | 0–9 | 37₁₀ | Human-readable numbers |
| 16 | Hexadecimal | 0–9, A–F | 2AF₁₆ | Memory addresses, color codes |

Every number system is **positional**, meaning the value of each digit depends on its position and the base.

\[
N = d_n \times b^n + d_{n-1} \times b^{n-1} + \dots + d_0 \times b^0
\]

Where:
- \( N \): total value  
- \( d \): digits  
- \( b \): base  

---

## Converting Between Number Systems

### Decimal → Binary

We repeatedly **divide by 2**, recording the remainders (from bottom to top).

Example: Convert \( 37_{10} \) to binary.

| Step | Division | Quotient | Remainder |
|------|-----------|-----------|------------|
| 1 | 37 ÷ 2 | 18 | 1 |
| 2 | 18 ÷ 2 | 9 | 0 |
| 3 | 9 ÷ 2 | 4 | 1 |
| 4 | 4 ÷ 2 | 2 | 0 |
| 5 | 2 ÷ 2 | 1 | 0 |
| 6 | 1 ÷ 2 | 0 | 1 |

Reading remainders upward →  
\[
37_{10} = 100101_2
\]

---

### Binary → Decimal

Multiply each bit by its positional value (a power of two).

\[
101101_2 = (1\times2^5) + (0\times2^4) + (1\times2^3) + (1\times2^2) + (0\times2^1) + (1\times2^0)
\]

\[
= 32 + 8 + 4 + 1 = 45_{10}
\]

---

### Hexadecimal → Decimal

Each hexadecimal digit represents four binary bits.

Example:

\[
2AF_{16} = (2 \times 16^2) + (10 \times 16^1) + (15 \times 16^0)
\]

\[
= 512 + 160 + 15 = 687_{10}
\]

---

## Binary Arithmetic

Binary arithmetic follows the same logic as decimal arithmetic, except the base is **2**.  
Carries and borrows occur when a result reaches **2** instead of **10**.

---

### Addition Rules

| A | B | Carry In | Sum | Carry Out |
|---|---|-----------|-----|------------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 1 |

Example:

\[
1011_2 + 0110_2 = 10001_2
\]

---

### Subtraction Using Two’s Complement

Computers perform subtraction using **addition** and **negation**.

\[
A - B = A + (\lnot B + 1)
\]

Example: \( 0101_2 - 1000_2 \)

1. Invert \( B = 1000 \Rightarrow 0111 \)  
2. Add 1 → \( 1000 \)  
3. Add to \( A \): \( 0101 + 1000 = 1101 \)

\[
1101_2 = -3_{10}
\]

Result: \( 5 - 8 = -3 \)

---

### Subtraction Using One’s Complement

Steps:
1. Invert all bits of \( B \)  
2. Add to \( A \)  
3. If there’s a carry, add it back (end-around carry)

Example:

\[
A = 1100_2, \quad B = 1010_2
\]

\[
\lnot B = 0101_2
\]

\[
A + \lnot B = 10001_2 \Rightarrow \text{carry add} = 0010_2
\]

Result: \( +2_{10} \)

---

### Binary Multiplication

Similar to long multiplication in decimal.

Example:

\[
\begin{array}{r}
\phantom{\times}\ 101\\
\times\ 110\\
\hline
\ \ \ 000\\
\ \ 1010\\
\ 10100\\
\hline
\ 11110_2
\end{array}
\]

\[
11110_2 = 30_{10}
\]

---

### Binary Division

Binary division uses repeated subtraction (like long division in decimal).

Example:

\[
11101_2 \div 11_2
\]

Perform the division step-by-step.  
Result:

\[
11101_2 \div 11_2 = 1001_2
\]

Quotient: \( 1001_2 \)  
Remainder: \( 0_2 \)

---

## Representing Negative Numbers

Computers store signed integers in three common ways:

| Method | Representation | Range (4-bit) | Notes |
|---------|----------------|---------------|-------|
| Signed Magnitude | MSB = sign | ±0 … ±7 | Two zeros (+0 and −0) |
| One’s Complement | Invert bits for negative | ±0 … ±7 | Two zeros |
| Two’s Complement | Invert + add 1 | −8 … +7 | **Used by modern CPUs** |

---

### Signed Magnitude Example

4-bit code: \( 1101 \)

Sign bit = 1 → negative  
Magnitude bits = 101 → 5

\[
Value = -5
\]

---

### Two’s Complement Example

4-bit code: \( 1111 \)

MSB = 1 → negative  
Invert + 1 → \( 0000 + 1 = 0001 \)

\[
1111_2 = -1_{10}
\]

---

## Comparison Summary

| Property | Signed Magnitude | One’s Complement | Two’s Complement |
|-----------|------------------|------------------|------------------|
| Zero representations | +0 / −0 | +0 / −0 | Single 0 |
| Easy arithmetic | No | Partial | Yes |
| Range (4-bit) | −7 to +7 | −7 to +7 | −8 to +7 |
| Modern usage | No | No | Yes |

---

## Practice Problems

1. Convert \( 101011_2 \) to decimal  
2. Convert \( 3A_{16} \) to binary  
3. Compute \( 1010_2 + 0111_2 \)  
4. Compute \( 1011_2 - 0010_2 \)  
5. Represent −6 in 4-bit two’s complement  

**Hint:**  
\[
+6 = 0110 \Rightarrow \lnot 0110 = 1001 \Rightarrow 1001 + 1 = 1010
\]

---

## Summary

- Computers use binary to represent all data.  
- Two’s complement simplifies subtraction and ensures only one zero.  
- Conversion between number systems is fundamental to digital computing.  
- Bit width defines numeric limits and overflow potential.

---

## References

- Patterson, D. A., & Hennessy, J. L. (2021). *Computer Organization and Design: The Hardware/Software Interface* (6th ed.). Morgan Kaufmann.  
- Stallings, W. (2019). *Computer Organization and Architecture* (11th ed.). Pearson Education.  
- Mano, M. M., & Ciletti, M. D. (2017). *Digital Design* (6th ed.). Pearson.  
- IEEE Computer Society. (2019). *IEEE Standard for Floating-Point Arithmetic (IEEE 754-2019)*.  
- [University of Cambridge — Binary Arithmetic and Number Systems](https://www.cl.cam.ac.uk/teaching/).  
- [NIST Digital Library of Mathematical Functions — Number Representation](https://dlmf.nist.gov/).  
- [TutorialsPoint — Binary Arithmetic](https://www.tutorialspoint.com/computer_logical_organization/binary_arithmetic.htm).  
- [GeeksforGeeks — Binary Number System](https://www.geeksforgeeks.org/binary-number-system/).  
