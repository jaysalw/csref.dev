# Blockchain & Distributed Ledgers — Level 3

This page introduces the basic ideas behind blockchain and distributed ledger technologies and their common uses.

## What is a blockchain?

A blockchain is a tamper-evident ledger made of blocks that record transactions. Each block contains a summary (hash) of the previous block which makes the chain difficult to alter without detection.

Key ideas in simple terms:

- Decentralisation: data is shared across multiple nodes rather than held by a single trusted party.
- Immutability: once recorded and agreed-upon, entries are difficult to change.
- Consensus: nodes run a protocol to agree on the next block (several algorithms exist).

## Uses and examples

- Cryptocurrencies (e.g., Bitcoin) — digital money recorded on a public ledger.
- Supply chain tracking — proving provenance of goods.
- Smart contracts — code that runs on a ledger and enforces simple rules automatically.

## Strengths and limitations

Strengths:
- Transparency and tamper-resistance for public ledgers.

Limitations:
- Scalability and energy use can be concerns (depends on consensus algorithm).
- Privacy: public ledgers reveal transactions unless special measures are used.
- Not always the right tool — centralised databases may be simpler and faster.

## Short practical exercise

1. Use a blockchain explorer for a public chain to view a transaction (or use a simulated ledger). Identify sender, receiver, amount (if applicable), and what metadata is visible.
2. Write a short paragraph: where might a ledger help in your everyday life, and where might it cause problems?

## Further reading

- Consult `docs/references.bib` for entry points into blockchain literature.

### Related pages (expand here for deeper study)

- Smart Contracts — `level-3/core-topics/blockchain-smart-contracts.md`
- Privacy & Scaling — `level-3/core-topics/blockchain-privacy-scaling.md`

