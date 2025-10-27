"""A tiny simulated ledger for teaching purposes.

Usage:
    python notebooks\simple_ledger.py

This is intentionally simple: blocks contain an index, previous hash, timestamp and data.
"""
import hashlib
import time


class Block:
    def __init__(self, index, previous_hash, timestamp, data):
        self.index = index
        self.previous_hash = previous_hash
        self.timestamp = timestamp
        self.data = data
        self.hash = self.compute_hash()

    def compute_hash(self):
        s = f"{self.index}{self.previous_hash}{self.timestamp}{self.data}".encode()
        return hashlib.sha256(s).hexdigest()


def create_genesis():
    return Block(0, "0", time.time(), "Genesis Block")


def add_block(chain, data):
    prev = chain[-1]
    block = Block(prev.index + 1, prev.hash, time.time(), data)
    chain.append(block)


def main():
    chain = [create_genesis()]
    add_block(chain, "Alice pays Bob 10")
    add_block(chain, "Bob pays Carol 5")

    for b in chain:
        print(f"Index: {b.index} Prev: {b.previous_hash[:8]} Hash: {b.hash[:12]} Data: {b.data}")


if __name__ == "__main__":
    main()
