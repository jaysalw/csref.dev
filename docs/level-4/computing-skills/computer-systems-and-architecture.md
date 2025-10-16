---
title: Computer Architectures: Von Neumann, Harvard, RISC, CISC, ARM, x86, MIPS, RISC‑V
description: Extended notes on classic and modern computer architectures with diagrams, instruction-set styles, pipelines, and performance metrics.
---

# Computer Architectures

This document surveys widely taught computer architectures used across computer science curricula and industry.  
It is designed for MkDocs Material with Mermaid.js and MathJax support.

---

## 1. System-Level Reference Models

### 1.1 Von Neumann (shared program/data memory)

```mermaid
flowchart LR
  classDef cpu fill:#1e3a8a,stroke:#0b2a6b,stroke-width:2,color:#fff;
  classDef mem fill:#065f46,stroke:#064e3b,stroke-width:2,color:#ecfdf5;
  classDef bus fill:#111827,stroke:#9ca3af,stroke-width:2,color:#e5e7eb;
  classDef io  fill:#6b7280,stroke:#4b5563,stroke-width:1.5,color:#fff;

  subgraph CPU["CPU (CU + ALU + Registers)"]
  end
  MEM["Main Memory (code + data)"]:::mem
  ABUS["Address Bus"]:::bus
  DBUS["Data Bus"]:::bus
  CBUS["Control Bus"]:::bus
  IOI["Input Devices"]:::io
  IOO["Output Devices"]:::io

  CPU --- ABUS --- MEM
  CPU === DBUS === MEM
  CPU -.-> CBUS -.-> MEM
  IOI --> CPU
  CPU --> IOO
```

### 1.2 Harvard (split instruction/data memory)

```mermaid
flowchart LR
  classDef cpu fill:#1e3a8a,stroke:#0b2a6b,stroke-width:2,color:#fff;
  classDef memI fill:#14532d,stroke:#064e3b,stroke-width:2,color:#ecfdf5;
  classDef memD fill:#0e7490,stroke:#155e75,stroke-width:2,color:#ecfeff;
  classDef busI fill:#0b1325,stroke:#34d399,stroke-width:2,color:#d1fae5;
  classDef busD fill:#0b1325,stroke:#60a5fa,stroke-width:2,color:#dbeafe;

  subgraph CPU["CPU (CU + ALU + RegFile)"]
  end
  IMEM["Instruction Memory"]:::memI
  DMEM["Data Memory"]:::memD
  IBUS["Instruction Bus"]:::busI
  DBUS["Data Bus"]:::busD

  CPU --- IBUS --- IMEM
  CPU === DBUS === DMEM
```

---

## 2. Instruction-Set Styles (RISC vs CISC)

| Property | RISC (Reduced Instruction Set Computer) | CISC (Complex Instruction Set Computer) |
|---|---|---|
| Instruction length | Fixed (e.g., 32-bit) | Variable (1–15 bytes typical on x86) |
| Addressing modes | Few | Many |
| Microarchitecture | Load/Store, many registers | Microcoded, memory-to-memory allowed |
| Pipeline | Simple, deep, uniform | Complex, variable latency |
| Examples | ARM, MIPS, RISC‑V, SPARC, Power | x86/x86‑64, VAX, 68000 |
| Design goals | High clock rates, easy pipelining, low power | Code density, rich instructions, backward compatibility |

### 2.1 Abstract RISC datapath (load/store)

