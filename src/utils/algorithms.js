import crypto from 'crypto-js';

export default [
  {
    title: 'Without secret key',
    algorithms: [
      { name: 'sha256', func: crypto.SHA256,
        detail: 'Secure Hash Algorithm 256' },
      { name: 'sha512', func: crypto.SHA512,
        detail: 'Secure Hash Algorithm 512' },
      { name: 'md5', func: crypto.MD5,
        detail: 'Message Digest Algorithm 5' },
      { name: 'sha384', func: crypto.SHA384,
        detail: 'Secure Hash Algorithm 384' },
      { name: 'sha224', func: crypto.SHA224,
        detail: 'Secure Hash Algorithm 224' },
      { name: 'sha1', func: crypto.SHA1,
        detail: 'Secure Hash Algorithm 1' },
      { name: 'sha3', func: crypto.SHA3,
        detail: 'Secure Hash Algorithm 3' },
      { name: 'ripemd160', func: crypto.RIPEMD160,
        detail: 'RACE Integrity Primitives Evaluation Message Digest Algorithm' }
    ]
  },
  {
    title: 'Using secret key',
    algorithms: [
      { name: 'hmac-sha256', func: crypto.HmacSHA256, key: true,
        detail: 'Hash Message Authentication Code SHA256' },
      { name: 'hmac-sha512', func: crypto.HmacSHA512, key: true,
        detail: 'Hash Message Authentication Code SHA512' },
      { name: 'hmac-md5', func: crypto.HmacMD5, key: true,
        detail: 'Hash Message Authentication Code MD5' },
      { name: 'hmac-sha384', func: crypto.HmacSHA384, key: true,
        detail: 'Hash Message Authentication Code SHA384' },
      { name: 'hmac-sha224', func: crypto.HmacSHA224, key: true,
        detail: 'Hash Message Authentication Code SHA224' },
      { name: 'hmac-sha1', func: crypto.HmacSHA1, key: true,
        detail: 'Hash Message Authentication Code SHA1' },
      { name: 'hmac-sha3', func: crypto.HmacSHA3, key: true,
        detail: 'Hash Message Authentication Code SHA3' },
      { name: 'hmac-ripemd160', func: crypto.HmacRIPEMD160, key: true,
        detail: 'Hash Message Authentication Code RipeMD160' },
      { name: 'pbkdf2', func: crypto.PBKDF2, key: true,
        detail: 'Password-Based Key Derivation Function 2' }
    ]
  },
  {
    title: 'Encrypt & Decrypt',
    algorithms: [
      { name: 'aes', func: crypto.AES, key: true, decrypt: true,
        detail: 'Advanced Encryption Standard ' },
      { name: 'tripledes', func: crypto.TripleDES, key: true, decrypt: true,
        detail: 'Triple Data Encryption Standard' },
      { name: 'rc4', func: crypto.RC4, key: true, decrypt: true,
        detail: 'Rivest Cipher 4' },
      { name: 'rabbit', func: crypto.Rabbit, key: true, decrypt: true,
        detail: 'Rabbit Stream Cipher Algorithm' },
      { name: 'rabbit-legacy', func: crypto.RabbitLegacy, key: true, decrypt: true },
      { name: 'des', func: crypto.DES, key: true, decrypt: true,
        detail: 'Data Encryption Standard' }
    ]
  }
];
