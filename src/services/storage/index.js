export const saveItem = async (key, data) => {
  try {
    localStorage.setItem(key, data)
    return
  } catch (error) {
    return { error }
  }
}

export const restoreItem = async (key) => {
  try {
    const data = localStorage.getItem(key)
    return data
  } catch (error) {
    return { error }
  }
}
