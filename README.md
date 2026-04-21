Design Patterns Reference Lab (TypeScript)
This repository is a curated collection of Software Design Patterns implemented in their purest form using TypeScript. It serves as a personal technical reference and a "code lab" where each pattern is isolated into a single file to demonstrate its core logic without unnecessary complexity.

 Purpose
The goal of this project is to provide a clear, "atomic" understanding of how different architectural patterns solve specific software design challenges. By stripping away complex business logic, the focus remains entirely on the structure and intent of each pattern.

Laboratory Structure
Each pattern is contained within its own dedicated file for maximum clarity:

Creational Patterns: Focus on optimal object creation (e.g., singleton.ts, factory.ts).

Structural Patterns: Focus on composition and relationships (e.g., adapter.ts, decorator.ts).

Behavioral Patterns: Focus on communication and responsibility (e.g., strategy.ts, observer.ts).

 Why TypeScript?
I chose TypeScript for this reference lab to leverage:

Interfaces & Abstract Classes: To define strict contracts for patterns.

Access Modifiers: Using private, protected, and static to enforce pattern constraints (like in Singleton).

Type Safety: To ensure that interchangeable components (like in Strategy) adhere to the same signature.
