function ret(birthyear)
{
  const age=2026-birthyear;
  const left=65-age;
  return left;
}
const p=ret(2000);
console.log(`${p} years left`);