```mermaid
flowchart TB
  classDef cu  fill:#1e3a8a,stroke:#0b2a6b,stroke-width:2,color:#fff;
  classDef alu fill:#7c2d12,stroke:#4a1d0a,stroke-width:2,color:#fff;
  classDef rf  fill:#334155,stroke:#1f2937,stroke-width:1.5,color:#e5e7eb;
  classDef bus fill:#111827,stroke:#9ca3af,stroke-width:2,color:#e5e7eb;
  classDef mem fill:#065f46,stroke:#064e3b,stroke-width:2,color:#ecfdf5;

  CU[Control Unit]:::cu
  RF[Register File]:::rf
  ALU[ALU]:::alu
  DMEM[Data Memory]:::mem
  ABus["A Bus"]:::bus
  BBus["B Bus"]:::bus
  RBus["Result Bus"]:::bus

  RF -- read --> ABus
  RF -- read --> BBus
  ABus ==> ALU
  BBus ==> ALU
  ALU ==> RBus
  RBus --> RF
  ALU -.addr.-> DMEM
  DMEM -.load/store.-> RF
  CU -.controls.-> RF
  CU -.controls.-> ALU
  CU -.controls.-> DMEM
```

### 2.2 Abstract CISC execution with microcode

```mermaid
flowchart TB
  classDef block fill:#0f172a,stroke:#334155,stroke-width:1.5,color:#e5e7eb;

  IR[Instruction Register]:::block
  DECODE[Complex Decoder]:::block
  MICRO[Microcode ROM]:::block
  EU[Execution Unit (ALU, AGU, FP)]:::block
  MEM[Memory Interface]:::block

  IR --> DECODE --> MICRO --> EU --> MEM
  MICRO --> MEM
```

---

## 3. Representative Architectures

### 3.1 ARM (AArch32/AArch64, RISC)

- Load/store design, fixed-length instructions (AArch32: mostly 32-bit; AArch64: 32-bit).  
- Large register file; predication and conditional execution (Thumb/Thumb-2 compressed encodings for density).  
- Widely used in mobile/embedded; increasingly in servers.

```mermaid
flowchart LR
  classDef core fill:#1e3a8a,stroke:#0b2a6b,stroke-width:2,color:#fff;
  classDef cache fill:#0f766e,stroke:#115e59,stroke-width:2,color:#ecfdf5;
  classDef mem fill:#14532d,stroke:#064e3b,stroke-width:2,color:#ecfdf5;
  classDef bus fill:#111827,stroke:#9ca3af,stroke-width:2,color:#e5e7eb;

  subgraph ARM_Core["ARM Core (AArch64)"]
    RF[31 GP Registers + SP]:::core
    ALU[ALU/NEON/FP]:::core
    CU[Decode + Rename + Schedulers]:::core
  end
  L1I["L1 I$"]:::cache
  L1D["L1 D$"]:::cache
  L2["L2$"]:::cache
  L3["L3$ (shared)"]:::cache
  MEM["DRAM"]:::mem

  RF --> ALU
  CU --> ALU
  ARM_Core --- L1I
  ARM_Core --- L1D
  L1I --> L2 --> L3 --> MEM
  L1D --> L2
```

### 3.2 x86/x86‑64 (CISC ISA with RISC-like core)

- Variable-length instructions; front-end decodes to micro‑ops.  
- Out‑of‑order execution, register renaming, deep pipelines, sophisticated branch predictors.  
- Wide SIMD (SSE/AVX/AVX‑512).

```mermaid
flowchart LR
  classDef f  fill:#1e293b,stroke:#0b2a6b,stroke-width:2,color:#e5e7eb;
  classDef e  fill:#7c2d12,stroke:#4a1d0a,stroke-width:2,color:#fff;
  classDef c  fill:#0f766e,stroke:#115e59,stroke-width:2,color:#ecfdf5;

  FE[Front-End<br/>Fetch + Decode + µop Cache]:::f
  REN[Rename + Reorder Buffer]:::f
  SCH[Schedulers / Issue Queues]:::f
  INT[Integer ALUs]:::e
  AGU[Address Gen Units]:::e
  FP[Vector/FP Units]:::e
  L1I[L1 I$]:::c
  L1D[L1 D$]:::c

  L1I --> FE --> REN --> SCH
  SCH --> INT
  SCH --> AGU
  SCH --> FP
  L1D --> AGU
```

### 3.3 MIPS (classic RISC)

- Fixed 32‑bit instructions, three‑operand format, simple 5‑stage pipeline.  
- Clean educational ISA; influenced many later designs.

