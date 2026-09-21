import fs from "node:fs";
import path from "node:path";
const root = new URL("../src/content/docs/", import.meta.url).pathname;
const pages = [];
function visit(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) visit(p);
    else if (/\.mdx?$/.test(f.name)) pages.push(p);
  }
}
visit(root);
for (const file of pages) {
  const text = fs.readFileSync(file, "utf8");
  if (!/^---\ntitle: .+\n/m.test(text)) throw Error("Missing title: " + file);
  if (/(?:sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]+|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY)/.test(text)) throw Error("Possible secret in documentation");
  for (const match of text.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g)) {
    const link = match[1];
    if (link.startsWith("#")) continue;
    if (/^(?:javascript|data):/i.test(link)) throw Error("Unsafe documentation link");
    if (/^https?:\/\//.test(link) && !link.startsWith("https://pricedip-wiki.ramideltoro.com/")) {new URL(link); continue;}
    const route=link.replace(/^https:\/\/pricedip-wiki\.ramideltoro\.com/, "").split(/[?#]/)[0];
    const target=(route.startsWith("/")?path.join(root,route):path.resolve(path.dirname(file),route)).replace(/\/$/, "");
    if (![target, target+".md",target+".mdx",path.join(target,"index.md")].some(p=>fs.existsSync(p))) throw Error("Broken documentation link: "+link+" in "+file);
  }
}
if (pages.length < 8) throw Error("Required guides missing");
console.log(pages.length + " documentation pages and internal links checked");
