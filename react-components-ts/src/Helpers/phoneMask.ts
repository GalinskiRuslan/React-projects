export default function formatPhoneNumber(value: string): string {
  if (!value) return value;
  const phoneNumber = value.replace(/\D/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) {
    return "+994" + phoneNumber;
  }
  if (phoneNumberLength < 7) {
    return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
  }
  if (phoneNumberLength < 9)
    return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
      3,
      5
    )} ${phoneNumber.slice(5)}`;
  if (phoneNumberLength < 14) {
    return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
      3,
      5
    )} ${phoneNumber.slice(5, 8)}  ${phoneNumber.slice(
      8,
      10
    )} ${phoneNumber.slice(10, 12)}`;
  }
  if (phoneNumberLength > 14)
    return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
      3,
      5
    )} ${phoneNumber.slice(5, 8)}  ${phoneNumber.slice(
      8,
      10
    )} ${phoneNumber.substring(10, 13)}`;

  return value;
}
