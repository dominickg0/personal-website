---
title: "Type-Safe API Development with TypeScript and OpenAPI"
description: "How to achieve end-to-end type safety from your API specification to your frontend client"
date: 2024-11-20
tags: ["TypeScript", "OpenAPI", "API Development", "Fastify", "Code Generation"]
author: "Dominick Gianino"
image: "/images/blog/typesafe-api.svg"
---
# Type-Safe API Development with TypeScript and OpenAPI

Type safety shouldn't stop at your backend. Here's how to create a fully type-safe API layer from specification to client.

## The Problem

Traditional API development creates a disconnect:
- Backend defines routes in code
- Frontend manually types API responses
- Changes break things silently
- Documentation drifts from implementation

## The Solution: OpenAPI-First Development

### 1. Define Your API Contract

```yaml
# openapi.yaml
openapi: 3.1.0
info:
  title: Task Management API
  version: 1.0.0
paths:
  /api/tasks:
    get:
      summary: List tasks
      parameters:
        - name: status
          in: query
          schema:
            type: string
            enum: [todo, in-progress, done]
      responses:
        '200':
          description: Task list
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Task'
components:
  schemas:
    Task:
      type: object
      required: [id, title, status]
      properties:
        id:
          type: string
          format: uuid
        title:
          type: string
        status:
          type: string
          enum: [todo, in-progress, done]
        createdAt:
          type: string
          format: date-time
```

### 2. Generate Types and Client

```bash
# Install generators
npm i -D @hey-api/openapi-ts @hey-api/client-fetch

# Generate
npx @hey-api/openapi-ts -i openapi.yaml -o src/api
```

This creates:
- **TypeScript types** for all schemas
- **Client functions** with full type inference
- **Zod validators** for runtime validation

### 3. Use in Your Backend (Fastify)

```typescript
// routes/tasks.ts
import { FastifyInstance } from 'fastify'
import { TaskSchema } from '../api/schemas'

export async function taskRoutes(app: FastifyInstance) {
  app.get('/api/tasks', {
    schema: {
      querystring: TaskQuerySchema,
      response: { 200: TaskListResponseSchema }
    }
  }, async (request, reply) => {
    const tasks = await taskService.list(request.query)
    return tasks
  })
}
```

### 4. Use in Your Frontend (Nuxt/Vue)

```typescript
// composables/useTasks.ts
import { getTasks } from '~/api/client'

export function useTasks() {
  const tasks = ref<Task[]>([])
  const loading = ref(false)

  async function fetchTasks(status?: TaskStatus) {
    loading.value = true
    tasks.value = await getTasks({ query: { status } })
    loading.value = false
  }

  return { tasks, loading, fetchTasks }
}
```

## Benefits

| Aspect | Before | After |
|--------|--------|-------|
| **Type Safety** | Manual, error-prone | End-to-end inferred |
| **Documentation** | Separate, outdated | Generated, always current |
| **Client SDK** | Manual or none | Auto-generated |
| **Validation** | Duplicate logic | Single source of truth |
| **Refactoring** | Risky breaking changes | Compile-time errors |

## Tools Comparison

| Tool | Language Support | Features |
|------|------------------|----------|
| **@hey-api/openapi-ts** | TypeScript | Types, client, validators, mocks |
| **openapi-typescript** | TypeScript | Types only |
| **Orval** | TS/JS, React, Vue | Client, React Query, SWR hooks |
| **Swagger Codegen** | Many | Legacy, heavier |

## Best Practices

1. **Version your API** - Use semantic versioning in OpenAPI info
2. **Validate at runtime** - Use Zod schemas from generated types
3. **CI/CD integration** - Fail build if spec/client drift
4. **Contract testing** - Verify implementation matches spec
5. **Deprecation policy** - Mark fields deprecated before removal

## Conclusion

OpenAPI-first development with TypeScript gives you confidence that your frontend and backend stay in sync. The initial setup pays dividends in reduced bugs, faster onboarding, and maintainable APIs.

---

*Want to see this in practice? Check out my [Task Management API](https://github.com/dominickg0/task-management-api) on GitHub.*