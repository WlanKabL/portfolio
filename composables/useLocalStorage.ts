/**
 * A composable for reactive localStorage management with validation
 * @param key - The localStorage key
 * @param defaultValue - Default value if key doesn't exist
 * @param validator - Optional function to validate stored values
 * @returns A reactive ref that syncs with localStorage
 */
export function useLocalStorage<T>(
  key: string, 
  defaultValue: T, 
  validator?: (value: any) => boolean
) {
  // Create a reactive ref with the default value
  const storedValue = ref<T>(defaultValue);

  // Only access localStorage on client side
  if (process.client) {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        const parsedValue = JSON.parse(item);
        // If validator is provided, use it to check validity
        if (validator && !validator(parsedValue)) {
          console.warn(`Invalid localStorage value for "${key}", using default:`, parsedValue);
          storedValue.value = defaultValue;
        } else {
          storedValue.value = parsedValue;
        }
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      storedValue.value = defaultValue;
    }
  }

  // Watch for changes and update localStorage
  watch(
    storedValue,
    (newValue) => {
      if (process.client) {
        try {
          // Validate before storing if validator is provided
          if (validator && !validator(newValue)) {
            console.warn(`Attempt to store invalid value for "${key}":`, newValue);
            storedValue.value = defaultValue;
            return;
          }
          localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
          console.warn(`Error setting localStorage key "${key}":`, error);
        }
      }
    },
    { deep: true }
  );

  return storedValue;
}