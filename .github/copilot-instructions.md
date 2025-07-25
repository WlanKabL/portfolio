# 🧠 GitHub Copilot Instructions

These are default behavioral instructions for GitHub Copilot across this repository. They define architectural expectations, coding styles, and developer workflows — without locking in specific technologies. Copilot should act as a consistent, forward-thinking pair programmer.

---

## 🧩 Architectural Principles

Copilot must adapt to a modular, reactive, and strictly typed architecture. While the current implementation uses tools like Nuxt, Vue, or TanStack, **Copilot must remain agnostic** and focus on **principles**, not frameworks.

### Core Concepts:

- **Typed-first** development (`strictNullChecks`, `noImplicitAny`, etc.)
- **Composable logic** via `useXyz()` pattern
- **Isolated state** with reactive but immutable data flows
- **Separation of concerns** (e.g. components vs services vs stores)
- **Environment-driven behavior** (no hardcoded values)
- **Fallback-first error handling**
- **Clear naming and structure**, optimized for autocomplete and DX
- **Localisation-awareness** (i18n-friendly code)

---

## ✅ Coding Guidelines

Copilot should always:

- Use **TypeScript with strict typing**
- Prefer **early returns** over deeply nested logic
- Avoid hardcoded values — use constants, env vars, or central config
- Use `async/await`, not `.then()` chains
- Keep functions **pure**, **focused**, and **reusable**
- Structure files and logic **modularly**
- Follow consistent naming conventions (`camelCase`, `PascalCase`, `kebab-case`)

---

## 🧪 Feature Development Checklist

Each new feature or fix should:

- [ ] Be scoped to a single concern or bug
- [ ] Build successfully (e.g. `nuxi build`, `tsc`, etc.)
- [ ] Pass all available linters and formatters (ESLint, Prettier)
- [ ] Maintain strict TypeScript correctness
- [ ] Be manually tested in UI or logic context
- [ ] Avoid regressions or unintended breakage
- [ ] Follow commit conventions (`feat:`, `fix:`, `refactor:`, etc.)

---

## 🧠 State Management Expectations

Copilot should assume usage of **cloned vs server state**, e.g.:

```ts
const local = useCloned(serverData.value);
const hasChanged = !equals(serverData.value, local.value);
```

- Always **separate form state from live data**
- Use helpers like `deepCopy`, `klona`, `equals`
- Avoid direct mutation of external or reactive input

---

## 🌍 Internationalization (i18n)

Copilot must write code that:

- Uses i18n-aware helpers (`t()`, `d()`, etc.)
- Does **not hardcode** UI strings
- Formats dates and times via localization-aware utilities
- Respects default user language from context

---

## 🧰 Utility & Service Abstraction

Copilot should generate reusable utilities like:

```ts
// ✅ Utility function
export function hasPermission(user, permission) {
    return (user.permissions & permission) === permission;
}
```

```ts
// ✅ Composable service call
export async function useFetchSomething(id: string) {
    const response = await useHttp().get(`/api/resource/${id}`);
    return validateResponse(response);
}
```

- Services go into `services/` and abstract API logic
- Composables wrap business logic, caching, and local state
- No raw API calls in pages or components

---

## 📎 Naming Conventions

| Element        | Naming Pattern   | Example                 |
| -------------- | ---------------- | ----------------------- |
| Variables      | `camelCase`      | `userData`, `formState` |
| Functions      | `camelCase`      | `fetchToken`, `isAdmin` |
| Components     | `PascalCase.vue` | `UserCard.vue`          |
| Files & Routes | `kebab-case`     | `user-settings.vue`     |
| Stores         | `useXyzStore`    | `useAuthStore`          |
| Composables    | `useXyz()`       | `useSensorLimits()`     |

---

## 🔐 Permission & Role Handling

Copilot should apply the bitflag-based permission model:

```ts
if (hasPermission(UserPermissionEnum.ManageSettings)) {
    // allow UI or action
}
```

- Do **not** hardcode role checks
- Use enums and bitwise checks consistently
- Use helper functions like `hasRole()` and `hasPermission()`

---

## 🤖 Copilot Prompt Behavior

Copilot must internally ask:

- Do types exist for this data? Can I infer them?
- Should this be a composable or service?
- Am I respecting the state/data separation?
- Would this work in a reactive, localized, modular codebase?
- Am I writing code that can scale or be reused?

---

## 🚫 What Copilot Should Avoid

- Unscoped, untyped, or overly generic output
- Mixing unrelated logic in a single function/component
- Duplicating existing helpers or logic
- Suggesting tech-specific solutions unless context demands it
- Using libraries or patterns that don’t align with modular DX

---

## 📄 Commit Examples

```bash
feat: add toggle logic for sensor limit editing
fix: correct enum check in permission middleware
refactor: extract fetch call into reusable service
chore: apply formatting and minor cleanup
```

---

## ✍️ Final Note

Copilot should behave like a team member who:

- Understands the structure and style of the codebase
- Assumes future growth and abstraction
- Thinks modular, typed, and localized by default

> No guessing. No noise. Just reliable, scalable suggestions.
> If this README does not reflect the specific context of the project Copilot is assisting with, feel free to flag it in the PR. This is a general-purpose template and can (and should) be adapted or improved per project as needed.
