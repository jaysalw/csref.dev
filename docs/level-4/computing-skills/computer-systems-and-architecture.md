---
title: Computer Architecture
description: Comparative notes with diagrams for Von Neumann, Harvard, RISC, CISC, ARM, x86, MIPS, RISC‑V, SPARC, PowerPC, Itanium (IA‑64), GPU/SIMD, and DSP architectures.
---

# Computer Architectures

## System-Level Reference Models

### Von Neumann (shared program/data memory)

```mermaid
flowchart LR
  classDef cpu fill:#1e3a8a,stroke:#0b2a6b,stroke-width:2,color:#fff;
  classDef mem fill:#065f46,stroke:#064e3b,stroke-width:2,color:#ecfdf5;
  classDef bus fill:#111827,stroke:#9ca3af,stroke-width:2,color:#e5e7eb;
  classDef io  fill:#6b7280,stroke:#4b5563,stroke-width:1.5,color:#fff;

  CPU["CPU (CU + ALU + Registers)"]:::cpu
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

### Harvard (split instruction/data memory)

```mermaid
flowchart LR
  classDef cpu fill:#1e3a8a,stroke:#0b2a6b,stroke-width:2,color:#fff;
  classDef memI fill:#14532d,stroke:#064e3b,stroke-width:2,color:#ecfdf5;
  classDef memD fill:#0e7490,stroke:#155e75,stroke-width:2,color:#ecfeff;
  classDef busI fill:#0b1325,stroke:#34d399,stroke-width:2,color:#d1fae5;
  classDef busD fill:#0b1325,stroke:#60a5fa,stroke-width:2,color:#dbeafe;

  CPU["CPU (CU + ALU + RegFile)"]:::cpu
  IMEM["Instruction Memory"]:::memI
  DMEM["Data Memory"]:::memD
  IBUS["Instruction Bus"]:::busI
  DBUS["Data Bus"]:::busD

  CPU --- IBUS --- IMEM
  CPU === DBUS === DMEM
```

## Instruction-Set Styles (RISC vs CISC)

| Property | RISC (Reduced Instruction Set Computer) | CISC (Complex Instruction Set Computer) |
|---|---|---|
| Instruction length | Fixed (e.g., 32-bit) | Variable (1–15 bytes typical on x86) |
| Addressing modes | Few | Many |
| Microarchitecture | Load/Store, many registers | Microcoded, memory-to-memory allowed |
| Pipeline | Simple, deep, uniform | Complex, variable latency |
| Examples | ARM, MIPS, RISC‑V, SPARC, Power | x86/x86‑64, VAX, 68000 |
| Design goals | High clock rates, easy pipelining, low power | Code density, rich instructions, backward compatibility |

### Abstract RISC datapath (load/store)

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

### Abstract CISC execution with microcode

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

## Representative Architectures

### ARM (AArch32/AArch64, RISC)

- Load/store design, fixed-length instructions (AArch32: mostly 32-bit; AArch64: 32-bit).  
- Large register file; optional predication; Thumb/Thumb-2 for code density.  
- Used from embedded to servers.

```mermaid
flowchart LR
  classDef core fill:#1e3a8a,stroke:#0b2a6b,stroke-width:2,color:#fff;
  classDef cache fill:#0f766e,stroke:#115e59,stroke-width:2,color:#ecfdf5;
  classDef mem fill:#14532d,stroke:#064e3b,stroke-width:2,color:#ecfdf5;

  RF[31 GP Registers + SP]:::core
  ALU[ALU/NEON/FP]:::core
  CU[Decode + Rename + Schedulers]:::core
  L1I["L1 I$"]:::cache
  L1D["L1 D$"]:::cache
  L2["L2$"]:::cache
  L3["L3$ (shared)"]:::cache
  MEM["DRAM"]:::mem

  RF --> L1I
  RF --> L1D
  ALU --> L1I
  ALU --> L1D
  CU --> L1I
  CU --> L1D
  L1I --> L2 --> L3 --> MEM
  L1D --> L2
```

### x86/x86‑64 (CISC ISA with RISC-like core)

- Variable-length instructions decoded into micro‑ops, then scheduled to execution units.  
- Out‑of‑order execution, register renaming, deep pipelines; SIMD (SSE/AVX/AVX‑512).

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

### MIPS (classic RISC)

```mermaid
flowchart LR
  IF[IF] --> ID[ID] --> EX[EX] --> MEM[MEM] --> WB[WB]
