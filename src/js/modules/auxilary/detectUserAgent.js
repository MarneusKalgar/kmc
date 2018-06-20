export default function detectUserAgent() {
  if (/MSIE 10/i.test(navigator.userAgent)) {
    return 'isIE10';
  }
  if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
    return 'isIE11';
  }
  if (/Edge\/\d./i.test(navigator.userAgent)) {
    return 'Microsoft Edge';
  }
  if (/Google Inc/.test(navigator.vendor)) {
    return 'Chrome';
  }
  if (/Firefox/.test(navigator.userAgent)) {
    return 'Firefox';
  }
  if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
    return 'Safari';
  }
  return false;
}
