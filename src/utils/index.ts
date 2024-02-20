export const ShortAddress = (address: string) => {
  return address && address !== '0' ? address.replace(/(^\S{6})(\S*)(\S{4})$/, '$1...$3') : '';
};