```mermaid
flowchart LR
  IF[IF] --> ID[ID] --> EX[EX] --> MEM[MEM] --> WB[WB]
```

### 3.4 RISC‑V (open RISC ISA)

- Modular ISA: small base (RV32I/RV64I) + standard extensions (M, A, F, D, C, V).  
- Open and royalty-free; strong adoption in research/industry.  

```mermaid
flowchart TB
  BASE["Base RV64I"] --> M["M: Integer Mul/Div"]
  BASE --> A["A: Atomics"]
  BASE --> F["F: Single-precision FP"]
  BASE --> D["D: Double-precision FP"]
  BASE --> C["C: Compressed 16-bit"]
  BASE --> V["V: Vector"]
```

---

## 4. Pipeline and Hazards

### 4.1 Five-stage pipeline

```mermaid
gantt
  dateFormat X
  title 5-Stage Pipeline
  axisFormat %L
  section Stages
  IF :active, 0, 1
  ID : 1, 1
  EX : 2, 1
  MEM: 3, 1
  WB : 4, 1
  section Instruction flow
  I1  : 0, 5
  I2  : 1, 5
  I3  : 2, 5
  I4  : 3, 5
```

**Hazards**: structural (resource conflict), data (RAW/WAR/WAW), and control (branches).  
Mitigations: forwarding/bypassing, scoreboarding, branch prediction.

---

## 5. Caches and Memory Hierarchy

Average Memory Access Time (AMAT):

$$
\mathrm{AMAT} = \text{Hit Time} + (\text{Miss Rate} \times \text{Miss Penalty})
$$

```mermaid
flowchart TB
  REG[Registers] --> L1[L1 Cache] --> L2[L2 Cache] --> L3[L3 Cache] --> MEM[DRAM] --> SSD[SSD] --> HDD[HDD/Tape]
```

---

## 6. Performance Metrics

Execution time, CPI, and MIPS:

$$
\text{ExecTime} = \#\text{Instr} \times \text{CPI} \times \text{CycleTime}
$$

$$
\text{MIPS} = \frac{\text{Clock (Hz)}}{\text{CPI} \times 10^6}
$$

Pipeline ideal speedup (ignoring hazards):

$$
S \approx \text{# of pipeline stages}
$$

---

## 7. Quick Comparison Table

| ISA | Style | Encoding | Typical Pipeline | Notes |
|---|---|---|---|---|
| ARM (AArch64) | RISC | Fixed 32-bit (plus 16-bit Thumb/Thumb‑2 in 32-bit mode) | Deep, OoO in high-end cores | Mobile to server; low power |
| x86‑64 | CISC (µops internally) | Variable (1–15 bytes) | Very deep, OoO, heavy front‑end | Backward compatibility; large ecosystem |
| MIPS | RISC | Fixed 32-bit | 5-stage classic | Education/legacy embedded |
| RISC‑V | RISC | Fixed base + modular extensions | 5‑stage to wide OoO | Open ISA, rapidly growing |

---

## 8. References

- Patterson, D. A., & Hennessy, J. L. (2021). *Computer Organization and Design: The Hardware/Software Interface* (6th ed.). Morgan Kaufmann.  
- Hennessy, J. L., & Patterson, D. A. (2019). *Computer Architecture: A Quantitative Approach* (6th ed.). Morgan Kaufmann.  
- Stallings, W. (2019). *Computer Organization and Architecture* (11th ed.). Pearson.  
- Tanenbaum, A. S., & Austin, T. (2013). *Structured Computer Organization* (6th ed.). Pearson.  
- ARM Ltd. *Arm® Architecture Reference Manual (A-profile)*.  
- Intel. *Intel® 64 and IA‑32 Architectures Software Developer’s Manual*.  
- MIPS Open. *MIPS32® Architecture for Programmers*.  
- RISC‑V Foundation. *The RISC‑V Instruction Set Manual*.
