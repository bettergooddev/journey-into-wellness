import { v4 as uuid } from 'uuid'

type WithId = { id?: string | number | null }
type WithKey = { key: string }

// Recursive type that represents an object or array that might contain objects with IDs
type ObjectWithPossibleIds<T> = T extends (infer U)[]
  ? ObjectWithPossibleIds<U>[]
  : T extends object
    ? {
        [K in keyof T]: ObjectWithPossibleIds<T[K]>
      } & (T extends WithId ? WithKey : {})
    : T

/**
 * Recursively traverses an object or array and adds a 'key' property
 * generated with UUID v4 to any object that has an 'id' property
 */
export const appendKeys = <T>(obj: T): ObjectWithPossibleIds<T> => {
  // Base case: null or undefined
  if (obj === null || obj === undefined) {
    return obj as ObjectWithPossibleIds<T>
  }

  // Arrays: process each item
  if (Array.isArray(obj)) {
    return obj.map((item) => appendKeys(item)) as ObjectWithPossibleIds<T>
  }

  // Objects: process each property
  if (typeof obj === 'object') {
    const result = { ...obj } as any

    // Always add a key property to objects
    result.key = uuid()

    // Process all properties recursively
    for (const key in result) {
      if (
        Object.prototype.hasOwnProperty.call(result, key) &&
        typeof result[key] === 'object' &&
        result[key] !== null
      ) {
        result[key] = appendKeys(result[key])
      }
    }

    return result as ObjectWithPossibleIds<T>
  }

  // Non-objects: return as-is
  return obj as ObjectWithPossibleIds<T>
}
