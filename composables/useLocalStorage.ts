/**
 * A composable for reactive localStorage management
 * @param key - The localStorage key
 * @param defaultValue - Default value if key doesn't exist
 * @returns A reactive ref that syncs with localStorage
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
  // Create a reactive ref with the default value
  const storedValue = ref<T>(defaultValue);

  // Only access localStorage on client side
  if (process.client) {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        storedValue.value = JSON.parse(item);
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
  }

  // Watch for changes and update localStorage
  watch(
    storedValue,
    (newValue) => {
      if (process.client) {
        try {
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