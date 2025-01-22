/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENWbVlmYXQzcU5XZ3phcEdCcERkelJzSUdCbFFoUkxGSWgySTF6a0NGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHJjbnowekVwK3hvR2RKa3A2V3hvdnU1MmJ6MUYwUUF0TXhzT2FkVyttUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT09KN2tqM3V4SVNSNVpzaGFXQmV6WEk1OStFMHRrWFpoVThpWmdJQVVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwME5UWkEvb1dYN2JPT1gyTDI2dWFvaldJam45WnEvTS9jLy9qdE1BTER3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGelcxNnRPNGorejhBUjZqaHhvUHZGM290ZEE4eTBCQUl2UE9BSlpUV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJadEVHUlNZYVNNMm9QbEluTEt4V2pCWjMxVWlDMHY3QXNua0J0TGMvakU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xKNkx3V1pRU00vVkxHLzBGWUg4UlZNQXNEaU1veFFWdjI0d0dkQi9XND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmoxZGRGU1YyUVZCK1FWMVZja2FuU0dxMGpZaXhFOWd6TzdqUE1JdTNUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJTK2tFamdwc24zelVUSnBHNHlnL2tzem5IeVpib0x0L0dvUzBBakw1RzFYZGFNQXNGRGtkNlVvbjlBZC93QytKNkd1eDZaa25IOElHc05TM0R3aWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiIvZ1luOHZVcTdXdy9VK1gveUVlZENWMTRwdWlXdGZUeGJLM2hjMHVhZjRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1QnlvYWRGeVR1T0xmQm9aYk9zWTFBIiwicGhvbmVJZCI6IjI5MjUxMmY2LTBiNWQtNGUwZC1hOTA1LWFlMzVjYzVjZWQ4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQbm9vMU1WbDBYS2l3ZEVLalQwbFJwa2x4b0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFpNU29waHJxUGNJOW5LaHFNUEZ6YmZPeFpVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5HNTFCRzdFIiwibWUiOnsiaWQiOiIyNTQ3MTM5NzI3NTM6NDJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXZpbnMyNTQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01yTnpJQURFTmFwd3J3R0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IklhQmt2eWFMY1JRS0pMR3dWK2tJdkpZcHUrOVVvQ3R1NUYva1JPRldmajg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9pWk16cXE2ZURQK3B6WVA3a0tic2l5L0ptUWY3aU9hQmk2eVVvZVVhQzd4N3lKdkZSbzNjRGsyUXJybUN5K1czTEYxNmhyenREb1BRWWZBMG5FZkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRenlmWXVLaWNoM21BMUpUZFJuSE5nbStKdkZYMkdnNDA1aWJpVDBnOTEvRHZ1cTlqNE1nbDBWRnpQL2dCNVgyREszU3FSd0x4ZUdJWnFkcmxnSXdqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxMzk3Mjc1Mzo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTR2daTDhtaTNFVUNpU3hzRmZwQ0x5V0tidnZWS0FyYnVSZjVFVGhWbjQvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3NTI4NTQ4fQ==';

const prefix = process.env.PREFIX || '-';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Avins';
const packname = process.env.PACKNAME || '🐝𝐁𝐔𝐌𝐁𝐋𝐄 𝐁𝐄𝐄🐝';
const dev = process.env.DEV || '254713972753';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || '🐝𝐁𝐔𝐌𝐁𝐋𝐄 𝐁𝐄𝐄🐝';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'false';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'false';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
