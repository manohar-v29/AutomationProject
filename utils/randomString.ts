export default function generateRandomEmail(): string {
  const randomString = Math.random().toString(36).substring(2, 11);
  const timestamp = Date.now();
  return `test_${randomString}_${timestamp}@automationexercise.com`;
}
