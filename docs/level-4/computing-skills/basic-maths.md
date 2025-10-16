---
title: Basic Maths
description: Fundamental binary arithmetic and number system conversions for computer science.
---

# Basic Maths for Computing

Computers operate using **binary**, a number system based on two symbols — `0` and `1`.  
Understanding conversions between bases and arithmetic in binary is essential for computer science.

---

## Number Systems

| Base | System | Digits Used | Example |
|------|---------|-------------|----------|
| 2 | Binary | 0, 1 | 101101₂ |
| 8 | Octal | 0–7 | 45₈ |
| 10 | Decimal | 0–9 | 37₁₀ |
| 16 | Hexadecimal | 0–9, A–F | 2AF₁₆ |

---

## Converting Between Number Systems

### Decimal to Binary

Use **repeated division by 2**, recording remainders from bottom to top.

Example: Convert \( 37_{10} \) to binary.

| Step | Quotient | Remainder |
|------|-----------|-----------|
| 37 ÷ 2 | 18 | 1 |
| 18 ÷ 2 | 9 | 0 |
| 9 ÷ 2 | 4 | 1 |
| 4 ÷ 2 | 2 | 0 |
| 2 ÷ 2 | 1 | 0 |
| 1 ÷ 2 | 0 | 1 |

\[
37_{10} = 100101_2
\]

---

### Hexadecimal to Decimal

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

Binary arithmetic works like decimal arithmetic, except carries occur when the total reaches 2 instead of 10.

### Addition Rules

| Operation | Result |
|------------|--------|
| 0 + 0 | 0 |
| 0 + 1 | 1 |
| 1 + 0 | 1 |
| 1 + 1 | 10 (write 0, carry 1) |

Example:

\[
1011_2 + 0110_2 = 10001_2
\]

---

### Subtraction Using Two’s Complement

To perform \( A - B \), use:

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
1. Invert all bits of \( B \).  
2. Add to \( A \).  
3. If there’s a carry, add it back (end-around carry).

Example:

\[
A = 1100_2, \quad B = 1010_2
\]
\[
\lnot B = 0101_2
\]
\[
A + \lnot B = 10001_2 \Rightarrow \text{(carry add)} = 0010_2
\]
Result: \( +2_{10} \)

---

### Binary Multiplication

Similar to long multiplication in decimal.

Example:

\[
101_2 \times 110_2
\]

```

```
  101
```

## ×     110

```
  000
```

* 1010
* 10100

---

```
11110₂
```

```

\[
11110_2 = 30_{10}
\]

---

### Binary Division

Example:

\[
11101_2 \div 11_2
\]

Result:

\[
11101_2 ÷ 11_2 = 1001_2
\]

Quotient: \( 1001_2 \), Remainder: \( 0_2 \)

---

## Representing Negative Numbers

Computers store signed numbers using one of three systems.

| Method | Representation | Range (4-bit) | Notes |
|---------|----------------|---------------|-------|
| Signed Magnitude | Leftmost bit = sign | ±0 … ±7 | Two zeros (+0 and −0) |
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

### Comparison Summary

| Property | Signed Magnitude | One’s Complement | Two’s Complement |
|-----------|------------------|------------------|------------------|
| Zero representations | +0 / −0 | +0 / −0 | Single 0 |
| Easy arithmetic | ✗ | Partial | ✓ |
| Range (4-bit) | −7 to +7 | −7 to +7 | −8 to +7 |
| Modern usage | No | No | **Yes** |

---

## Practice Problems

1. Convert \( 101011_2 \) to decimal  
2. Convert \( 3A_{16} \) to binary  
3. Compute \( 1010_2 + 0111_2 \)  
4. Compute \( 1011_2 - 0010_2 \)  
5. Represent −6 in 4-bit two’s complement  

**Hint:**  
For question 5:  
\[
+6 = 0110 \Rightarrow \lnot 0110 = 1001 \Rightarrow 1001 + 1 = 1010
\]

---

## Summary

- Computers use binary for all data representation.  
- Two’s complement simplifies subtraction and allows a single zero.  
- Conversion between number systems is essential for low-level computation.  
- Bit width determines representable range and overflow behavior.

---

### References

- [Wikipedia: Positional Notation](https://en.wikipedia.org/wiki/Positional_notation)  
- [Wikipedia: Binary Arithmetic](https://en.wikipedia.org/wiki/Binary_number)