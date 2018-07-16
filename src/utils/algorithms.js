import crypto from 'crypto-js';

export default [
  {
    title: 'Without secret key',
    algorithms: [
      { name: 'sha256', func: crypto.SHA256 },
      { name: 'sha512', func: crypto.SHA512 },
      { name: 'md5', func: crypto.MD5 },
      { name: 'sha384', func: crypto.SHA384 },
      { name: 'sha224', func: crypto.SHA224 },
      { name: 'sha1', func: crypto.SHA1 },
      { name: 'sha3', func: crypto.SHA3 },
      { name: 'ripemd160', func: crypto.RIPEMD160 }
    ]
  },
  {
    title: 'Using secret key',
    algorithms: [
      { name: 'hmac-sha256', func: crypto.HmacSHA256, key: true },
      { name: 'hmac-sha512', func: crypto.HmacSHA512, key: true },
      { name: 'hmac-md5', func: crypto.HmacMD5, key: true },
      { name: 'hmac-sha384', func: crypto.HmacSHA384, key: true },
      { name: 'hmac-sha224', func: crypto.HmacSHA224, key: true },
      { name: 'hmac-sha1', func: crypto.HmacSHA256, key: true },
      { name: 'hmac-sha3', func: crypto.HmacSHA3, key: true },
      { name: 'hmac-ripemd160', func: crypto.HmacRIPEMD160, key: true },
      { name: 'pbkdf2', func: crypto.PBKDF2, key: true }
    ]
  },
  {
    title: 'Encrypt & Decrypt',
    algorithms: [
      { name: 'aes', func: crypto.AES, key: true, decrypt: true },
      { name: 'tripledes', func: crypto.TripleDES, key: true, decrypt: true },
      { name: 'rc4', func: crypto.RC4, key: true, decrypt: true },
      { name: 'rabbit', func: crypto.Rabbit, key: true, decrypt: true },
      { name: 'rabbit-legacy', func: crypto.RabbitLegacy, key: true, decrypt: true },
      { name: 'des', func: crypto.DES, key: true, decrypt: true }
    ]
  }
];
