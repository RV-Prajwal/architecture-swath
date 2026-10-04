from pathlib import Path
import requests

ROOT = Path(__file__).resolve().parent
TIMEOUT = 30
HEADERS = {"User-Agent": "Mozilla/5.0"}

for folder in ROOT.iterdir():
    if not folder.is_dir() or folder.name.startswith("00_"): continue
    src = folder / "SOURCES.md"
    if not src.exists(): continue
    out = folder / "downloaded_images"
    out.mkdir(exist_ok=True)
    urls=[]
    for line in src.read_text(encoding="utf-8").splitlines():
        if line.startswith("http") and (".jpg" in line.lower() or ".jpeg" in line.lower() or ".png" in line.lower() or ".webp" in line.lower()):
            urls.append(line.strip().split('\t')[-1])
    for n,url in enumerate(urls,1):
        ext = Path(url.split('?',1)[0]).suffix or '.jpg'
        fn = out / f"{n:03d}{ext}"
        if fn.exists(): continue
        try:
            r=requests.get(url,headers=HEADERS,timeout=TIMEOUT)
            r.raise_for_status()
            fn.write_bytes(r.content)
            print('OK',folder.name,fn.name)
        except Exception as e:
            print('FAILED',folder.name,url,e)
