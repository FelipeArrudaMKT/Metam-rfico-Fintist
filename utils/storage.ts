
export const saveToStorage = (key: string, data: any) => {
  localStorage.setItem(`metamorfico_${key}`, JSON.stringify(data));
};

export const getFromStorage = <T,>(key: string, defaultValue: T): T => {
  const data = localStorage.getItem(`metamorfico_${key}`);
  return data ? JSON.parse(data) : defaultValue;
};

export const calculateTMB = (weight: number, height: number, age: number, gender: 'M' | 'F' = 'M') => {
  // Harris-Benedict Formula
  if (gender === 'M') {
    return 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
  }
  return 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
};
