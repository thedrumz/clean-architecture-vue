export function isNil(value: unknown): value is undefined | null {
  return value === undefined || value === null;
}

export function isInteger(value: unknown): value is number {
  return Number.isInteger(value);
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isEmpty<T>(value: string | T[]): boolean {
  return value.length === 0;
}
