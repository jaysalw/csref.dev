# Blockchain Lab — Simple simulated ledger (Level 3)

This lab uses a tiny, educational ledger script to show how blocks link together and how tampering changes hashes.

Files

- `notebooks/simple_ledger.py` — a minimal Python script that builds a short chain and prints each block's index, previous-hash prefix and its own hash.

Exercises

1. Run the demo:

    python notebooks\simple_ledger.py

   Inspect the printed blocks. Notice how the `previous_hash` links blocks together.

2. Modify the data of the second block (e.g., change the amount) and re-run the script. Observe how the block's hash and subsequent linkage changes.

3. Add a simple 'verify_chain' function that recomputes hashes and checks that each block's `previous_hash` matches the previous block's hash.

4. (Optional) Implement a trivial proof-of-work loop that finds a nonce making the hash start with a small prefix (e.g., '000'). Discuss the trade-offs of this approach.