```

### RISC‑V (open RISC ISA)

```mermaid
flowchart TB
  BASE["Base RV64I"] --> M["M: Integer Mul/Div"]
  BASE --> A["A: Atomics"]
  BASE --> F["F: Single-precision FP"]
  BASE --> D["D: Double-precision FP"]
  BASE --> C["C: Compressed 16-bit"]
  BASE --> V["V: Vector"]
```

### SPARC (Scalable Processor ARChitecture, RISC)

- Windowed register file reduces procedure call overhead.  
- 32 registers visible at a time; windows overlap across calls.

```mermaid
flowchart TB
  classDef rf fill:#334155,stroke:#1f2937,stroke-width:1.5,color:#e5e7eb;
  
  R0["Register Window n"]:::rf
  R1["Register Window n+1"]:::rf
  R2["Register Window n+2"]:::rf
  
  R0 --- R1
  R1 --- R2
  
  note["Overlapping windows reduce call overhead"]
```

### Power/PowerPC (RISC)

- Fixed-length encodings; separate integer and FP register files; strong IBM server lineage.

```mermaid
flowchart LR
  GPR[32 GPRs] --> ALU[Int ALUs]
  FPR[32 FPRs] --> FPU[FP/Vector]
  ALU --> LSU[Load/Store Unit]
  FPU --> LSU
```

### Itanium IA‑64 (EPIC / VLIW‑like)

- Explicitly Parallel Instruction Computing: compiler bundles independent ops; predication & rotating registers.  
- Long instruction words issue to multiple functional units in parallel.

```mermaid
flowchart TB
  BUNDLE["Instruction Bundle (slots)"] --> IU1[Int Unit 1]
  BUNDLE --> IU2[Int Unit 2]
  BUNDLE --> FPU1[FP Unit]
  BUNDLE --> MEMU[Mem Unit]
```

### GPU / SIMD / SIMT

- Thousands of lightweight threads; warps/wavefronts execute in lockstep (SIMT).  
- Wide vector ALUs, high memory bandwidth, latency hiding by oversubscription.

```mermaid
flowchart TB
  classDef sm fill:#1e3a8a,stroke:#0b2a6b,stroke-width:2,color:#fff;
  classDef cache fill:#0f766e,stroke:#115e59,stroke-width:2,color:#ecfdf5;
  classDef mem fill:#14532d,stroke:#064e3b,stroke-width:2,color:#ecfdf5;

  SM1["SM/Compute Unit #1"]:::sm
  SM2["SM/Compute Unit #2"]:::sm
  SM3["SM/Compute Unit #3"]:::sm
  L2["L2$ (shared)"]:::cache
  GDDR["Device Memory (GDDR)"]:::mem
  
  SM1 --> L2 --> GDDR
  SM2 --> L2
  SM3 --> L2
```

### DSP Harvard Variants

- Strict Harvard with separate program/data memories, specialized **MAC (multiply–accumulate)** units, circular buffers.

```mermaid
flowchart LR
  IMEM["Program Memory"] --> CU[Program Sequencer]
  DMEM["Data Memory"] --> MAC[MAC/ALU]
  CU --> MAC
  MAC --> DMEM
```

---

## Pipeline and Hazards

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

## Caches and Memory Hierarchy

Average Memory Access Time (AMAT):

$$
\mathrm{AMAT} = \text{Hit Time} + (\text{Miss Rate} \times \text{Miss Penalty})
$$

```mermaid
flowchart TB
  REG[Registers] --> L1[L1 Cache] --> L2[L2 Cache] --> L3[L3 Cache] --> MEM[DRAM] --> SSD[SSD] --> HDD[HDD/Tape]
```

## Performance Metrics

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

## References

- Patterson, D. A., & Hennessy, J. L. (2021). *Computer Organization and Design: The Hardware/Software Interface* (6th ed.). Morgan Kaufmann.  
- Hennessy, J. L., & Patterson, D. A. (2019). *Computer Architecture: A Quantitative Approach* (6th ed.). Morgan Kaufmann.  
- Stallings, W. (2019). *Computer Organization and Architecture* (11th ed.). Pearson.  
- Tanenbaum, A. S., & Austin, T. (2013). *Structured Computer Organization* (6th ed.). Pearson.  
- ARM Ltd. *Arm® Architecture Reference Manual (A-profile).*  
- Intel. *Intel® 64 and IA‑32 Architectures Software Developer’s Manual.*  
- MIPS Open. *MIPS32® Architecture for Programmers.*  
- RISC‑V International. *The RISC‑V Instruction Set Manual.*  
- Oracle. *SPARC Architecture Manual.*  
- IBM. *Power ISA.*  
- Intel/HP. *IA‑64 Architecture Software Developer’s Manual.*